import { registerAs } from "@nestjs/config";
import { join } from "path";
import { CharactersModule } from "src/characters/characters.module";
import { PlanetsModule } from "src/planets/planets.module";

const graphqlConfig = {
    include: [CharactersModule, PlanetsModule],
    typePaths: ['./**/*.graphql'],
    playground: true,
    debug: true,
    definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
    }
}

export default registerAs('graphql', () => graphqlConfig)
