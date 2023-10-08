import {Query, Resolver} from '@nestjs/graphql';
import {forwardRef, Inject} from '@nestjs/common';

import {Setting, ISetting} from '@hom-api/models';
import {SettingService} from '@hom-api-fn/graphql-providers';

@Resolver(() => Setting)
export class SettingResolver {
  constructor(
    @Inject(forwardRef(() => SettingService)) private settings: SettingService,
  ) {}

  @Query(() => [Setting])
  async getSettings(): Promise<Pick<ISetting[], keyof Array<ISetting>>> {
    return this.settings.getSettings();
  }
}
