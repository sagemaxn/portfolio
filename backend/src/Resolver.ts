import { Resolver, Query, Mutation, Arg, Ctx, InputType, Field, ObjectType } from "type-graphql";

@ObjectType()
export class Message {
  @Field(() => String)
  public name: string;

  @Field(() => String)
  public email: string;

  @Field(() => String)
  public message: string
}

@InputType()
export class MessageInput {
    @Field(() => String)
    name: string
    @Field(() => String)
    email: string
    @Field(() => String)
    message: string
}

@Resolver()
export class ContactResolver {

  @Query(() => String)
  async test(){
    const b = 'f'
    return b
  }

  @Mutation(() => Message)
  async contactMessage(
    @Arg('messageInput') { name, email, message } : MessageInput
  ){
    const m = {name, email, message}
    return m
  }

}
