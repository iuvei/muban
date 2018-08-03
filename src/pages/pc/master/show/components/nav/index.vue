<template>
  <div class="nav" >
    <div class="content-warp cfx" >
      <a href="/index">
        <img class="logo" src="./images/logo.gif">
      </a>
      <ul class="cfx">
        <router-link tag="li" :to="{name:'home'}">
          <a href="javascript:void(0);">首页
            <small>HOME</small>
          </a>
        </router-link>
        <router-link tag="li" :to="{name:'gameIndex',params:{type:'PT'}}">
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
          <a href="javascript:void(0);">棋牌
            <small>CHESS</small>
          </a>
          <img src="./images/hot.png">
          <div ref="ebat" class="ag-ebet">
            <a class="list" target="_blank" @click="open(Games.href_city761, '761棋牌', 900, 640, true, islogin)">761棋牌</a>
            <a class="list" target="_blank" @click="open(Games.href_kyqp, '开元棋牌', 900, 640, true, islogin)">开元棋牌</a>
          </div>
        </li>
        
        <router-link tag="li" :to="{name:'fish'}">
          <a href="javascript:void(0);">AG捕鱼
            <small>AG FISH</small>
            </a><img src="./images/hot.png">
        </router-link>
        <router-link tag="li" :to="{name:'sport'}">
          <img src="./images/hot.png">
          <a href="javascript:void(0);">竞技体育
            <small>SPORTS</small>
           </a>
        </router-link>
        <!-- <router-link tag="li" :to="{name:'sport'}">
          <img src="./images/hot.png">
          <a href="javascript:void(0);">761棋牌
            <small>CHESS</small>
           </a>
        </router-link> -->
        <li>
          <a @click="open(Games.href_vr, 'VR彩票', 900, 640, true, islogin)">VR彩票
            <small>VR</small>
            </a><img src="./images/hot.png">
        </li>
        <router-link tag="li" :to="{name:'promosIndex'}">
          <a href="promo">优惠活动
            <small>PROMOTINS</small>
           </a>
          <img src="./images/hot.png">
        </router-link>
        <router-link tag="li" :to="{name:'downloadIndex'}">
          <a href="javascript:void(0);">
            手机投注
            <small>MOBILE</small>
          </a>
        </router-link>
        <router-link tag="li" :to="{name:'vipIndex'}">
            <a href="javascript:void(0);">
              VIP专区
              <small>VIP ZONE</small>
            </a>
        </router-link>
        <router-link tag="li" :to="{name:'cooperationIndex'}">
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
      cursor: pointer;
      float: left;
      padding: 0 20px;
      color: #fff;
      position: relative;
      text-align: center;
      border-left: 1px solid #1c2233;
      &:hover  div{
        display: block!important;
      }
      .nav-box {
          text-align: center;
          width: 100%;
          // font-weight:600;
          .zh{
            font-size:16px;
            margin-bottom:4px;
          }
          .en{
            font-size:12px;
          }
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
    // .ag-ebet {
    //   display: none;
    //   text-align: center;
    //   position: absolute;
    //   z-index:2;
    //   top:37px;
    //   padding-top:11px;
    //   left:0px;
    //   width: 100%;
    //   z-index:99;
    // }
    .ag-ebet {
      position: absolute;
      // top: 100%;
      width: 100%;
      left:0;
      border: solid 1px #ffd178;
      // border-top: none;
      background: #202020;
      // z-index: 10;
      // transform: scale(0);
      // opacity: 0;
      // transition: all 0.4s;
      
      display: none;
      text-align: center;
      // position: absolute;
      // z-index:2;
      top:34px;
      // padding-top:11px;
      left:0px;
      width: 100%;
      z-index:99;
      .list {
        color: #fff;
        height: 40px;
        line-height: 40px;
        display: block;
        border-bottom: dashed 1px #999;
        margin: 0 px;
        &:hover,
        &.active {
          color: #ffdc98;
        }
        &:last-child {
          border-bottom: none !important;
        }
      }
    }
  }
</style>
