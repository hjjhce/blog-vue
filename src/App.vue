<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Banner/>
    <Main/>
    <el-footer></el-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Banner from "./components/Banner.vue";
import Main from "./components/Main.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Banner,
    Main
  },
  data: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
