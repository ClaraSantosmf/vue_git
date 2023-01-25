<template>
  <v-treeview
    v-model="tree"
    :load-children="criandoFilhos"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    :open.sync="open"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="item.type == 'dir'">
        {{ open ? "mdi-folder-open" : "mdi-folder" }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.ext] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
import { api } from "~api";
export default {
  props: ["repo"],
  data: () => ({
    open: [],
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
      aleatorio: "mdi-airballoon-outline",
    },
    tree: [],
    items: [],
  }),
  methods: {
    async listandoHome() {
      const files = await api.search_file(this.repo.full_name);
      this.items = this.organizador(files);
      debugger
    },
    organizador(files) { 
      return files.map((file) => {
        file.ext = this.extensao(file.name);
        if (file.type == "dir") {
          file.children = [];
        }
        return file
      });
    },
    extensao(name) {
      let iconextensao = name.includes(".") ? name.split(".").pop() : "";
      if (this.files[iconextensao]) {
        return iconextensao;
      }
      iconextensao = "aleatorio";
      return iconextensao;
    },
    criandoFilhos(item) {
      if (item.type == "dir") {
        api.search_file(this.repo.full_name, item.path).then((resposta) => {
          item.children = this.organizador(resposta);
        });
      }
      return;
    },
  },
  watch: {
    repo() {
      this.listandoHome();
    },
  },
};
</script>
