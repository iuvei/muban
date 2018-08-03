<template>
    <div class="index-main2">
        <div>
          <div class="superiority">
            <div class="superiority-item">
              <img src="./images/superiority1.png">
              <img class="active" src="./images/superiority1-1.png">
              <h1 @click="s=true">01分27秒
                <small>存款平均到账时间</small>
              </h1>
            </div>
            <div class="superiority-item">
              <img src="./images/superiority2.png">
              <img class="active" src="./images/superiority2-1.png">
              <h1>03分12秒
                <small>取款平均到账时间</small>
              </h1>
            </div>
            <div class="superiority-item">
              <img src="./images/superiority3.png">
              <img class="active" src="./images/superiority3-1.png">
              <h1>全年无休
                <small>24小时随时提款</small>
              </h1>
            </div>
          </div>
          <div class="award">
            <jackpot>奖池</jackpot>
            <winningList>奖品名单</winningList>
            <img src="./images/money-icon.png" class="rt-img">
          </div>
          <div class="prod-recommond">
            <div class="prod-recommond-item1">
              <img src="./images/prd1.jpg">
              <p><span>AG真人</span> 网聚八大顶级视讯，美女荷官，给你最真实游戏体验</p>
            </div>
            <div class="prod-recommond-item2 active"> <img src="./images/prd2.jpg">
            <p>八大顶级热门视讯</p>
            </div>
            <div class="prod-recommond-item2">  <img src="./images/prd3.jpg">
            <p>五大顶级热门游戏</p></div>
          </div>
        </div>
        <recommandGames></recommandGames>
    </div>
</template>
<script>
import recommandGames from "./components/recommand-games/"
import winningList from "./components/winning-list/"
import jackpot from "pc/components/jackpot/"
export default {
    data(){
        return{}
    },
    components: {
      jackpot,recommandGames,winningList
    }
}
</script>
<style lang="scss" scoped>
    .index-main2{
  // background: url(~pc/assets/images/bg.png) no-repeat center -9px #fff;
  padding-bottom: 74px;

  > div{
    width: 1200px;
    margin: 0 auto;
    display: block;
    position: relative;
  }

  .superiority {
    height:194px;
    background: #fefefe;
    padding: 63px 0 49px 0;
    .superiority-item {
      cursor: pointer;
      border-left: 1px solid #e5e5e5;
      float: left;
      color: #7f7f7f;
      width: 360px;
      padding: 0 75px 0 31px;
      box-sizing: border-box;
      font-weight: lighter;
      white-space: nowrap;
      font-size: 22px;
      &:first-child{border: none;}
      &:hover{ color: #ed7e12; }
      &:hover .active { display: inherit;}
      &:hover img{display: none;}
      .active{  display: none;}
      img{ float: left;}
      h1{ margin-left: 102px;font-weight: lighter;}
      small{ display: block; margin-top: 14px; font-size: 18px;}
    }
  }

  .award {
    height: 174px;
    background: #f4f4f4;
    padding-top: 13px;
    position: relative;

    .rt-img {
      position: absolute;
      right: -17px;
      top: -42px;
    }
  }

  .prod-recommond{ height:316px; margin-top: 14px; color: #343434;font-size: 14px;background: #fff;}
  .prod-recommond p{ height: 50px; line-height: 50px; background:#f6f6f6; text-align: center;}
  .prod-recommond-item1{ cursor: pointer; width: 552px;float: left;}
  .prod-recommond-item1 span{ display: inline-block; font-size:18px; border-right:1px solid #cecece ; line-height: 28px; vertical-align: middle; padding-right: 13px; margin-right: 15px;}
  .prod-recommond-item2{cursor: pointer; width:269px;float: left; margin-left: 5px;}
  .prod-recommond>div img{ height: 265px; width: 100%; vertical-align: top;}
  .prod-recommond>div:hover p,.prod-recommond>div.active p{ background: #ed7e12; color: #fff; }
}
</style>
