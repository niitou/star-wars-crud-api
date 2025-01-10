import { HttpException, Injectable } from '@nestjs/common';
import { CreateCharacterInput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) { }
  async create(createcharacterInput: CreateCharacterInput) {
    const characterData = await this.characterRepository.create(createcharacterInput);
    return this.characterRepository.save(characterData)
  }

  async findAll() {
    return await this.characterRepository.find({ relations: ['homeworld'] });
  }

  async findOne(id: number) {
    const characterData = await this.characterRepository.findOne({ where: { id: id }, relations: ['homeworld'] });
    if (!characterData) throw new HttpException('Character not found', 404)
    return characterData
  }

  async update(id: number, updatecharacterInput: UpdateCharacterInput) {
    const existingcharacter = await this.characterRepository.findOneBy({ id })
    if (!existingcharacter) throw new HttpException('Character not found', 404)

    const characterData = this.characterRepository.merge(existingcharacter, updatecharacterInput)
    return await this.characterRepository.save(characterData);
  }

  async remove(id: number) {
    const characterData = await this.characterRepository.findOneBy({ id })
    if (!characterData) throw new HttpException('Character not found', 404)

    return await this.characterRepository.remove(characterData);
  }
}
