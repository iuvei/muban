<template>
  <div class="gameListBox">
    <!-- <div class="sectionDiv" v-for="(games,i) in gameList" :key="i">
      <div class="section-tit">
        <i :class="games.ico"></i>
        <h2>{{games.title}}</h2>
      </div>
      <div class="listBox cfx">
        <div class="trueMan" v-for="(item,j) in games.list" :key="j" @click="open(item.href, item.name, 900, 640, true, islogin)">
          <a>
            <img v-lazy="getimg(item)" :alt="item.name" />
          </a>
        </div>
      </div>
    </div> -->
    <div class="gameBox" v-for="(item,i) in gameList" :key="i" @click="open(item.href, item.name, 900, 640, true, islogin)">
      <a href="" v-if="item.type != 'slotgame'">

        <img v-lazy="getimg(item)" :alt="item.name" /><br>
        <span>{{item.name}}</span>
      </a>
      <router-link  v-else :to="item.to">
        <img v-lazy="getimg(item)" :alt="item.name" /><br>
        <span>{{item.name}}</span>
      </router-link>
    </div>
    <!-- <div class="gameBox" v-for="(item,i) in gameList" v-else :key="i">
      <router-link  v-if="item.to" :to="item.to">
        <img v-lazy="getimg(item)" :alt="item.name" /><br>
        <span>{{item.name}}</span>
      </router-link>
    </div> -->
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
        Games,
        gameList: [
          {
            name:"PT老虎机",
            to:{name:"slotgame",params:{type:"PT"}},
            img:"5.png",
            type: 'slotgame'
          },
          {
            name:"DT老虎机",
            to:{name:"slotgame",params:{type:"DT"}},
            img:"6.png",
            type: 'slotgame'
          },
          {
            name:"MG老虎机",
            to:{name:"slotgame",params:{type:"MG"}},
            img:"7.png",
            type: 'slotgame'
          },
          {
            name: "AG真人",
            href: Games.href_ag,
            img: "9.png",
            type: 'real'
          },
          {
            name: "BBIN真人",
            href: Games.href_bbin,
            img: "2.png",
            type: 'real'
          },
          {
            name: "OG真人",
            href: Games.href_og,
            img: "3.png",
            type: 'real'
          },
          {
            name: "SUNBET真人",
            href: Games.href_sunbetH5,
            img: "11.png",
            type: 'real'
          },
          // {
          //   name:"PT捕鱼",
          //   href:Games.href_fish_pt,
          //   img:"5.png",
          //   type: 'fish'
          // },
          {
            name: "761棋牌",
            href: Games.href_city761,
            img: "8.png",
            type: 'fish'
          },
          {
            name: "沙巴体育",
            href: Games.href_sb_mobile,
            img: "10.png",
            type: 'sports'
          },
          {
            name: "平博体育",
            href: Games.href_pbsport,
            img: "4.png",
            type: 'sports'
          },
          {
            name: "更多",
            to:{name:"slotgame"},
            img: "1.png",
            type: 'slotgame'
          },
        ]
      };
    },
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        if (!url) {
          return;
        }else{
          openWindow(url, title, w, h, needLogin, loginState)
        }
      },
      getimg(item) {
        console.log(`./images/${item.img}`)
        return require(`./images/${item.img}`)
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },

    created() {

    },
    components: {}
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .gameListBox {
    background-color: $main-cl;
    margin: r(20) auto;
    .gameBox{
      padding: r(10) r(10);
      border: 1px solid #E4E4E4;
      border-top:none;
      border-left:none;
      display: inline-block;
      width: 25%;
      text-align: center;
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 80%;
          height: 80%;
          border-radius: 10px;
        }
        span {
          height: r(60);
          line-height: r(60);
          @include f(30px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .sectionDiv {
      padding: r(30) r(10);
      background-color: $main-cl;
      .section-tit {
        margin-bottom: r(24);
        h2 {
          display: inline-block;
          vertical-align: middle;
          font-weight: normal;
          @include f(34px);
        }
        .icobjh {
          @include f(36px);
          color: #666;
          vertical-align: middle;

        }
      }
      .listBox {
        width: 100%;
        .trueMan {
          width: 47%;
          margin-bottom: r(20);
          a {
            display: inline-block;
            width: 100%;
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }
      }
    }
    .trueMan:nth-child(2n) {
      float: right;
      margin-left: r(30);
    }
    .trueMan:nth-child(2n + 1) {
      float: left;
    }

  }

</style>
