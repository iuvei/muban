<template>
  <!-- <nav class="nav">
    <div class="content">
      <router-link tag="a" to="/index" class="nav-item">
        <div class="nav-box">
          <p class="zh">首页</p>
          <p class="en">HOME</p>
        </div>
      </router-link>
      <router-link tag="a" to="/real" class="nav-item">
        <div class="nav-box">
          <span class="tips">
            <img src="./images/hot.png">
          </span>
          <p class="zh">真人娱乐</p>
          <p class="en">LIVE</p>
        </div>
      </router-link>
      <router-link tag="a" to="/sport"  class="nav-item">
        <div class="nav-box">
          <p class="zh">体育赛事</p>
          <p class="en">SPORT</p>
        </div>
      </router-link>
      <a  class="nav-item" @click="open(Games.href_city761, '761棋牌', 900, 640, true, islogin)">
        <div class="nav-box">
          <p class="zh">761棋牌</p>
          <p class="en">CHESS</p>
        </div>
      </a>
      <router-link tag="a" to="/fish" class="nav-item">
        <div class="nav-box">
          <p class="zh">捕鱼游戏</p>
          <p class="en">FISHING</p>
        </div>
      </router-link>
      <router-link tag="a" :to="{name:'slotgame'}" class="nav-item">
        <div class="nav-box">
          <p class="zh">电子游艺</p>
          <p class="en">GAME</p>
        </div>
        <div class="n-list">
          <router-link :to="{name:'slotgame',params:{type:item.value}}" class="list" v-for="item in platformData" :key="item.value">{{item.value}}老虎机</router-link>
        </div>
      </router-link>
      <router-link tag="a" to="/promo" class="nav-item">
        <div class="nav-box">
          <span class="tips">
            <img src="./images/hot.png">
          </span>
          <p class="zh">优惠活动</p>
          <p class="en">PROMS</p>
        </div>
      </router-link>
      <router-link tag="a" :to="{name:'download'}" class="nav-item">
        <div class="nav-box">
          <p class="zh">手机投注</p>
          <p class="en">DOWNLOAD</p>
        </div>
      </router-link>
       <router-link tag="a" to="/vip" class="nav-item">
        <div class="nav-box">
          <p class="zh">vip俱乐部</p>
          <p class="en">VIP CLUB</p>
        </div>
      </router-link
       <a class="nav-item" @click="open(SETTING.live800, '在线客服', 700, 640)">
        <div class="nav-box">
          <p class="zh">在线客服</p>
          <p class="en">ONLINE</p>
        </div>
      </a>
      <a class="nav-item red" @click="$bus.$emit('showRegister',true)" v-if="!islogin">
        <div class="nav-box">
          <p class="zh">30秒注册</p>
          <p class="en">JOIN US</p>
        </div>
      </a>
    </div>
  </nav> --> 
  <div class="nav" >
    <div class="content-warp cfx" >
      <a href="/index">
        <img class="logo" src="./images/logo.gif">
      </a>
      <ul class="cfx">
        <router-link tag="li" :to="{name:'index'}">
          <a href="javascript:void(0);">首页
            <small>HOME</small>
          </a>
        </router-link>
        <router-link tag="li" :to="{name:'slotgame',params:{type:'PT'}}">
          <a href="javascript:void(0);">电子游艺
            <small>GAME</small>
            </a>
          <img src="./images/hot.png">
        </router-link>
        <router-link tag="li" :to="{name:'real'}">
          <a href="javascript:void(0);">真人娱乐
            <small>LIVE</small>
            </a>
          <img src="./images/hot.png">
        </router-link>
        <li>
          <!-- <a href="javascript:void(0);">真人娱乐
            <small>LIVE</small>
          </a>
          <img src="./images/hot.png">
          <div ref="ebat" class="ag-ebet">
            <a target="_blank" :href="SETTING.href_ag">
              <img src="./images/ag.png" alt="">
            </a>
            <a target="_blank" :href="SETTING.href_bbin">
              <img src="./images/ebet.png" alt="">
            </a>
          </div> -->
        </li>
        <router-link tag="li" :to="{name:'fish'}">
          <img src="./images/hot.png">
          <a href="javascript:void(0);">AG捕鱼
            <small>AG FISH</small>
           </a>
        </router-link>

        <router-link tag="li" to="/promo">
          <a href="promo">优惠活动
            <small>PROMOTINS</small>
           </a>
          <img src="./images/hot.png">
        </router-link>
        <router-link tag="li" :to="{name:'download'}">
          <a href="javascript:void(0);">
            手机投注
            <small>MOBILE</small>
          </a>
        </router-link>
        <router-link tag="li" :to="{name:'vipPage'}">
            <a href="javascript:void(0);">
              VIP专区
              <small>VIP ZONE</small>
            </a>
        </router-link>
        <router-link tag="li" :to="{name:'agentarea'}">
            <a href="javascript:void(0);">
              代理加盟
              <small>AGENCY</small>
            </a>
        </router-link>
        <!-- <li>
          <a href="/static/vip.html">VIP专区
            <small>VIP ZONE</small>
            </a><img src="./images/hot.png">
        </li> -->
        <!-- <li >
          <a href="/static/agent.html">代理加盟
            <small>AGENCY</small>
          </a>
          
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    Games,
    platformData
  } from "@/assets/data"
  import openWindow from '@/util/openWindow'
  import  {SETTING} from "@/assets/data";
  
  import {mapGetters} from 'vuex'
  
  export default {
    name: "",
    data() {
      return {
        Games,
        SETTING,
        platformData
      }
    },
    props: {},
    computed: {
      ...mapGetters(["islogin"])
    },
    watch: {},
    methods: {
      open(url, title, w, h, needLogin, loginState){
        openWindow(url, title, w, h, needLogin, loginState)
      }
    },
    created() {},
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  // .nav {
  //   background: rgb(255, 236, 183);
  //   /* Old browsers */
  //   background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
  //   /* FF3.6-15 */
  //   background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
  //   /* Chrome10-25,Safari5.1-6 */
  //   background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
  //   /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  //   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
  //   /* IE6-9 */
  //   .content {
  //     display: flex;
  //     justify-content: space-between;
  //     .nav-item {
  //       text-align: center;
  //       display: flex;
  //       height: 62px;
  //       color: #343434;
  //       font-size: 16px;
  //       align-items: center;
  //       position: relative;
  //       flex: 1;
  //       cursor: pointer;
  //       overflow: hidden;
  //       transition:all 0.3s;
  //       .tips {
  //         position: absolute;
  //         top: 0;
  //         right: 0;
  //         animation: start .4s;
  //         animation-iteration-count: 999999999;
  //       }
  //       .nav-box {
  //         text-align: center;
  //         width: 100%;
  //         // font-weight:600;
  //         .zh{
  //           font-size:16px;
  //           margin-bottom:4px;
  //         }
  //         .en{
  //           font-size:12px;
  //         }
  //       }
  //       &:hover,
  //       &.active {
  //         color: #fff;
  //         background: url(./images/bg.png) center bottom no-repeat;
  //       }
  //       &:before {
  //         position: absolute;
  //         left: 0;
  //         top: 50%;
  //         content: "|";
  //         color: orange;
  //         transform: translateY(-50%);
  //       }
  //       &.red {
  //         color: #da1a00;
  //         animation: color 0.8s;
  //         animation-iteration-count: 999;
  //         &:hover,
  //         &.active {
  //           color: #fff;
  //           background: url(./images/bg.png) center bottom no-repeat;
  //         }
  //       }
  //       &:hover {
  //         overflow: visible;
  //         .n-list {
  //           transform: scale(1);
  //           opacity: 1;
  //         }
  //       }
  //       .n-list {
  //         position: absolute;
  //         top: 100%;
  //         width: 100%;
  //         border: solid 1px #ffd178;
  //         border-top: none;
  //         background: #202020;
  //         z-index: 10;
  //         transform: scale(0);
  //         opacity: 0;
  //         transition: all 0.4s;
  //         .list {
  //           color: #fff;
  //           height: 40px;
  //           line-height: 40px;
  //           display: block;
  //           border-bottom: dashed 1px #999;
  //           margin: 0 px;
  //           &:hover,
  //           &.active {
  //             color: #ffdc98;
  //           }
  //           &:last-child {
  //             border-bottom: none !important;
  //           }
  //         }
  //       }
  //     }
  //   }

  // }

  // @keyframes start {
  //   from {
  //     transform: scale(1)
  //   }
  //   to {
  //     transform: scale(1.1)
  //   }
  // }

  // @keyframes color {
  //   from {
  //     color: #da1a00;
  //     transform: scale(1)
  //   }
  //   to {
  //     color: #343434;
  //     transform: scale(1.05)
  //   }
  // }
div.nav {
    height: 88px;
    border-bottom: 1PX solid #041238;
    position: relative;
    border-top: 1px solid #021646;
    background: #02091c;
    padding: 32px 0 0 0;
    .content-warp {
      padding-left: 142px;
      box-sizing: border-box;
    }
    .logo {
      width: 142px;
      left: 0;
      vertical-align: top;
      position: absolute;
      top: -32px;
      z-index: 99;
    }
    li{
      float: left;
      padding: 0 30px;
      color: #fff;
      position: relative;
      text-align: center;
      border-left: 1px solid #1c2233;
      &:hover  div{
        display: block!important;
      }
    }
    li.active:after, nav li:hover:after {
      content: "";
      z-index: 3;
      position: absolute;
      height: 2px;
      background: #ffed24;
      width: 80%;
      bottom: -14px;
      left: 50%;
      margin-left: -40%;

    }
    li>a {
      display: block;
      font-size: 14px;
    }
    li small {
      display: block;
      color: #909090;
      font-size: 12px;
      margin-top: 5px;
    }
    li>img {
      animation: topbtm 0.5s linear infinite alternate;
      position: absolute;
    }
    @keyframes topbtm {
      from {
        top: -23px
      }
      to {
        top: -19px
      }
    }
    .ag-ebet {
      display: none;
      text-align: center;
      position: absolute;
      z-index:2;
      top:37px;
      padding-top:11px;
      left:0px;
      width: 100%;
      z-index:99;
    }
  }
</style>
