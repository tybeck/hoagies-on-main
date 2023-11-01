import {Global, Module} from '@nestjs/common';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import {JwtModule} from '@nestjs/jwt';

import {ConfigModule, ConfigService, Environment} from '@hom-api/config';
import {AssetService} from '@hom-api/asset';
import {S3Service} from '@hom-api/s3';

@Global()
@Module({
  providers: [ConfigService, AssetService, S3Service],
  exports: [JwtModule, CacheModule, AssetService, S3Service],
  imports: [
    CacheModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        const [host, port, local] = config.get(
          Environment.RedisHost,
          Environment.RedisPort,
          Environment.Local,
        ) as [string, number, boolean];
        return {
          isGlobal: true,
          store: redisStore,
          ...(!local && {
            tls: true,
          }),
          ttl: 0,
          host,
          port,
        };
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
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
})
export class GlobalModule {}
