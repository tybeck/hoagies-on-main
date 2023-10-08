import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class AuthTokenEntityResponse {
  @Field()
  isValid: boolean;
}
