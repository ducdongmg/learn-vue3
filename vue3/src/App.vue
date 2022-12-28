<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <header-component />
  <BoostrapModal />
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" /> -->
  <!-- <button @click="showInfo">Click to show console log</button> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderPage from "./components/HeaderPage.vue";
import BoostrapModal from "./components/BoostrapModal.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderComponent: HeaderPage,
    BoostrapModal,
  },
  methods: {
    showInfo() {
      console.log(this.$refs.hello.msg);
    },
  },
};
</script>

<style></style>
