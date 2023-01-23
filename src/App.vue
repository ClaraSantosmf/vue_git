<template>
  <v-app>
    <github></github>
  </v-app>
</template>

<script>
import github from './components/github.vue';

export default {
  name: 'App',

  components: {
    github
  },

  data: () => ({
    //
  }),
};
</script>
