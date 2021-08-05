import axios from 'axios';
import { defineComponent, PropType } from 'vue';

import Set from '@/components/fitness/atoms/Set/Set.vue'
import { SetProp } from '@/components/fitness/atoms/Set/Set';

export default defineComponent({
  name: 'Exercises',
  components: {
    Set,
  },
  created() {
        axios.get('/api/fitness/sets')
            .then((response) => {
                this.sets = response.data.sets;
                console.log(this.sets);
        });
    },
    data: () => ({
        sets: [] as PropType<Array<SetProp>>,
    }),
});