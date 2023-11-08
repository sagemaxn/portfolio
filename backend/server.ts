import 'reflect-metadata';
import { expressMiddleware } from '@apollo/server/express4';
import * as express from 'express';
import * as cors from 'cors';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import * as http from 'http';
import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { ContactResolver } from './src/Resolver';
import { config } from 'dotenv';
import { json } from 'body-parser';

config();

interface MyContext {
    req: Express.Request;
    res: Express.Response;
    token?: string;
}

const main = async () => {
    const app = express();

    const schema = await buildSchema({
        resolvers: [ContactResolver],
    });

    const httpServer = http.createServer(app);

    const server = new ApolloServer<MyContext>({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        introspection: true,
    });

    await server.start();

    app.use(
        '/graphql',
        cors(),
        json(),
        expressMiddleware(server, {
            context: async ({ req, res }) => ({
                req,
                res,
                token: req.headers.token,
            }),
        }),
    );

    await new Promise<void>(resolve =>
        httpServer.listen({ port: process.env.PORT || 4000 }, resolve),
    );
    console.log('Server ready at http://localhost:4000/graphql');
};

main().catch(error => {
    console.error(error);
});
