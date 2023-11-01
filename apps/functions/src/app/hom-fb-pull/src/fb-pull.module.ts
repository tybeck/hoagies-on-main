import {Module} from '@nestjs/common';

import {FbPullController} from './fb-pull.controller';

@Module({
  controllers: [
    FbPullController,
  ],
  providers: [],
})
export class FbPullModule {}
