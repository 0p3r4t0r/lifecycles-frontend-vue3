<template>
    <div class="fitness-set">
        {{ set.exercise.name }} -- {{ set.for }}: {{ set[set.for] }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SetProp } from './types';

export default defineComponent({
  name: 'Set',
  props: {
      set: {
          type: Object as PropType<SetProp>,
          required: true,
      },
  },
});
</script>

<style scoped>

</style>