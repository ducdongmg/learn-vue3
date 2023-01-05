<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <header-component />
  <button @click="toggleModal">Show/Hide modal</button><br />
  <Teleport to="body">
    <boostrap-modal
      v-if="isShowModal"
      title="Header title"
      content="Text content"
      theme="example"
      @closeModal="toggleModal"
    >
      <template v-slot:header>
        <h2>This is slot header</h2>
      </template>
      <p>This is a content for slot default</p>
      <label>It can be multiple element</label>
    </boostrap-modal>
  </Teleport>
  <!-- <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" /> -->
  <!-- <button @click="showInfo">Click to show console log</button> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderPage from "./components/HeaderPage.vue";
import BoostrapModal from "./components/BoostrapModal.vue";

export default {
  name: "App",
  data() {
    return {
      isShowModal: false,
    };
  },
  components: {
    // HelloWorld,
    HeaderComponent: HeaderPage,
    BoostrapModal,
  },
  methods: {
    showInfo() {
      console.log(this.$refs.hello.msg);
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style></style>
