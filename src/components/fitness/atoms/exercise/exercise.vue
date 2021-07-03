<template>
    <div class="fitness-exercise">
        {{ exercise.name }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ExerciseProp } from './types';

export default defineComponent({
  name: 'Exercise',
  props: {
      exercise: {
          type: Object as PropType<ExerciseProp>,
          required: true,
      },
  },
});
</script>

<style scoped>

</style>