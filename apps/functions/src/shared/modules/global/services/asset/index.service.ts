import {
  Inject,
  Injectable,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import {CACHE_MANAGER} from '@nestjs/cache-manager';
import {Cache} from 'cache-manager';

import {ConfigService, Environment} from '@hom-api/config';

import {S3Service} from '../s3/index.service';

@Injectable()
export class AssetService implements OnApplicationBootstrap {
  private logger = new Logger(AssetService.name);

  static BUCKET_INTERPOLATION = '{{BUCKET}}';
  static PATH_INTERPOLATION = '{{PATH}}';
  static ASSET_URI = `https://${AssetService.BUCKET_INTERPOLATION}.s3.amazonaws.com/${AssetService.PATH_INTERPOLATION}`;
  static KEY_NAME = 'key';
  static LAST_RETRIEVAL_KEY_NAME = 'asset-last-retrieval';
  static ONE_WEEK_MILLIS = 1000 * 60 * 60 * 24 * 7;

  /**
   * @property ASSET_KEY_PREFIX
   * This is used when storing a value in our cache manager - all stored asset paths
   * will be prefixed with this.
   * @static
   */
  static ASSET_KEY_PREFIX = 'asset--';
  constructor(
    @Inject(S3Service) private s3: S3Service,
    @Inject(ConfigService) private config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  /**
   * @method getAssetsToCache
   * Get all static assets from s3, get the keys and cache them
   */
  async getAssetsToCache() {
    const lastRetrieval =
      (await this.cacheManager.get<number>(
        AssetService.LAST_RETRIEVAL_KEY_NAME,
      )) || 0;
    const timestamp = Date.now();
    if (lastRetrieval + AssetService.ONE_WEEK_MILLIS < timestamp) {
      this.logger.log(`Attempting to refresh assets...`);
      const objects = await this.s3
        .getFactory(Environment.AssetBucket)
        .getAll();
      const bucket = this.config.get(Environment.AssetBucket);
      if (objects && objects.length) {
        const metadataObjects = await this.s3.getMetadataForObjects(objects);
        const values: [string, string | number][] = metadataObjects
          .filter(({metadata}) =>
            Object.keys(metadata).includes(AssetService.KEY_NAME),
          )
          .map(({metadata, key}) => {
            const keyName = `${AssetService.ASSET_KEY_PREFIX}${
              metadata[AssetService.KEY_NAME]
            }`;
            return [
              keyName,
              AssetService.ASSET_URI.replace(
                AssetService.BUCKET_INTERPOLATION,
                bucket,
              ).replace(AssetService.PATH_INTERPOLATION, key),
            ];
          });
        for (const asset of values) {
          const [key, value] = asset;
          if (key) {
            await this.cacheManager.store.set(key, value);
          }
        }
        await this.cacheManager.store.set(
          AssetService.LAST_RETRIEVAL_KEY_NAME,
          Date.now(),
        );
        this.logger.log(`Assets updated.`);
      }
      return;
    }
    this.logger.log(`Assets already up-to-date!`);
    return Promise.resolve();
  }

  async getAsset<T = string>(key: string) {
    return this.cacheManager.get<T>(`${AssetService.ASSET_KEY_PREFIX}${key}`);
  }

  async onApplicationBootstrap() {
    await this.getAssetsToCache();
  }
}
