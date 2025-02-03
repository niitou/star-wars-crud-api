## Description

A simple CRUD Star Wars API built using Nest, Typeorm, and Graphql

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

# graphql playground linux
$ xdg-open {browser} localhost:3000/graphql

# graphql playground windows
$ start {browser} localhost:3000/graphql
```

## Some Queries Example

### Get a single planet data using id
```graphql
query {
  planet(id: 1) {
    id
    name
  }
}
```
### Create a character
```graphql
mutation {
  createCharacter (createCharacterInput: {
    name : "Luke Skywalker",
    species : "Human",
    gender : "MALE",
    height : 172,
    weight : 77,
    homeworld : "2",
    description : "The main protagonist of the original trilogy."
  }) {
    name
    species
    gender
    height
    weight
    description
    homeworld
  }
}
```
### Pagination
```graphql
query {
  paginatedCharacters(page:1, limit:10){
    characters {
      id
      name
    }
    count
    pageInfo {
      page
      hasNext
      hasPrevious
    }
  }
}
```
