import {Document, Schema as MongooseSchema} from 'mongoose/lib/index';
import {ObjectType, Field} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export interface ICondiment extends Document {
  _id: MongooseSchema.Types.ObjectId;
  name: string;
  type: string;
  subtype?: string;
}

@ObjectType()
@Schema()
export class Condiment implements ICondiment {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  type: string;

  @Field(() => String, {nullable: true, defaultValue: null})
  @Prop()
  subtype?: string;
}

export type CondimentDocument = Condiment & Document;
export const CondimentSchema = SchemaFactory.createForClass(Condiment);
