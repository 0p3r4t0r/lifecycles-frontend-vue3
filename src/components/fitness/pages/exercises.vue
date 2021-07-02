<template>
    <h1>Exercises</h1>
    <ul>
        <li class="fitness-exercise" v-for="(exercise, index) of exercises" :key="'exercise-' + index">
            {{ exercise.name }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Exercise } from '@/components/fitness/types'
import axios from 'axios'

export default defineComponent({
    name: 'fitness/exercises',
    created() {
        axios.get('/api/exercises')
            .then((response) => {
                console.log(response.data);
                this.exercises = response.data.exercises;
        });
    },
    data: () => ({
        exercises: [] as PropType<Array<Exercise>>,
    }),
})
</script>
