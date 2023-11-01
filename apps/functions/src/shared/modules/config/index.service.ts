import {Injectable} from '@nestjs/common';
export enum Environment {
  Url = 'URL',
  Port = 'PORT',
  DbName = 'DB_NAME',
  DbPort = 'DB_PORT',
  DbHost = 'DB_HOST',
  DbUser = 'DB_USER',
  DbPass = 'DB_PASS',
  MongoConnectionString = 'MONGO_CONNECTION_STRING',
  GoogleClientId = 'GOOGLE_CLIENT_ID',
  GoogleSecret = 'GOOGLE_SECRET',
  FbAppId = 'FB_APP_ID',
  FbAppSecret = 'FB_APP_SECRET',
  FbPageId = 'FB_PAGE_ID',
  FbPageAccessToken = 'FB_PAGE_ACCESS_TOKEN',
  TwitterClientId = 'TWITTER_CLIENT_ID',
  TwitterSecret = 'TWITTER_SECRET',
  CallbackUrl = 'CALLBACK_URL',
  JwtSecret = 'JWT_SECRET',
  RedisHost = 'REDIS_HOST',
  RedisPort = 'REDIS_PORT',
  DoordashDeveloperId = 'DOORDASH_DEVELOPER_ID',
  DoordashKeyId = 'DOORDASH_KEY_ID',
  DoordashSigningSecret = 'DOORDASH_SIGNING_SECRET',
  FbGraphUrl = 'FB_GRAPH_URL',
  FbGraphUrlRating = 'FB_GRAPH_URL_RATING',
  FbGraphUrlPublishedPosts = 'FB_GRAPH_URL_PUBLISHED_POSTS',
  FbPullCron = 'FB_PULL_CRON',
  NodeEnv = 'NODE_ENV',
  Local = 'LOCAL',
  HomAwsAccessKeyId = 'HOM_AWS_ACCESS_KEY_ID',
  HomAwsSecretAccessKey = 'HOM_AWS_SECRET_ACCESS_KEY',
  HomAwsRegion = 'HOM_AWS_REGION',
  AssetBucket = 'ASSET_BUCKET',
  RmqUrl = 'RMQ_URL',
  RmqPort = 'RMQ_PORT',
  RmqUser = 'RMQ_USER',
  RmqPass = 'RMQ_PASS',
}

export type EnvironmentValues = Record<Environment, string>;

declare const process: {
  env: EnvironmentValues;
};

type EnvConfigType = string | number | boolean;

@Injectable()
export class ConfigService {
  get<T>(key: Environment): T extends EnvConfigType ? T : string;
  get<T>(...key: Environment[]): T extends EnvConfigType[] ? T : string[];

  /**
   * @method get
   * @description Get configuration option for the specified environment
   * @param key
   */
  get(...key: Environment[]) {
    if (key.length > 1) {
      return key.map((environmentKey) => {
        if (process.env[environmentKey]) {
          return process.env[environmentKey];
        }
        return this.getFallbackConfigurationValue(environmentKey);
      });
    }
    if (process.env[key[0]]) {
      return process.env[key[0]];
    }
    return this.getFallbackConfigurationValue(key[0]);
  }

  /**
   * @method getFallbackConfigurationValue
   * @description Fallback configuration values if they're not provided by
   * an environment file. This is bare minimum to get our application running if
   * the specified values aren't provided.
   * TODO: finish implementation
   * @private
   */
  private getFallbackConfigurationValue<T>(
    key: Environment,
  ): T | string | number | boolean | null {
    return null;
  }
}
