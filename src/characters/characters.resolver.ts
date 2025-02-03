import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';

@Resolver('Character')
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Mutation('createCharacter')
  create(@Args('createCharacterInput') createCharacterInput: CreateCharacterInput) {
    return this.charactersService.create(createCharacterInput);
  }

  @Query('characters')
  findAll(){
    return this.charactersService.findAll();
  }

  @Query('paginatedCharacters')
  findPaginated(
    @Args('page', {type: () => Int, defaultValue: 1}) page : number,
    @Args('limit', {type: () => Int, defaultValue: 10}) limit : number
  ) {
    return this.charactersService.findPaginated(page, limit)
  }

  @Query('character')
  findOne(@Args('id') id: number) {
    return this.charactersService.findOne(id);
  }

  @Mutation('updateCharacter')
  update(@Args('updateCharacterInput') updateCharacterInput: UpdateCharacterInput) {
    return this.charactersService.update(updateCharacterInput.id, updateCharacterInput);
  }

  @Mutation('removeCharacter')
  remove(@Args('id') id: number) {
    return this.charactersService.remove(id);
  }
}
