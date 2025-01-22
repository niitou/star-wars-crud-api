import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv'
import { Character } from "src/characters/entities/character.entity";
import { Planet } from "src/planets/entities/planet.entity";

dotenvConfig({ path: ".env" })

const databaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Planet, Character],
    autoLoadEntities: true,
    logging: true,
    synchronize: false, // Disable on prod
}

export default registerAs('database', () => databaseConfig)