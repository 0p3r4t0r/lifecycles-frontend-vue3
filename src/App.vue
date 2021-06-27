<template>
  <html>
    <img alt="Vue logo" src="./assets/base/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </html>
</template>

<script>
import HelloWorld from './components/base/pages/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
