<template>
    <div class="fitness-exercise">
        {{ exercise.name }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ExerciseProp } from "./types";

const Exercise = defineComponent({
  name: 'Exercise',
  props: {
      exercise: {
          type: Object as PropType<ExerciseProp>,
          required: true,
      },
  },
});

export default Exercise
</script>

<style scoped>

</style>
