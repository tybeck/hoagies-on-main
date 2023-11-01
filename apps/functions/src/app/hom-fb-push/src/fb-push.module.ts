import {Module} from '@nestjs/common';

import {FbPushController} from './fb-push.controller';

@Module({
  controllers: [
    FbPushController,
  ],
  providers: [],
})
export class FbPushModule {}
