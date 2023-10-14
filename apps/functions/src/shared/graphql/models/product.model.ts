import {Document, Schema as MongooseSchema} from 'mongoose/lib/index';
import {ObjectType, Field} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {mapSeries} from 'bluebird';
import {INestApplication} from '@nestjs/common';

import {AssetService} from '@hom-api/asset';

import {Meat} from './meat.model';
import {Cheese} from './cheese.model';
import {Condiment} from './condiment.model';
import {Category, CategorySchema} from './category.model';

export interface IProduct extends Document {
  _id: MongooseSchema.Types.ObjectId;
  name: string;
  price: number;
  key?: string;
  meats: Meat[];
  cheeses: Cheese[];
  condiments: Condiment[];
  notes?: string;
  askForCheese?: boolean;
  created: Date;
  updated: Date;
  categories: Category[];
  needsOneOf?: MongooseSchema.Types.ObjectId[];
  imageKey?: string[];
}

export interface IVirtualizedProduct extends IProduct {
  images: string[];
}

@ObjectType()
@Schema({toJSON: {virtuals: true}, toObject: {virtuals: true}})
export class Product implements IProduct {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, {defaultValue: ''})
  @Prop()
  key?: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Number)
  @Prop()
  price: number;

  @Field(() => [Meat])
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Meat.name})
  meats: Meat[];

  @Field(() => [Cheese])
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Cheese.name})
  cheeses: Cheese[];

  @Field(() => [Condiment])
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: Condiment.name})
  condiments: Condiment[];

  @Field(() => Boolean, {defaultValue: false})
  @Prop()
  askForCheese?: boolean;

  @Field(() => String)
  @Prop()
  notes?: string;

  @Field(() => Date)
  @Prop()
  created: Date;

  @Field(() => Date)
  @Prop()
  updated: Date;

  @Field(() => [Category])
  @Prop({schema: CategorySchema})
  categories: Category[];

  @Field(() => [String], {defaultValue: []})
  @Prop()
  needsOneOf?: MongooseSchema.Types.ObjectId[];

  @Field(() => [String], {defaultValue: []})
  @Prop()
  imageKey?: string[];
}

/**
 * @class VirtualizedProduct
 * This class has virtual properties which don't exist in the product collection; we need
 * to extend the original product class as mongoose will complain about there being a field
 * and a virtual field of the same name; this way separates that concern while allowing both
 * to function.
 */
@ObjectType()
@Schema({toJSON: {virtuals: true}, toObject: {virtuals: true}})
export class VirtualizedProduct extends Product implements IVirtualizedProduct {
  @Field(() => [String], {defaultValue: []})
  @Prop()
  images: string[];
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.virtual('images').get(function () {
  if (this.imageKey && this.imageKey.length) {
    return new Promise(async (resolve) => {
      const app: INestApplication = globalThis.App;
      const assetService: AssetService = app.get(AssetService);
      const images = await mapSeries(this.imageKey, (key) =>
        assetService.getAsset<string>(key),
      );
      resolve(images.filter((img) => img !== null));
    });
  }
  return Promise.resolve([]);
});
