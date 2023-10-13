import {Global, Module} from '@nestjs/common';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import {JwtModule} from '@nestjs/jwt';

import {ConfigModule, ConfigService, Environment} from '@hom-api/modules';

import {S3Service} from './services/s3/index.service';
import {AssetService} from './services/asset/index.service';

@Global()
@Module({
  providers: [
    ConfigService,
    AssetService,
    S3Service,
  ],
  exports: [
    JwtModule,
    CacheModule,
    AssetService,
    S3Service,
  ],
  imports: [
    CacheModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        const [host, port] = config.get(
          Environment.RedisHost,
          Environment.RedisPort,
        ) as [string, number];
        return {
          isGlobal: true,
          store: redisStore,
          tls: true,
          ttl: 0,
          host,
          port,
        }
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        const secret = config.get(Environment.JwtSecret);
        return {
          secret,
          signOptions: {
            expiresIn: '6hr',
          },
        }
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
})
export class GlobalModule {}
