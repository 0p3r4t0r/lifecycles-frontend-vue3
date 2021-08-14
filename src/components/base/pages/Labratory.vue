<template>
    <h1>The Laboratory</h1>
    <Icon name="face"/>
    <h4>For quick css/js prototyping.</h4>
    <div id="container">
        <div id="test-subject">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from "@/components/base/atoms/Icon"

export default defineComponent({
    name: "labratory",
    components: { Icon },
})
</script>

<style lang="scss" scoped>
#container {
    display: flex;
    height: 100%;
}

#test-subject {
    display: flex;
    flex: 1;
    background: red;
    border: solid black 2px;
    min-height: 10px;
}
</style>
