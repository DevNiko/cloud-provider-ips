import "reflect-metadata"; // is required to make the type reflection work
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { Container } from "typedi"; // IoC container
import { AwsIpResolver } from "./resolvers/AwsIpResolver";

// the main entry point
async function bootstrap() {
    const schema = await buildSchema({
        // register the resolvers
        resolvers: [AwsIpResolver],
        // register the 3rd party IOC container
        container: Container,
    });

    // create apollo server
    const server = new ApolloServer({
        schema,
        tracing: true,
        cacheControl: true,
    });

    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();