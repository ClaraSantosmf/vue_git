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
    />
</template>

<script>
import { debouncerdecorator } from "@/helpers/debouncer.js";
import { api } from "@/api/api.js"

export default {
  data: () => ({
    user: null,
    userlist: [],
    userloading: false,
    usersearch: null,
  }),
  methods: {
    procuraUsuarioGH: debouncerdecorator(async function () {
      this.userloading = true;
      const data = await api.search_users(this.usersearch)
          this.userlist = data.items
          this.userloading = false
    }, 500),
},
    watch: {
      usersearch() {
        this.procuraUsuarioGH();
      }
    }
  }
</script>
