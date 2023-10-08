/**
 * Local version of our serverless architecture
 * @author Tyler Beck
 */
import {NestFactory} from '@nestjs/core';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {config} from 'dotenv';
import {join} from 'path';

import {ConfigService, Environment} from '@hom-api/modules';

import {AppModule} from './app.module';

config({path: join(__dirname, '../.env.development')});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const config = app.get(ConfigService);
  const [secret, port] = config.get(
    Environment.JwtSecret,
    Environment.Port,
  ) as [string, number];

  app.use(
    session({
      secret,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(cookieParser());
  await app.listen(port);
}
bootstrap();
