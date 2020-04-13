<template>
  <div id='teste' class="text-center">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data: () => ({
    message: "Hello"
  }),
  // components: {
  //   HelloWorld
  // }
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
  background-color: #000000
}
</style>
