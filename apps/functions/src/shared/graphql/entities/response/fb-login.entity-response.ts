import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class FbLoginEntityResponse {
  @Field()
  ok: boolean;
}
