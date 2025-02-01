<template>
  <div class="mb-5">
    <h6>
      <a v-if="link" :href="link" class="text-black" target="_blank">{{ title }}</a>
      <a v-else class="text-black text-decoration-none">{{ title }}</a>
    </h6>
  
    <p class="mb-1">{{ description }}</p>
    <small class="mb-5 text-muted">
      <i>{{ languages.join(", ") }} </i>
    </small>
  </div>
</template>

<script>
export default {
  props: ["description", "title", "link", "img", "languages"],
};
</script>

<style scoped>
</style>