import { defineComponent, PropType } from 'vue';
import { ExerciseProp } from "../Exercise/Exercise";

export type SetProp = {
    exercise: ExerciseProp;
    for: "reps" | "durationInSeconds";
    reps?: number | undefined;
    durationInSeconds?: number | undefined; 
}

const Set = defineComponent({
  name: 'Set',
  props: {
      set: {
          type: Object as PropType<SetProp>,
          required: true,
      },
  },
});

export default Set;