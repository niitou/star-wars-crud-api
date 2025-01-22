import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CharactersModule } from './characters/characters.module';
import { join } from 'path';
import { PlanetsModule } from './planets/planets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import graphqlConfig from './config/graphql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, graphqlConfig]
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject : [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('graphql'))
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('database'))
    }),
    PlanetsModule,
    CharactersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
