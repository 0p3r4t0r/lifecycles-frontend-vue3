import { ExerciseProp } from "../exercise/types";

export type SetProp = {
    exercise: ExerciseProp;
    for: "reps" | "durationInSeconds";
    reps?: number | undefined;
    durationInSeconds?: number | undefined; 
}