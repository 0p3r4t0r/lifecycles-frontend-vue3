import faker from "faker";
import { createServer, Model, Factory } from "miragejs";
import { Exercise } from "@/components/fitness/types";

export function makeServer({ environment = "development" } = {}) {
    const server = createServer({
        environment,

        factories: {
            exercise: Factory.extend<Partial<Exercise>>({
                get name() {
                    return faker.hacker.noun().concat(' ', faker.hacker.verb());
                },
            }),
        },

        models: {
            exercise: Model.extend<Partial<Exercise>>({}),
        },

        routes() {
            this.namespace = "api";
            this.get("/exercises");
        },

        seeds(server) {
            server.createList("exercise", 10);
        }
    })
}