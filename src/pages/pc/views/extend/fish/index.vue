<template>
  <div class="fish-container">
    <div class="fish-content">
      <div class="fish-game-item cfx">
        <div class="fish-picpart fl">
          <img src="./images/ag-mainpic.png">
          <div class="fishgame-btns">
            <a class="game-btn play" @click="open(Games.href_fish, 'AG捕鱼', 900, 640, true, islogin)">开始游戏</a>
          </div>
        </div>
        <div class="fish-infopart fr">
          <h1 class="title">
            <span class="title-icon">
              <img src="./images/ag-logo.png" width="129">
            </span>
            AG捕鱼
          </h1>
          <p class="infomation">
            支持设备：web/h5/手机客户端
          </p>
          <div class="fish-deputypic cfx">
            <img src="./images/ag-deputypic.png" width="289">
            <img src="./images/code.png" width="141" class="fr">
          </div>
        </div>
      </div>

      <!-- <div class="fish-game-item cfx">
          <div class="fish-picpart fl">
             <img src="./images/pt-mainpic.png">
             <div class="fishgame-btns">
                <a class="game-btn play" @click="open(Games.href_fish_pt, 'PT捕鱼', 900, 640, true, islogin)">开始游戏</a>
                <a class="game-btn try" @click="open(Games.href_fish_pt_try, 'PT捕鱼', 900, 640)">免费试玩</a>
             </div>
          </div>
          <div class="fish-infopart fr">
             <h1 class="title">
               <span class="title-icon">
                  <img src="./images/pt-logo.png" width="172" >
               </span>
               PT捕鱼
             </h1>
             <p class="infomation">
                支持设备：手机电脑网页端
             </p>
             <div class="fish-deputypic cfx">
                <img src="./images/pt-deputypic.png" width="291" >
             </div>
          </div>
       </div>

       <div class="fish-game-item cfx">
          <div class="fish-picpart fl">
             <img src="./images/ttg-mainpic.png">
             <div class="fishgame-btns">
                <a class="game-btn play" @click="open(Games.href_fish_ttg, 'PT捕鱼', 900, 640, true, islogin)">开始游戏</a>
                <a class="game-btn try" @click="open(Games.href_fish_ttg_try, 'PT捕鱼', 900, 640)">免费试玩</a>
             </div>
          </div>
          <div class="fish-infopart fr">
             <h1 class="title">
               <span class="title-icon">
                  <img src="./images/ttg-logo.png" width="161" >
               </span>
               TTG捕鱼
             </h1>
             <p class="infomation">
                支持设备：手机电脑网页端
             </p>
             <div class="fish-deputypic cfx">
                <img src="./images/ttg-deputypic.png" width="289" >
             </div>
          </div>
       </div> -->

      <!-- <div class="fish-game-item cfx">
          <div class="fish-picpart fl">
             <img src="./images/mw-mainpic.png">
             <div class="fishgame-btns">
                <a class="game-btn play" href="#">开始游戏</a>
                <a class="game-btn try" href="#">免费试玩</a>
             </div>
          </div>
          <div class="fish-infopart fr">
             <h1 class="title">
               <span class="title-icon">
                  <img src="./images/dmg-logo.png" width="102" >
               </span>
               MW捕鱼
             </h1>
             <p class="infomation">
                支持设备：手机电脑网页端
             </p>
             <div class="fish-deputypic cfx">
                <img src="./images/mw-deputypic.png" width="289" >
                <img src="./images/code.png" width="141" class="fr" >
             </div>
          </div>
       </div> -->
    </div>
  </div>
</template>
<script>
  import {
    Games
  } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        Games
      };
    },
    props: {},
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    created() {},
    components: {}
  };

</script>
<style lang="scss" scoped>
  .fish-container {
    background: #011647 url(./images/fish-bg.jpg) no-repeat center top;
    min-height: 990px;
    .fish-content {
      width: 1145px;
      margin: 0 auto;
      padding: 635px 0 30px;
      background: url(./images/paopao.gif);
    }
    .fish-game-item {
      display: inline-block;
      box-sizing: border-box;
      width: 1145px;
      height: 323px;
      background: url(./images/fish-itembg.png) no-repeat center center;
      margin-bottom: 39px;
      padding: 26px 24px 26px 28px;
    }
    .fish-picpart {
      width: 626px;
      position: relative;
      cursor: pointer;
      &:hover .fishgame-btns {
        opacity: 1;
        transform: scale(1);
      }
    }
    .fishgame-btns {
      position: absolute;
      top: 2px;
      bottom: 2px;
      left: 2px;
      right: 2px;
      background: rgba(0, 0, 0, 0.6);
      opacity: 0;
      transform: scale(0);
      transition: all 0.4s;
      padding-top: 76px;
    }
    .fishgame-btns .game-btn {
      display: block;
      width: 370px;
      height: 58px;
      line-height: 58px;
      color: #ffffff;
      font-size: 25px;
      margin: 0 auto 20px;
      text-align: center;
    }
    .fishgame-btns .game-btn.play {
      background: url(./images/blue-btn.png) no-repeat center center;
      &:hover {
        color: yellow;
      }
    }
    .fishgame-btns .game-btn.try {
      background: url(./images/orange-btn.png) no-repeat center center;
      &:hover {
        color: yellow;
      }
    }

    .fish-infopart {
      width: 445px;
    }
    .fish-infopart .title {
      height: 60px;
      line-height: 60px;
      margin-bottom: 12px;
      font-size: 51px;
      font-weight: normal;
      color: #FFE500;
    }
    .fish-infopart .title-icon {
      display: inline-block;
      width: 198px;
      background: #002FBE;
      text-align: center;
      img {
        vertical-align: middle;
      }
    }
    .fish-infopart .infomation {
      font-size: 18px;
      color: #ffffff;
      height: 54px;
      line-height: 40px;
      border-top: 1px solid #3167D9;
      width: 93%;
    }

  }

</style>
