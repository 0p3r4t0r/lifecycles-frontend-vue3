import axios from 'axios';
import { defineComponent, PropType } from 'vue';

import Exercise from '@/components/fitness/atoms/Exercise/Exercise.vue'
import { ExerciseProp } from '@/components/fitness/atoms/Exercise/Exercise';

const Exercies = defineComponent({
  name: 'Exercises',
  components: {
    Exercise,
  },
  created() {
        axios.get('/api/fitness/exercises')
            .then((response) => {
                console.log(response.data);
                this.exercises = response.data.exercises;
        });
    },
    data: () => ({
        exercises: [] as PropType<Array<ExerciseProp>>,
    }),
});

export default Exercies