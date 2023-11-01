/**
 * Local version of our serverless architecture, this is independent
 * of what serverless-offline provides and is more robust.
 * @author Tyler Beck
 */
import {config} from 'dotenv';
import {join} from 'path';

config({path: join(__dirname, '../.env.development')});

import {NestFactory} from '@nestjs/core';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {INestApplication} from '@nestjs/common';

import {ConfigService, Environment} from '@hom-api/config';

import {AppModule} from './app.module';

declare module globalThis {
  let App: INestApplication;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const config = app.get(ConfigService);
  const [secret, port] = config.get(
    Environment.JwtSecret,
    Environment.Port,
  ) as [string, number];

  globalThis.App = app;

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

(async () => await bootstrap())();
