import axios from 'axios';
import Exercise, { ExerciseProp } from '@/components/fitness/atoms/Exercise'
import { ref, onMounted, defineComponent } from 'vue'

export type ExercisesProp = Array<ExerciseProp>

export default defineComponent({
    setup() {
        const exercises = ref([]);
        const getExercises = async () => axios.get('/api/fitness/exercises')
            .then((response) => {
                console.log(response.data);
                exercises.value = response.data.exercises;
            });
        onMounted(getExercises);
        return {
            exercises,
        }
    },
    render() {
        return (
            <div>
                <h1>Exercises</h1>
                <ul>
                    {
                        this.exercises.map((exercise, index) => (
                        <li key={'exercise-' + index}>
                            <Exercise exercise={exercise} />
                        </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
})
