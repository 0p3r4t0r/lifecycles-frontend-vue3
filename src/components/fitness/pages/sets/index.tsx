import axios from "axios";
import { defineComponent, onMounted, ref } from "vue"
import Set from "@/components/fitness/atoms/Set"
import endpoints from "@/components/fitness/api"


export default defineComponent({
    setup() {
        const sets = ref([]);
        const getSets = async () => axios.get(endpoints.sets)
            .then((response) => {
                console.log(response.data);
                sets.value = response.data.sets;
            })
        onMounted(getSets);
        return {
            sets,
        }
    },
    render() {
        return (
            <div>
                <h1>Sets</h1>
                <ul>
                    {
                        this.sets.map((set, index) => (
                        <li key={'set-' + index}>
                            <Set set={set} />
                        </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
})