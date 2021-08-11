<template>
  <span class="material-icons">{{ name }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    style: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
