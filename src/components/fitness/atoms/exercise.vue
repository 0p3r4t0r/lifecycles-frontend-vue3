<template>
    <div class="fitness-exercise">
        {{ name }}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'exercise',
    props: {
        name: {
            type: String,
            required: true,
        }
    },
})
</script>


<style scoped>

</style>