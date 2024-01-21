<template>
  <div>
    <h4>
      <a :href="link">{{ title }}</a>
    </h4>
    <p>{{ description }}</p>
    <div class="languages-container">
      <p>- </p>
      <p v-for="language in languages" v-bind:key="language"><i>{{ language + ',&nbsp;' }}</i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "title", "link", "img", "languages"],
};
</script>

<style scoped>
div.languages-container{
    display:flex;

}
</style>