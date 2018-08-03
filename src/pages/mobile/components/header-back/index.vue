<template>
  <header class="header-back">
    <a @click="doClick" class="back-link"><i class="iconfont icon-arrow_l"></i></a>
      <slot></slot>
      {{$route.meta.headName}}
  </header>
</template>
<script>
  export default {
    props: {
      back: {
        type: Function
      }
    },
    methods: {
      doClick(){
        if (this.back && typeof this.back == 'function') {
          this.back();
        } else {
          this.$router.back();
        }
      }
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .header-back{
    position: relative;
    z-index: 99;
    background:$main-bg;
    color: $main-cl;
    height: r(100);
    text-align: center;
    line-height: r(100);
    @include  f(36px);
    .back-link{
      position: absolute;
      height: 100%;
      left:0;
      width:r(88);
      top:50%;
      transform:translateY(-50%);
      text-align: center;
    }
    .icon-arrow_l{
      @include f(44px)
    }
  }
</style>
