import {Document, Schema as MongooseSchema} from 'mongoose/lib/index';
import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export interface IAsset extends Document {
  _id: MongooseSchema.Types.ObjectId;
  key: string;
}

@ObjectType()
@Schema()
export class Asset implements IAsset {
  @Field(() => Int)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  key: string;
}

export type AssetDocument = Asset & Document;
export const AssetSchema = SchemaFactory.createForClass(Asset);
