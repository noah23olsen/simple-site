<template>
  <div class="main" v-if="0>1">
    <div class="title-container">
      <title-vue :titleText="currentTitle" />
    </div>
    <div class="links-container">
      <a
        class="links links2"
        href="https://www.linkedin.com/in/noaholsen-/"
        target="_blank"
        >LinkedIn</a
      >
      <a class="links links2" href="https://github.com/noah23olsen" target="_blank"
        >Github</a
      >
      <a class="links links2" href="https://twitter.com/sirNoahOlsen" target="_blank"
        >X</a
      >
      <router-link class="links" to="/">home</router-link>
      <router-link class="links" to="/music">music/pods</router-link>
      <router-link class="links" to="/readings">readings</router-link>
      <!-- <a class="links" href="#">entertainment</a> -->
      <!-- <a class="links" href="#">philosophy</a> -->
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <p>inspired by <a href="https://ranprieur.com/">ran prieur</a></p>
    </footer>
  </div>
  <div v-else>
    <a href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe%2C+and+everything"
    target="_blank"
    >42
  </a>
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
html,
body {
  margin: 0;
  padding: 0;
  width:100%;
  overflow-x:hidden;
}

div.main {
  background-color: rgb(149, 188, 192);
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.25fr 2fr 0.25fr;
  grid-template-rows: auto auto auto;
  max-width:100%;
}

div.title-container {
  /* background-color: rgb(99, 199, 210); */
  background-color: rgb(149, 188, 192);
  grid-column: 1 / 4;
  text-align: center;
}

.content {
  background-color: rgb(255, 255, 255);
  grid-column: 2;
  padding:0 4rem;
  font-size: 1.5rem;
}

.links-container {
  /* background-color: rgb(81, 119, 124); */
  background-color: rgb(149, 188, 192);
  grid-column: 1;
  width: 100%;
  padding: 1rem;
}

a.links {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
}
a.links2{
  color:rgb(79, 50, 245);
}
a.links:hover {
  color: white;
}
footer {
  /* background-color: rgb(120, 240, 224); */
  background-color: rgb(149, 188, 192);
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1000px) {
  div.main {
    background-color: rgb(149, 188, 192);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  div.content{
    display:flex;
    flex-direction: column;
    padding:0.3rem;
    font-size: 0.9rem;
    margin:1.5rem;
  }
  a.links{
    font-size:0.9rem;
    padding-left:0.5rem;
  }
  div.links-container{
    display:flex;
    flex-direction: row;
    padding:0rem;
  }
 
}
</style>