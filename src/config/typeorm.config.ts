import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { Character } from 'src/characters/entities/character.entity';
import { Planet } from 'src/planets/entities/planet.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const typeOrmConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsRun: false,
  autoLoadEntities: true,
  logging: true,
  synchronize: false, // Disable on prod
};

export default registerAs('typeorm', () => typeOrmConfig);
export const connectionSource = new DataSource(
  typeOrmConfig as DataSourceOptions,
);
