<template>
  <div class="master">
    <transition name="slide">
      <router-view @setHeader="setHeader"
                   @setBack="setBack">
      </router-view>
      <slot></slot>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
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
      this.$store.commit("SET_FOOTER",false);
    },
    activated(){
      this.$store.commit("SET_FOOTER",false);
    },
    deactivated(){
      this.$store.commit("SET_FOOTER",true);
    },
    beforeDestroy(){
      this.$store.commit("SET_FOOTER",true);
    },
    components:{}
  };
</script>
<style lang="scss" scoped>
</style>
