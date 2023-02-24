<template>
  <div>
    <githubrepo @reposelected="onRepoSelected" @ownerselected="onOwner" @pictureselected="onPicture"/>
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
      owner: null,
      picture: null
    }),
    methods:{
      onRepoSelected(repo){
        this.repo = repo
      },
      onOwner(owner){
        this.owner = owner
      },
      onPicture(picture){
        this.picture = picture
      }
    },
    watch: {
      picture(){
        this.$emit('asFotosMenino', this.picture)
      }
    }
}
</script>
