import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ICategory, Category, CategoryDocument } from '@hom-api/models';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private category: Model<CategoryDocument>
  ) {}

  async getCategories(): Promise<ICategory[]> {
    return this.category.find().lean<ICategory[]>().exec();
  }
}
