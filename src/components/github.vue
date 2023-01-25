<template>
  <div>
    <githubrepo @reposelected="onRepoSelected"/>
    <githubissue :repo="repo"/>
  </div>  
</template>


<script>
import githubrepo from './githubrepo.vue';
import githubissue from './githubissue.vue';

export default {
    name: 'github',
    components: {
      githubrepo,
      githubissue
    },

    data: () => ({
      repo: null
    }),
    methods:{
      onRepoSelected(repo){
        this.repo = repo
      }
    }
}
</script>
