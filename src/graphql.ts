
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export class CreateCharacterInput {
    name: string;
    species?: Nullable<string>;
    gender?: Nullable<string>;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    homeworld?: Nullable<string>;
    description?: Nullable<string>;
}

export class UpdateCharacterInput {
    id: string;
    name?: Nullable<string>;
    species?: Nullable<string>;
    gender?: Nullable<string>;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    homeworld?: Nullable<string>;
    description?: Nullable<string>;
}

export class CreatePlanetInput {
    name: string;
    diameter?: Nullable<number>;
    population?: Nullable<number>;
    climate?: Nullable<string>;
    terrain?: Nullable<Nullable<string>[]>;
}

export class UpdatePlanetInput {
    id: string;
    name?: Nullable<string>;
    diameter?: Nullable<number>;
    population?: Nullable<number>;
    climate?: Nullable<string>;
    terrain?: Nullable<Nullable<string>[]>;
}

export class Character {
    id: string;
    name: string;
    species?: Nullable<string>;
    gender?: Nullable<Gender>;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    homeworld?: Nullable<Planet>;
    description?: Nullable<string>;
}

export class PaginatedCharacters {
    characters: Character[];
    count: number;
    pageInfo: PageInfo;
}

export class CharacterPayload {
    id?: Nullable<string>;
    name?: Nullable<string>;
    species?: Nullable<string>;
    gender?: Nullable<Gender>;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    homeworld?: Nullable<string>;
    description?: Nullable<string>;
}

export class PageInfo {
    page?: Nullable<number>;
    hasNext?: Nullable<boolean>;
    hasPrevious?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract characters(): Nullable<Character>[] | Promise<Nullable<Character>[]>;

    abstract character(id: string): Nullable<Character> | Promise<Nullable<Character>>;

    abstract paginatedCharacters(page?: Nullable<number>, limit?: Nullable<number>): PaginatedCharacters | Promise<PaginatedCharacters>;

    abstract planets(): Nullable<Planet>[] | Promise<Nullable<Planet>[]>;

    abstract planet(id: string): Nullable<Planet> | Promise<Nullable<Planet>>;
}

export abstract class IMutation {
    abstract createCharacter(createCharacterInput: CreateCharacterInput): CharacterPayload | Promise<CharacterPayload>;

    abstract updateCharacter(updateCharacterInput: UpdateCharacterInput): CharacterPayload | Promise<CharacterPayload>;

    abstract removeCharacter(id: string): Nullable<Character> | Promise<Nullable<Character>>;

    abstract createPlanet(createPlanetInput: CreatePlanetInput): Planet | Promise<Planet>;

    abstract updatePlanet(updatePlanetInput: UpdatePlanetInput): Planet | Promise<Planet>;

    abstract removePlanet(id: string): Nullable<Planet> | Promise<Nullable<Planet>>;
}

export class Planet {
    id: string;
    name: string;
    diameter?: Nullable<number>;
    population?: Nullable<number>;
    climate?: Nullable<string>;
    terrain?: Nullable<Nullable<string>[]>;
}

type Nullable<T> = T | null;
