<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <header-component />
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <button @click="showInfo">Click to show console log</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderPage from "./components/HeaderPage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderComponent: HeaderPage,
  },
  methods: {
    showInfo() {
      console.log(this.$refs.hello.msg);
    },
  },
};
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
