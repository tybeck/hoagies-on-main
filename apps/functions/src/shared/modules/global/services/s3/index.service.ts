import {Inject, Injectable, Logger} from '@nestjs/common';
import {
  HeadObjectCommand,
  HeadObjectCommandOutput,
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';

import {ConfigService, Environment} from '@hom-api/modules';
import {join} from "path";

/**
 * @type Bucket
 * Types of buckets
 */
type Bucket = Environment.AssetBucket;

type MetadataObject = {
  key: string;
  metadata: HeadObjectCommandOutput['Metadata'];
};

@Injectable()
export class S3Service {
  private logger = new Logger(S3Service.name);
  private client: S3Client | null = null;
  private bucket: Bucket | null = null;

  constructor(@Inject(ConfigService) private config: ConfigService) {
    const [accessKeyId, secretAccessKey, region, local] = this.config.get<[string, string, string, boolean]>(
      Environment.HomAwsAccessKeyId,
      Environment.HomAwsSecretAccessKey,
      Environment.HomAwsRegion,
      Environment.Local,
    );
    this.logger.log(`Using access key: ${accessKeyId}`);
    this.client = new S3Client({
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      region,
      ...(!local && {
        tls: true,
      }),
    });
  }

  /**
   * @method getFactory
   * Needs to be invoked to target the bucket to run commands against.
   * @param bucket
   */
  getFactory(bucket: Bucket): Omit<S3Service, 'getFactory'> {
    this.bucket = bucket;
    return this;
  }

  private hasDefinedBucket() {
    if (!this.bucket) {
      throw new Error(
        'Please define a bucket to be used by calling `getFactory`!',
      );
    }
  }

  /**
   * @method getAll
   */
  public getAll = async (): Promise<ListObjectsCommandOutput['Contents']> => {
    this.hasDefinedBucket();
    const Bucket = this.config.get<string>(this.bucket);
    this.logger.log(`Get all objects in bucket: ${Bucket}`);
    const command = new ListObjectsCommand({
      Bucket,
    });
    const response = await this.client.send(command);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    if (response && response.Contents) {
      return response.Contents.filter((content) => !content.Key.endsWith('/'));
    }
    return [];
  };

  /**
   * @method getMetadataForObjects
   * @param objects
   */
  public getMetadataForObjects = async (
    objects: ListObjectsCommandOutput['Contents'],
  ): Promise<MetadataObject[]> => {
    this.hasDefinedBucket();

    const Bucket = this.config.get<string>(this.bucket);
    const metadata: MetadataObject[] = [];
    for (const object of objects) {
      const {Key} = object;
      const command = new HeadObjectCommand({
        Bucket,
        Key,
      });
      const response = await this.client.send(command);
      if (response && response.Metadata) {
        metadata.push({
          key: Key,
          metadata: response.Metadata,
        });
      }
    }
    return metadata;
  };
}
