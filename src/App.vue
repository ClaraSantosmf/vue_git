<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="40"
        >
        <img :src="this.picture">
      </v-avatar>

        <v-spacer></v-spacer>
        <v-responsive max-width="260">
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg">
             <github @asFotosMenino="onPicture"></github>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
    picture: null
  }),
  methods:{
    onPicture(picture){
      this.picture = picture
    }
  }
};
</script>
