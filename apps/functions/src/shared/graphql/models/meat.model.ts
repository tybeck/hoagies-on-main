import { Document, Schema as MongooseSchema } from 'mongoose/lib/index';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export interface IMeat extends Document {
  _id: MongooseSchema.Types.ObjectId;
  name: string;
}

@ObjectType()
@Schema()
export class Meat implements IMeat {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;
}

export type MeatDocument = Meat & Document;
export const MeatSchema = SchemaFactory.createForClass(Meat);
export const MeatModel = mongoose.model(Meat.name, MeatSchema);
