<template>
  <div>
    <intro-text />
    <projects-display />
  </div>
</template>

<script>
import IntroText from '@/components/IntroText.vue'
import ProjectsDisplay from '@/components/ProjectsDisplay.vue'

export default {
  name: 'HomeVue',
  components: {
    IntroText,
    ProjectsDisplay
  },

};
</script>