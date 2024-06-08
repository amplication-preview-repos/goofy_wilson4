/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Profile } from "./Profile";
import { ProfileCountArgs } from "./ProfileCountArgs";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileFindUniqueArgs } from "./ProfileFindUniqueArgs";
import { CreateProfileArgs } from "./CreateProfileArgs";
import { UpdateProfileArgs } from "./UpdateProfileArgs";
import { DeleteProfileArgs } from "./DeleteProfileArgs";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { User } from "../../user/base/User";
import { ProfileService } from "../profile.service";
@graphql.Resolver(() => Profile)
export class ProfileResolverBase {
  constructor(protected readonly service: ProfileService) {}

  async _profilesMeta(
    @graphql.Args() args: ProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Profile])
  async profiles(
    @graphql.Args() args: ProfileFindManyArgs
  ): Promise<Profile[]> {
    return this.service.profiles(args);
  }

  @graphql.Query(() => Profile, { nullable: true })
  async profile(
    @graphql.Args() args: ProfileFindUniqueArgs
  ): Promise<Profile | null> {
    const result = await this.service.profile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Profile)
  async createProfile(
    @graphql.Args() args: CreateProfileArgs
  ): Promise<Profile> {
    return await this.service.createProfile({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Profile)
  async updateProfile(
    @graphql.Args() args: UpdateProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.updateProfile({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Profile)
  async deleteProfile(
    @graphql.Args() args: DeleteProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.deleteProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Question], { name: "questions" })
  async findQuestions(
    @graphql.Parent() parent: Profile,
    @graphql.Args() args: QuestionFindManyArgs
  ): Promise<Question[]> {
    const results = await this.service.findQuestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Profile): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}