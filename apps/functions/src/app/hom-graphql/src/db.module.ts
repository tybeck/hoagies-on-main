import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { join } from 'path';

import { ConfigModule, ConfigService, Environment } from '@hom-api/modules';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (
        config: ConfigService
      ): Promise<MongooseModuleOptions> => {
        const [uri, dbName, local] = config.get(
          Environment.MongoConnectionString,
          Environment.DbName,
          Environment.Local
        ) as string[];
        return {
          uri,
          dbName,
          ...(!local && {
            tlsCAFile: join(__dirname, 'assets/global-bundle.pem'),
            tls: true,
          }),
          retryWrites: true,
          w: 'majority',
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
