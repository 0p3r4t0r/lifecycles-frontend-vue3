import { defineComponent, PropType } from 'vue';

export type ExerciseProp = {
    name: string;
}

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