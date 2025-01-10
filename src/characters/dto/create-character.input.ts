import { IsEnum, IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator'
import { CharacterGender } from '../entities/character.entity'


export class CreateCharacterInput {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsString()
    species: string

    @IsEnum(CharacterGender)
    gender: CharacterGender

    @IsInt()
    height: number

    @IsInt()
    weight: number

    @IsString()
    homeworld

    @IsString()
    description: string
}