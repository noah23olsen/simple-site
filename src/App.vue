<template>
  <div class="container-fluid" v-if="0 > 1">
    <div class="row text-center">
      <div class="col-12 bg-cyan">
        <title-vue :titleText="currentTitle" />
      </div>
    </div>
    <div class="row d-flex bg-cyan">
      <router-link to="/">home</router-link>
      <router-link to="/music">listens</router-link>
      <router-link to="/readings">readings</router-link>
    </div>
    <div class="row bg-cyan p-5">
      <div class="col-12 bg-white p-5">
        <router-view></router-view>
      </div>
    </div>
    <div class="row text-center bg-cyan">
      <div class="col-12"></div>
      <p>inspired by <a href="https://ranprieur.com/">ran prieur</a></p>
    </div>
  </div>

  <div v-else>
    <div class="bg-black d-flex justify-content-center align-items-center" style="height: 93vh;">
      <a class="text-white" href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe%2C+and+everything"
      target="_blank">42
    </a>
  </div>
  
  <div class="bg-black d-flex align-items-center justify-content-center" style="height: 7vh; position: relative;">
    <div class="d-flex w-50 justify-content-between">
      <a class="links-color" href="https://github.com/noah23olsen" target="_blank">github</a>
      <a class="links-color" href="https://twitter.com/noaholsen_" target="_blank">x</a>
      <a class="links-color" href="https://www.linkedin.com/in/noaholsen-/" target="_blank">linkedin</a>
    </div>
  </div>
</div>
</template>

<script>
import TitleVue from "./components/TitleVue.vue";

export default {
  name: "App",
  components: {
    TitleVue,
  },
  data() {
    return {
      currentTitle: "",
    };
  },
  watch: {
    $route(to) {
      this.currentTitle = to.meta.title || "-";
    },
  },
};
</script>

<style>
.links-color {
  color: rgba(255, 255, 255, 0.746);
}

.bg-cyan {
  background-color: rgb(149, 188, 192);
}
</style>