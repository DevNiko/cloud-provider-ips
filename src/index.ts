import "reflect-metadata"; // is required to make the type reflection work
import { Resolver, Query, buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import Express from "express";


@Resolver()
class HelloResolver {
    @Query(() => String)
    async helloWorld() {
        return 'Hello';
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });

    const apolloServer = new ApolloServer({schema});

    const app = Express();
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => console.log('started'));
}

main();