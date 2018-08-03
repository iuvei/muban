<template>
  <div class="auth-login">
    <backHeader>{{textHeader}}</backHeader>
    <div class="txt-center" style="margin:1rem 0">
      <img src="~@/assets/images/logo.gif" alt="">
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import backHeader from "mobile/components/header-back"
  import master from "mobile/components/master"


  export default {
    data() {
      return {
        textHeader: ""
      }
    },
    watch: {
      "$route"(to) {
        this.textHeader = to.meta.title || to.meta.headName;
      }
    },
    created(){
      this.textHeader=this.$route.meta.title;
    },
    components: {
      master, backHeader
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .auth-login {
    display: block;
  }
</style>
