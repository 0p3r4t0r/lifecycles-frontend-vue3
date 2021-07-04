import faker from "faker";
import { Model, Factory, Server } from "miragejs";
import { ExerciseProp } from "@/components/fitness/atoms/exercise/types";

const factories = {
    exercise: Factory.extend<PropFactory<ExerciseProp>>({
        name(i) {
            return `${i}: ${faker.hacker.noun()} ${faker.hacker.verb()}`;
        },
    }),
}

const models = {
    exercise: Model.extend<Partial<ExerciseProp>>({}),
}

const routes = function (server: Server) {
    server.get("/exercises")
}

const seeds = function (server: Server) {
    server.createList("exercise", 10)
}

const server = {
    factories,
    models,
    routes,
    seeds,
}

export default server;