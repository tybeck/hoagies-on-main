import {Global, Module} from '@nestjs/common';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import {JwtModule} from '@nestjs/jwt';

import {ConfigModule, ConfigService, Environment} from '@hom-api/modules';

@Global()
@Module({
  exports: [
    JwtModule,
    CacheModule,
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
