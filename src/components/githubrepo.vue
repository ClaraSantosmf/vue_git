<template>
  <v-autocomplete
    v-model="user"
    :items="userlist"
    :loading="userloading"
    :search-input.sync="usersearch"
    item-text="login"
    color="white"
    hide-no-data
    label="Buscador de Github Repo"
    placeholder="Pesquise o nome do usuário github"
    prepend-icon="mdi-database-search"
    hide-selected
  ></v-autocomplete>
</template>

<script>

import {debouncerdecorator} from '@/helpers/debouncer.js'

export default {
  data: () => ({
    user: null,
    userlist: [],
    userloading: false,
    usersearch: null,
  }),
  methods: {
    procuraUsuarioGH: debouncerdecorator(function () {
    this.userloading = true;
      setTimeout(() => {
        this.userlist = [{ login: "joao" }, { login: "josé" }];
        this.userloading = false;
      }, 1000);
    }, 1000)
  },
  watch: {
    usersearch() {
      this.procuraUsuarioGH()
    },
  },
};
</script>
