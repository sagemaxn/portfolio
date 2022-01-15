import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";

@Resolver()
export class ContactResolver {

  @Query(() => String)
  async test(){
    const b = 'f'
    return b
  }

}
