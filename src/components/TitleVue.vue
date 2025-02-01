<template>
  <h1>{{ titleText }}</h1>
  <p v-if="isHomePage">
        <i>"He has the most who is most content with the least."</i><br />
        -Diogenes
      </p>
</template>

<script>
export default {
  props: ['titleText'],
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
}
</script>

<style scoped>
 h1{
  font-size:4rem;
  margin-bottom:0;
 }
</style>