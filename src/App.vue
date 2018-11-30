<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/blackhole">blackhole</router-link>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <Banner/>
    <Main/>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Banner from "./components/Banner.vue";
// import Main from "./components/Main.vue";

export default {
  name: "app",
  // components: {
  //   HelloWorld,
  //   Banner,
  //   Main
  // },
  data() {
    return {
      message: ""
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
