import { ExerciseProp } from "../Exercise/types";

export type SetProp = {
    exercise: ExerciseProp;
    for: "reps" | "durationInSeconds";
    reps?: number | undefined;
    durationInSeconds?: number | undefined; 
}
