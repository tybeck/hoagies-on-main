import {Document, Schema as MongooseSchema} from 'mongoose/lib/index';
import {ObjectType, Field} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';

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
}

@ObjectType()
@Schema()
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
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
