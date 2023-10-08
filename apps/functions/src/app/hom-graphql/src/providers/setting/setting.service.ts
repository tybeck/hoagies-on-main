import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {ISetting, Setting, SettingDocument} from '@hom-api/models';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel(Setting.name) private setting: Model<SettingDocument>,
  ) {}

  async getSettings(): Promise<ISetting[]> {
    return this.setting.find().lean<ISetting[]>().exec();
  }
}
