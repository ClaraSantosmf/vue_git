<template>
  <v-treeview
    v-model="tree"
    :load-children="abrido"
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
import {api} from "~api"
  export default {
    props: ["repo"],
    data: () => ({
      open: [],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
        aleatorio: 'mdi-airballoon-outline'
      },
      tree: [],
      items: []
    }),
    methods: {
        async listandoHome() {
            const files = await api.search_file(this.repo.full_name)
            this.items = this.organizador(files)
        },
        organizador(files){
          for(let i=0; i < files.length; i++) {
            let ext = this.extensao(files[i].name)
            files[i]['ext']= ext
            if (files[i].type =='dir'){
              files[i].children = []
            }
          }
          return files
        },
        extensao(name){
           let iconextensao = name.includes('.')? name.split('.').pop(): ""
           if (this.files[iconextensao]){
             return iconextensao
           }
           iconextensao = 'aleatorio'
           return iconextensao
        },
        abrido(item){
          if (item.type == 'dir'){
            api.search_file(this.repo.full_name, item.path).then(resposta =>{
              item.children = this.organizador(resposta)
            } )
          }
          return
        }
      },
    watch:{
        repo(){
            this.listandoHome()
        }
    },
  }
</script>
