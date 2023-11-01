import {Controller, Inject, OnApplicationBootstrap} from '@nestjs/common';

import {MqService, RMQ_MESSAGES_BY_QUEUE_TOKEN} from '@hom-api/mq';

// TODO: finish implementation
@Controller()
export class FbPullController implements OnApplicationBootstrap {
  constructor(@Inject(RMQ_MESSAGES_BY_QUEUE_TOKEN) private mq: MqService) {}

  async onApplicationBootstrap() {}
}
