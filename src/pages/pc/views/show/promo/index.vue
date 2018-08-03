<template>
  <div class="promo-page">
    <banner></banner>
    <div class="promomain">
      <menus></menus>
      <pros></pros>
      <info></info>
    </div>
  </div>
</template>
<script>
  import {queryLatestPreferential} from '@/api/show'
  import banner from './components/banner'
  import menus from './components/menus'
  import pros from './components/pros'
  import info from './components/info'
  export default {
    name: "",
    data() {
      return {
      }
    },
    created() {

    },
    components: {
      info,menus,banner,pros
    }
  }
</script>
<style lang="scss">
  .promo-page{ 
    background: url(~pc/assets/images/bg2.png) no-repeat center 260px;
    .promomain{
    width: 1140px;
    margin: 0 auto 50px;
    background: #fff;
    box-shadow: 0px 2px 4px #dde2e7;
    padding-bottom: 30px;
    }
  }
</style>
