<template>
  <!-- <div class="slot-banner">

  </div> -->
  <div class="game-banner">
    <div class="content-warp cfx">
          <jackpot>奖池</jackpot>
      </div>
  </div>
</template>
<script>
  import jackpot from "pc/components/jackpot/"
  export default {
    data() {
      return {
        inputVal: '',

      }
    },
    components:{jackpot}
  }
</script>
<style lang="scss">
.slot-banner{
  height:380px;
  background:url(./images/banner.jpg) center center no-repeat;
  background-size:cover;
}
.game-banner{
     background: url(./images/game-banner.jpg) no-repeat center center;
     height: 390px;
  }
  .game-banner .content-warp{
     width: 1140px;
  }
  .game-banner .award-money{
     width: 736px;
     height: 91px;
     background: url(./images/jackpot-bg.png) no-repeat center center;
     float: right;
     margin-top: 252px;
  }
  .game-banner .award-money h1, .game-banner .award-money p{
    display: none;
  }
  .game-banner .award-money .money-view{
    display: block;
    line-height: 91px;
    margin-left: 252px;
    font-size: 49px;
    color: #3c3c3c;
    letter-spacing: 7px;
  }
</style>
