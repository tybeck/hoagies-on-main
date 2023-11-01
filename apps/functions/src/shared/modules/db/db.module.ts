import {Module} from '@nestjs/common';
import {join} from 'path';

import {MongooseModule, MongooseModuleOptions} from '@nestjs/mongoose';
import {ConfigModule, ConfigService, Environment} from '@hom-api/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (
        config: ConfigService,
      ): Promise<MongooseModuleOptions> => {
        const [uri, dbName, local] = config.get(
          Environment.MongoConnectionString,
          Environment.DbName,
          Environment.Local,
        ) as string[];
        return {
          uri,
          dbName,
          ...(!local && {
            tls: true,
            tlsCAFile: join(__dirname, 'assets/global-bundle.pem'),
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
