<template>
  <div class="slot-game">
    <slotgameMenu @fromMenu="activiedMenu"></slotgameMenu>
    <div class="filter-box" v-show="chooseMenu == 'category'">
      <fliter-input v-model="chooseMenu" style="flex: 5"></fliter-input>
      <v-filter></v-filter>
    </div>
    <dada-list v-model="chooseMenu"></dada-list>
  </div>
</template>
<script>
  import vFilter from "./components/filter"
  import slotgameMenu from "./components/menu/index"
  import dadaList from "./components/data-list/index"
  import fliterInput from "./components/fliter-input"
  import headerBack from "mobile/components/header-back"
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        chooseMenu:'category'
      };
    },
    methods: {
      activiedMenu(val){
        this.chooseMenu = val
      }
    },
    components: {
      vFilter, headerBack, dadaList, fliterInput, slotgameMenu
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .slot-game {
    margin-top: r(100);
    .filter-box {
      display: flex;
      height: r(86);
      line-height: r(86);
      background: #eee;
      position: fixed;
      top: r(200);
      padding: 0 2%;
      width: 100%;
      z-index: 99;
      .filter-btn {
        span{
          vertical-align: middle;
          margin-right: r(16);
        }
        .iconfont{
          @include f(22px);
        }
        flex: 1;
        padding-left:r(30);
        @include f(30px);
        white-space: nowrap;
      }
      .filter-btn1{
        position: relative;
        float:right;
        top: r(-75);
        border-left: 1px solid #ccc;
        // height: 0.6rem;
        // line-height: 0.6rem;
        // margin-right: 0.1rem;
        height: r(45);
        line-height: r(45);
        margin-right: r(7.5);
        color: rgba(255,126,40,1);
        span{
          vertical-align: middle;
          margin-right: r(16);
        }
        .iconfont{
          @include f(22px);
        }
        flex: 1;
        padding-left:r(30);
        @include f(30px);
        white-space: nowrap;
      }
    }
    .slot_game_result{text-align: center;line-height: 1.5; margin: 1em 0; @include  f(28px);}
  }

</style>
