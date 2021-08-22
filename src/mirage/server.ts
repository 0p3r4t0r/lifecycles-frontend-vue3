import { createServer } from "miragejs";
import FitnessServer from "@/mirage/fitness/server";

export function makeServer({ environment = "development" } = {}) {
    const server = createServer({
        environment,

        factories: {
            ...FitnessServer.factories,
        },

        models: {
            ...FitnessServer.models,
        },

        routes() {
            FitnessServer.routes(this);
        },

        seeds(server) {
            FitnessServer.seeds(server);
        }
    });

    console.log(server);
}