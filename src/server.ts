import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message })
})

const start = async () => {
    await app.register(routes);
    await app.register(cors);

    try {
        await app.listen({ port: 3333 });
    } catch (error) {
        process.exit(1);
    }
}

start();