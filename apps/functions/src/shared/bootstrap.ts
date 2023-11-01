import 'reflect-metadata';
import {NestFactory} from '@nestjs/core';
import {DynamicModule, ForwardReference, INestApplication, Module, Type, ValidationPipe, Logger} from '@nestjs/common';
import {Handler} from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';

import {GlobalModule, MqModule} from '@hom-api/modules';
import {AwsLambdaEvent, LambdaEventSource} from '@hom-api/types';
import {noop} from '@hom-api/shared-utils';

let instance: Handler;

declare module globalThis {
  let App: INestApplication;
}

/**
 * @method bootstrap
 * Bootstraps by passing a functions specified module to nest; we create
 * this once to help reduce start-time.
 * @param {AwsLambdaEvent} event
 * @param {Type|DynamicModule|Promise<DynamicModule>|ForwardReference} module
 * @param {boolean} includeGlobal
 */
export async function bootstrap(
  event: AwsLambdaEvent,
  module: Type | DynamicModule | Promise<DynamicModule> | ForwardReference,
  includeGlobal: boolean = true
): Promise<Handler> {
  const logger = new Logger('Bootstrapper');

  if (event && event.source && event.source === LambdaEventSource.ServerlessPluginWarmup) {
    logger.log(`Warmup...`);
    return noop;
  }

  if (instance) {
    return Promise.resolve(instance);
  }

  @Module({
    imports: [
      ...(includeGlobal ? [GlobalModule] : []),
      /**
       * begin::modules dependent on aws lambda event
       */
      MqModule.register(event),
      /**
       * end::modules dependent on aws lambda event
       */
      module,
    ],
    providers: [],
    controllers: [],
    exports: [],
  })
  class BootstrappedModule {}

  const application = await NestFactory.create(BootstrappedModule);

  globalThis.App = application;

  application.useGlobalPipes(new ValidationPipe());
  application.enableCors({
    origin: '*',
  });
  await application.init();

  const app = application.getHttpAdapter().getInstance();

  instance = serverlessExpress({app});

  return instance;
}
