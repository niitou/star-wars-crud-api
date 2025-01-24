import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const typeOrmConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*-migration.ts'],
  autoLoadEntities: true,
  logging: true,
  synchronize: false, // Disable on prod
};

export default registerAs('typeorm', () => typeOrmConfig);
export const connectionSource = new DataSource(
  typeOrmConfig as DataSourceOptions,
);
