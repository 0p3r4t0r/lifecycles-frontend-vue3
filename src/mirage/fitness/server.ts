import faker from "faker"
import { Model, Factory, Server } from "miragejs"
import { ExerciseProp } from "@/components/fitness/atoms/Exercise"
import { SetProp } from "@/components/fitness/atoms/Set"
import api from "@/components/fitness/api"

const factories = {
    exercise: Factory.extend<PropFactory<ExerciseProp>>({
        name(i: number) {
            return `${i}: ${faker.hacker.noun()} ${faker.hacker.verb()}`;
        },
    }),
    set: Factory.extend<PropFactory<SetProp>>({
        exercise(i: number) {
            return { name: `${i}: ${faker.hacker.noun()} ${faker.hacker.verb()}` };
        },
        for(i: number) {
           return i % 2 ? "reps" : "durationInSeconds"; 
        },
        reps(i: number) {
            return i % 2 ? Math.floor(Math.random() * 10) : undefined;
        },
        durationInSeconds(i: number) {
            return i % 2 ? undefined : Math.floor(Math.random() * 60);
        }
    }),
}

const models = {
    exercise: Model.extend<Partial<ExerciseProp>>({}),
    set: Model.extend<Partial<SetProp>>({})
}

const routes = function (server: Server) {
    server.get(api.exercises),
    server.get(api.sets)
}

const seeds = function (server: Server) {
    server.createList("exercise", 10)
    server.createList("set", 10)
}

const server = {
    factories,
    models,
    routes,
    seeds,
}

export default server;