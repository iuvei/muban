<template>
  <div class="master">
    <back-header :back="back">{{headerTxt}}</back-header>
    <transition name="slide">
      <router-view @setHeader="setHeader" @setBack="setBack" class="master-show"> </router-view>
      <slot></slot>
    </transition>

  </div>
</template>
<script>
  import backHeader from "mobile/components/header-back"
  
  export default {
    data() {
      return {
        headerTxt:"",
        back:null
      };
    },
    methods:{
      setHeader(val){
        this.headerTxt=val;
      },
      setBack(fun){
        this.back=fun;
      }
    },
    mounted(){
      this.$bus.$emit('setHeader',false)
      this.$bus.$emit('setFooter',false)
    },
    activated(){
      this.$bus.$emit('setHeader',false)
      this.$bus.$emit('setFooter',false)
    },
    deactivated(){
      this.$bus.$emit('setHeader',true)
      this.$bus.$emit('setFooter',true)
    },
    beforeDestroy(){
      this.$bus.$emit('setHeader',true)
      this.$bus.$emit('setFooter',true)
    },
    components:{
      backHeader
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin";
  .master {
    position:absolute;
    top:0;
    left:0;
    bottom:r($footer-h);
    right:0;
    .master-show{
      padding-top:r(30);
      padding-bottom:r(150);
    }
  }
</style>
