<template>
  <div class="flex_1 index-page">
    <!-- <banner></banner> -->
    <accountMenu></accountMenu>
    <announce></announce>
    <banner></banner>
    <!--<vJackpot></vJackpot>-->
    <game-list></game-list>
    <welfare></welfare>
    <!-- <slot-menu></slot-menu> -->
    <!-- <hotgame></hotgame> -->
    <!-- <win-list></win-list> -->
    <downclient></downclient>
    <alert-tips></alert-tips>
  </div>
</template>
<script>
  import banner from "./components/banner"
  import announce from "./components/announce"
  import accountMenu from "./components/account-menu"
  //import vJackpot from "./components/jackpot"
  // import slotMenu from "./components/slot-menu"
  import gameList from "./components/game-list"
  // import hotgame from "./components/hot-game"
  // import winList from "./components/winning-list"
  import downclient from "./components/down-client/index"
  import alertTips from "./components/alert-tips"
  import welfare from "./components/welfare"

  export default {
    data() {
      return {
      };
    },
    components: {
      banner, 
      announce,
      //vJackpot, 
      // slotMenu, 
      gameList, 
      // hotgame, 
      downclient,
      // winList,
      alertTips,
      accountMenu,
      welfare
    }
  };
</script>

<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
.index-page{
  margin-top: r(100)
}
</style>

