import {DynamicModule, INestApplication, Module} from '@nestjs/common';
import {InjectionToken} from '@nestjs/common';
import {connect} from 'amqp-connection-manager';


import {ConfigModule, ConfigService, Environment} from '@hom-api/config';
import {AwsLambdaEvent, RmqQueue} from '@hom-api/types';

const QUEUE_DELIMITER = '::/';

declare module globalThis {
  let App: INestApplication;
}

const getMqService = (queue: RmqQueue): MqService => {
  const config = globalThis.App.get(ConfigService);
  const [url, port, user, pass] = config.get(
    Environment.RmqUrl,
    Environment.RmqPort,
    Environment.RmqUser,
    Environment.RmqPass,
  );
  const getUrl = () => {
    if (url && port && user && pass) {
      return [
        url.replace(
          '{{credentials}}',
          [user, pass].join(':'),
        ),
        port,
      ].join(':');
    }
    return null;
  };

  return {
    get: (queueName: string) => {
      if (queue && queue[queueName]) {
        return queue[queueName];
      }
      return null;
    },
    send: async (queueName: string, msg: string) => {
      const url = getUrl();
      if (url) {
        const connection = connect(url);

        await connection.connect();

        const channel = connection.createChannel({json: true});

        await channel.sendToQueue(queueName, msg);
        await channel.close();
        await connection.close();
      }
    },
  };
}

export const RMQ_MESSAGES_BY_QUEUE_TOKEN: InjectionToken = Symbol('RMQ_MESSAGES_BY_QUEUE');

export type MqService = {
  get: (queue: string) => string | null;
  send: (queue: string, msg: string) => Promise<void>;
}

@Module({})
export class MqModule {
  static register(event: AwsLambdaEvent): DynamicModule {
    let queue = null;
    if (event.rmqMessagesByQueue) {
      const value = Object
        .keys(event.rmqMessagesByQueue)
        .map(name => {
          const queueName = name.replace(QUEUE_DELIMITER, '');
          const data = event.rmqMessagesByQueue[name]?.[0]?.data;
          if (data) {
            return {
              [queueName]: atob(data),
            }
          }
          return null;
        });
      queue = Object.assign({}, ...value);
    }
    const provider = {
      provide: RMQ_MESSAGES_BY_QUEUE_TOKEN,
      useValue: getMqService(queue),
    };
    return {
      global: true,
      module: MqModule,
      imports: [ConfigModule],
      providers: [
        provider,
      ],
      exports: [
        RMQ_MESSAGES_BY_QUEUE_TOKEN,
      ],
    }
  }
}