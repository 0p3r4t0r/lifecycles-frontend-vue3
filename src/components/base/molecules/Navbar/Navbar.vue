<template>
  <div id="navbar">
    <router-link
      class="navbar-link"
      v-for="link in links"
      :key="link.to"
      :to="link.to"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NavbarLinks } from "./types";

const Navbar = defineComponent({
  name: "Navbar",
  props: {
    links: {
      type: Object as PropType<NavbarLinks>,
      required: true,
    },
  },
});

export default Navbar;
</script>

<style lang="scss" scoped>
#navbar {
  a {
    padding: 15px;

    &.router-link-exact-active {
        color: #42b983;
    }
  }
}
</style>
