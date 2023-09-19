import { Global, Module } from '@nestjs/common';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { JwtService } from '@nestjs/jwt';

import { ConfigModule } from '@hom-api/modules';

import { ConfigService, Environment } from '../config/index.service';

@Global()
@Module({
  providers: [JwtService],
  exports: [JwtService],
  imports: [
    CacheModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        const [host, port] = config.get(
          Environment.RedisHost,
          Environment.RedisPort
        ) as [string, number];
        return {
          isGlobal: true,
          store: async () => {
            return await redisStore({
              socket: {
                host,
                port,
              },
            });
          },
        } as unknown as CacheStore;
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
})
export class GlobalModule {}
