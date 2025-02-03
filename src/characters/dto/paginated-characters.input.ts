import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Character } from "../entities/character.entity";

@ObjectType()
export class PageInfo {
    @Field(() => Int)
    page: number

    @Field()
    hasNext: boolean

    @Field()
    hasPrevious: boolean
}

@ObjectType()
export class PaginatedCharacters {
    @Field(() => [Character])
    characters: [Character]

    @Field(() => Int)
    count: number

    @Field(() => PageInfo)
    pageInfo : PageInfo
}