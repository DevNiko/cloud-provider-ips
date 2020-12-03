import "reflect-metadata"; // is required to make the type reflection work
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { AwsIpResolver } from "./resolvers/awsip-resolve";
import { buildSchema } from "type-graphql";
// IoC container
import { Container } from "typedi";

const main = async () => {
    const schema = await buildSchema({
        resolvers: [AwsIpResolver],
        // register the 3rd party IOC container
        container: Container,
    });

    const apolloServer = new ApolloServer({schema});

    const app = Express();
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => console.log('started'));
}

main();