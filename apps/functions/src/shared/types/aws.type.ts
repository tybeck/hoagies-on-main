export enum LambdaEventSource {
  ServerlessPluginWarmup = 'serverless-plugin-warmup',
}

export type RmqMessagesByQueue = {
  basicProperties: {
    [key: string]: string | number | object | null,
  }
  redelivered: boolean;
  data: string;
}

export type AwsLambdaEvent = {
  source: LambdaEventSource;
  rmqMessagesByQueue: {
    [key: string]: [RmqMessagesByQueue];
  };
}