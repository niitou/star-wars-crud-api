import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateCharacterInput } from './create-character.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCharacterInput extends PartialType(CreateCharacterInput) {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
