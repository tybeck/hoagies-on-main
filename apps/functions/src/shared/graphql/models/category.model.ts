import { Document, Schema as MongooseSchema } from 'mongoose/lib';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum ColorName {
  White = 'white',
  Black = 'black',
  CyanCornflowerBlue = 'cyanCornflowerBlue',
  BrightYellow = 'brightYellow',
  Linen = 'linen',
  SpaceCadet = 'spaceCadet',
  DavysGrey = 'davysGrey',
  Apple = 'apple',
  Pistachio = 'pistachio',
  Sunglow = 'sunGlow',
  DeepSaffron = 'deepSaffron',
  DarkSilver = 'darkSilver',
  Cultured = 'cultured',
}

export interface ICategory extends Document {
  _id: MongooseSchema.Types.ObjectId;
  name: string;
}

@ObjectType()
@Schema()
export class Category implements ICategory {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String, {defaultValue: ''})
  @Prop()
  longName?: string;

  @Field(() => Boolean, {defaultValue: false})
  @Prop()
  onHomePage?: boolean;

  @Field(() => String, {nullable: true})
  @Prop()
  color?: ColorName;

  @Field(() => String, {defaultValue: ''})
  @Prop()
  key?: string;
}

export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
