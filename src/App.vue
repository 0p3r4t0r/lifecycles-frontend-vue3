<template>
  <Navbar :links="links"/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "@/components/base/molecules/Navbar/Navbar.vue" 
import { NavbarLinks } from "@/components/base/molecules/Navbar/types" 

export default defineComponent({
  components: { Navbar },
  data: (): { links: NavbarLinks } => ({
    links: [
      { to: "/", text: "Home" },
      { to: "/about", text: "About" },
      { to: "/laboratory", text: "Lab" },
      { to: "/fitness/exercises", text: "Exercises" },
      { to: "/fitness/sets", text: "Sets" },
    ],
  }),
})
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
