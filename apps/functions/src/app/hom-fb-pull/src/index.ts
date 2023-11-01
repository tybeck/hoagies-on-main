import {Callback, Context, Handler} from 'aws-lambda';

import '../../../shared/config';

import {bootstrap} from '@hom-api/shared';
import {AwsLambdaEvent} from '@hom-api/types';

import {FbPullModule} from './fb-pull.module';

// TODO: finish implementation
const handler = async (
  event: AwsLambdaEvent,
  context: Context,
  callback: Callback,
): Handler => {
  const server = await bootstrap(event, FbPullModule);
  return server(event, context, callback);
};

export {handler};
