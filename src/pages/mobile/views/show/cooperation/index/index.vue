<template>
  <div class="cooperation">
    <c-banner>banner</c-banner>
    <div class="menu-box">
      <c-menu>菜单</c-menu>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import cBanner from "./components/banner"
import cMenu from "./components/menu"
import {mapGetters} from 'vuex';

    export default {
        data() {
            return {};
        },
        props:{},
        methods:{},
        computed: {
          ...mapGetters(["showFooter"]),
        },
        created(){
        },
        components:{
          cBanner,
          cMenu
        }
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.cooperation{
  margin: r(100) auto;
  min-height: 70vh;
  .menu-box{
    margin-top:r(20);
  }
}
  
</style>
