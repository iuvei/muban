<template>
  <div class="game-hotgame">
    <div class="glist" ref="lists">
      <div v-for="(item,i) in myData" :key="i" class="gg" >
        <img :src="getImg({pic:item.picPath,category:item.platform})"  style="position: relative; left: 0px;">
        <div>
          <h3>{{item.gameName}}</h3>
          <h4>游戏平台 <span>{{item.platform}}</span></h4>
          <a href="javascript:;" class="gameBtn2">免费试玩</a>
          <a href="javascript:;" class="gameBtn1" @click="playGame(extend(item),$event)">进入游戏</a>
        </div>
      </div>
    </div>
    <div class="ptitle1">
      <span>TOP SCROLLING</span>
    </div>
  </div>
</template>
<script>
  import {games} from "@/controls/games/game";
  import {queryRecommandGamesList} from "@/api/show"
  import jackpot from "../../../../../components/jackpot";
  import Velocity from 'velocity-animate';

  export default {
    mixins: [games],
    data() {
      return {
        myData: [],
        id:0
      };
    },
    watch:{
      myData(val){
        if (val.length>0) {
          this.id=window.setInterval(() => {
            this.move();
          }, 3500)
        }
      }
    },
    methods: {
      extend(item) {
        return {
          "eName": "",
          "name": item.gameName,
          "id": item.gameId,
           "code": item.code||'',
          "category": item.platform,
          "type": "SLO",
          "line": "",
          "state": 1,
          subType:item.subType || "",
          "pic": item.picPath,
          "tag": []
        }
      },
      move() {
        let $this = this;
        Velocity(this.$refs.lists, {
          left: "-365px;"
        }, {
          duration: 1000,
          complete() {
            $this.$refs.lists.appendChild($this.$refs.lists.childNodes[0])
            $this.$refs.lists.style.left = 0;
          }
        })
      }
    },
    beforeDestroy(){
      window.clearInterval(this.id)
    },
    created() {
      queryRecommandGamesList({gameType: 0}).then(res => {
        if (res.success) {
          if (res.data) {
            this.myData = res.data;
          }
        }
      });
    },
    activated() {
    },
    components: {jackpot}
  }
</script>
<style lang="scss" spcoed>
  .game-hotgame{
    text-align: left;
    overflow: hidden;
    height: 260px;
    margin-bottom: 23px;
    background: url(./images/hot.jpg) no-repeat left top;
    position: relative;

    .ptitle1{
      border-top: 1px solid #e6e6e6;
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;

      span{
        position: absolute;
        height: 20px;
        width: 156px;
        background: #fff;
        color: #999;
        top: -13px;
        left: 50%;
        margin-left: -78px;
        font-size: 14px;
        text-align: center;
      }

    }
    .glist{
      margin: 0 22px;
      padding-top: 39px;
      white-space: nowrap;
      position: relative;

      .gg{
        width: 375px;
        color: #333333;
        display: inline-block;

        img{
          width: 168px;
          height: 168px;
          float: left;
          margin-right: 20px;
        }

        > div{
          width: 170px;
          float: left;

          h3{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          h4{
            font-size: 18px;
            margin-bottom: 20px;

            span{
              display: inline-block;
              margin-left: 20px;
            }
          }

          a{
            display: block;
            width: 100px;
            line-height: 30px;
            background: #d7d7d7;
            border-radius: 20px;
            text-align: center;
            color: #666666;
            font-size: 14px;
            margin-bottom: 10px;
            font-weight: bold;
          }
          a.gameBtn1{
            background: #ed7e12;
            color: #fff;
          }
        }
      }
    }

  }
</style>
