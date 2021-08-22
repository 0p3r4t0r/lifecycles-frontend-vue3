export type ExerciseProp = {
    name: string;
}

const Exercise = (props: {exercise: ExerciseProp}) => (
        <div class="fitness-exercise">
            {props.exercise.name}
        </div>
)

export default Exercise