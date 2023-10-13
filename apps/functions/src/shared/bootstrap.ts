import 'reflect-metadata';
import {NestFactory} from '@nestjs/core';
import {
  DynamicModule,
  ForwardReference,
  INestApplication,
  Module,
  Type,
  ValidationPipe,
} from '@nestjs/common';
import {Handler} from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';

import {GlobalModule} from '@hom-api/modules';

let instance: Handler;

declare module globalThis {
  let App: INestApplication;
}

/**
 * @method bootstrap
 * Bootstraps by passing a functions specified module to nest; we create
 * this once to help reduce start-time.
 * @param module
 */
export async function bootstrap(
  module: Type | DynamicModule | Promise<DynamicModule> | ForwardReference,
): Promise<Handler> {
  if (instance) {
    return Promise.resolve(instance);
  }

  @Module({
    imports: [GlobalModule, module],
    providers: [],
    controllers: [],
    exports: [],
  })
  class BootstrappedModule {}

  const application = await NestFactory.create(BootstrappedModule);
  application.useGlobalPipes(new ValidationPipe());
  application.enableCors({
    origin: '*',
  });
  await application.init();

  globalThis.App = application;

  const app = application.getHttpAdapter().getInstance();

  return serverlessExpress({app});
}
