<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Number</th>
          <th class="text-left">Id</th>
          <th class="text-left">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="issue in issues" :key="issue.number">
          <td>{{ issue.number }}</td>
          <td>{{ issue.title }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
    <v-btn block v-if="temmais" @click="listandoIssues"> More Issues </v-btn>
  </div>
</template>

<script>
import { api } from "~api";
export default {
  props: ["repo"],
  data: () => ({
    issues: [],
    loading: false,
    temmais: false,
    currentPage: 1
  }),
  methods: {
    async listandoIssues() {
        this.loading = true
        let maisissues = await api.listaIssues(this.repo.owner.login, this.repo.name, this.currentPage)
        this.issues = this.issues.concat(maisissues)
        this.currentPage++
        this.loading = false
        this.temmais = maisissues.length > 0
    }
  },
  watch: {
    repo() {
      this.issues = []
        if (this.repo){
          this.temmais = false
          this.currentPage = 1
          this.listandoIssues();
        } else {
            this.issues = []
            this.temmais = false
            this.currentPage = 1
        }
    },
  },
};
</script>
