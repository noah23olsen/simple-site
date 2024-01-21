<template>
  <div class="main">
     <div class="title">
     <h1>about me</h1>
      <p>
        <i>"He has the most who is most content with the least."</i><br />
        -Diogenes
      </p>
    </div>
    <div class="links-container">
      <a class="links" href="https://www.linkedin.com/in/noaholsen-/" target="_blank">LinkedIn</a>
      <a class="links" href="https://github.com/noah23olsen" target="_blank">Github</a>
      <a class="links" href="https://twitter.com/sirNoahOlsen" target="_blank">X</a>
      <router-link class="links" to="/">home</router-link>
      <router-link class="links" to="/music">music</router-link>
      <router-link class="links" to="/readings">readings</router-link>
      <!-- <a class="links" href="#">entertainment</a> -->
      <!-- <a class="links" href="#">philosophy</a> -->
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <p>-</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html,
body {
  margin: 0; /*overrides the default browser behavior */
  padding: 0; /*overrides the default browser behavior */
}

div.main {
  background-color: rgb(149, 188, 192);
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.25fr 2fr 0.25fr;
  grid-template-rows: auto auto auto;
}

div.title {
  /* background-color: rgb(99, 199, 210); */
  background-color: rgb(149, 188, 192);


  grid-column: 1 / 4;
  text-align: center;
}

.content {
  background-color: rgb(255, 255, 255);
  
  grid-column: 2;
  padding: 0 4rem;
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
  font-size:1.5rem;
  /* color: rgb(100, 190, 250); */
}
a.links:hover{
  color:white;
}
footer {
  /* background-color: rgb(120, 240, 224); */
  background-color: rgb(149, 188, 192);
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 500px) {
  div.content p {
    padding: 0;
    font-size:1rem;
  }
}
</style>