<template>
    <h1>Exercises</h1>
    <ul>
        <li v-for="(exercise, index) of exercises" :key="'exercise-' + index">
            <Exercise :exercise="exercise"/>
        </li>
    </ul>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, PropType } from 'vue';
import Exercise from '@/components/fitness/atoms/Exercise/Exercise.vue'
import { ExercisesProp } from './types';

export default defineComponent({
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
        exercises: [] as PropType<ExercisesProp>,
    }),
});
</script>

