import { ExerciseProp } from '@/components/fitness/atoms/Exercise'

export type SetProp = {
    exercise: ExerciseProp;
    for: "reps" | "durationInSeconds";
    reps?: number | undefined;
    durationInSeconds?: number | undefined; 
}

const Set = (props: { set: SetProp }) => (
    <div class="fitness-set">
        { props.set.exercise.name } -- { props.set.for }: { props.set[props.set.for] }
    </div>
)


export default Set