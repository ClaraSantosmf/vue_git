<template>
  <div>
    <githubrepo @reposelected="onRepoSelected" @ownerselected="onOwner"/>
    <githubpages :repo="repo" :owner="owner"></githubpages>
    <githubissue :repo="repo"/>
  </div>  
</template>


<script>
import githubrepo from './githubrepo.vue';
import githubissue from './githubissue.vue';
import githubpages from './githubpages.vue';

export default {
    name: 'github',
    components: {
      githubrepo,
      githubissue,
      githubpages
    },

    data: () => ({
      repo: null,
      owner: null
    }),
    methods:{
      onRepoSelected(repo){
        this.repo = repo
      },
      onOwner(owner){
        this.owner = owner
      }
    }
}
</script>
