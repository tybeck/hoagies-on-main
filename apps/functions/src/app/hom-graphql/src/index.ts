import { Callback, Context, Handler } from 'aws-lambda';

import '../../../shared/config';

import { bootstrap } from '@hom-api/shared';

import { GraphqlModule } from './graphql.module';

const handler = async (
  event: any,
  context: Context,
  callback: Callback
): Handler => {
  const server = await bootstrap(GraphqlModule);
  return server(event, context, callback);
};

export { handler };
