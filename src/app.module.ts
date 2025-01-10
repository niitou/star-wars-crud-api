import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CharactersModule } from './characters/characters.module';
import { join } from 'path';
import { PlanetsModule } from './planets/planets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from './planets/entities/planet.entity';
import { Character } from './characters/entities/character.entity';
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({ path: __dirname + '/../.env' });

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [CharactersModule, PlanetsModule],
      typePaths: ['./**/*.graphql'],
      playground: true,
      debug: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Planet, Character],
      autoLoadEntities: true,
      logging: true,
      synchronize: true, // Disable on prod
    }),
    PlanetsModule,
    CharactersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
