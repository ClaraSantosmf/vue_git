<template>
  <div>
    <div>
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
        prepend-icon="mdi-github"
        hide-selected
      />
    </div>
    <div>
      <v-select
        v-model="repo"
        :items="repolist"
        item-text="name"
        label="Selecione o repositório"
        persistent-hint
        return-object
        single-line
        prepend-icon="mdi-source-repository"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { debouncerdecorator } from "@/helpers/debouncer.js";
import { api } from "~api";

export default {
  data: () => ({
    user: null,
    userlist: [],
    userloading: false,
    repoloading: false,
    usersearch: null,
    repo: null,
    repolist: [],
    picture: null,
  }),
  methods: {
    procuraUsuarioGH: debouncerdecorator(async function () {
      this.userloading = true;
      const data = await api.search_users(this.usersearch);
      this.userlist = data.items;
      this.picture = data.items[0].avatar_url
      this.userloading = false;
    }, 500),
    async listaRepositorios() {
      this.repoloading = true
      const data = await api.lista_repos(this.user)
      this.repolist = data
      this,this.repoloading = false
    }
  },
  watch: {
    usersearch() {
      this.procuraUsuarioGH();
    },
    user() {
        if(this.user){
           this.listaRepositorios(); 
        }
    },
    repo(){
        this.$emit('reposelected', this.repo)
        this.$emit('ownerselected', this.user)
        this.$emit('pictureselected', this.picture)
    }
  },
};
</script>
