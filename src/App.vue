<template>
  <!-- https://stackoverflow.com/questions/50303454/how-to-use-the-new-material-design-icon-themes-outlined-rounded-two-tone-and -->
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    rel="stylesheet"
  />
  <Navbar :links="links" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar, { NavbarProps } from "@/components/base/molecules/Navbar"

export default defineComponent({
  components: { Navbar },
  data(): { links: NavbarProps["links"] } {
    return {
      links: [
        { to: "/", text: "Home" },
        { to: "/about", text: "About" },
        { to: "/laboratory", text: "Lab" },
        { to: "/fitness/exercises", text: "Exercises" },
        { to: "/fitness/sets", text: "Sets" },
      ],
    };
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
