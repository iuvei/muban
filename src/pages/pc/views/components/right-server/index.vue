<template>
  <!-- <transition name="fade">
    <div>
      <div class="right-server" >
        <a class="cont-item" target="_blank" :href="SETTING.live800">
          <span class="c-ico icobjh bjh-service"></span>
          <span class="c-text">在线客服</span>
        </a>
        <a class="cont-item" href="">
          <span class="c-ico icobjh bjh-youxiang"></span>
          <span class="c-text">客服邮箱</span>
          <div class="c-box">
             <p class="c-text-inline">{{SETTING.email}}</p>
          </div>
        </a>
        <a class="cont-item" @click="showBackCall">
          <span class="c-ico icobjh bjh-tele"></span>
          <span class="c-text">电话回拨</span>
        </a>
        <router-link class="cont-item" :to="{name:'download'}">
          <span class="c-ico icobjh bjh-download"></span>
          <span class="c-text">下载客户端</span>
          <div class="c-box">
            <img src="/static/images/waiting.png" alt="" width="100%">
          </div>
        </router-link>
        <a class="cont-item">
          <span class="c-ico icobjh bjh-wechat"></span>
          <span class="c-text">微信客服</span>
          <div class="c-box">
            <img v-lazy="require('@/assets/images/wechat.jpg')" alt="" width="100%">
          </div>
        </a>
        <a class="cont-item" hrer="javascript:void(0);" @click="backToTop">
          <span class="c-ico icobjh bjh-top"></span>
          <span class="c-text">返回顶部</span>
        </a>
      </div>
    </div>
  </transition> -->
  <transition name="fade">
    <div class="right-server" v-show="showMyself">
      <div class="close" @click="showMyself=false">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <a class="cont-item" target="_blank" :href="SETTING.live800"><img src="./images/online.png">在线客服<img
        src="./images/rigth.png"></a>
      <a class='cont-item' @click="showBackCall"><img src="./images/phone.png">电话回拨<img
        src="./images/rigth.png"></a>

      <!--<div class='cont-qq'>-->
        <!--<a href="cont-item"><img src="./images/qq.png">QQ客服</a>-->
        <!--<div class="cont-qq-num">{{SETTING.qq}}</div>-->
      <!--</div>-->
      <div class='cont-wechat' style="margin:2.5em 0;">
        <a href="javascript:void(0)"><img src="./images/wechat.png">微信客服</a>
        <img src="./images/code.jpg" alt="" width="100%">
      </div>
      <router-link class="down-client" :to="{name:'download'}">
        <i class="iconfont icon-xiazai"></i>
        下载客户端
      </router-link>
      <!-- <back-call v-model="showBackCall"></back-call> -->
    </div>
  </transition>
</template>
<script>
  import {    SETTING  } from "@/assets/data"
  import  check from "@/util/RegExp"
  import {scrolltool} from "@/vue-extend/scrolltool"
  import {backCall} from "@/controls/common/backCall"
  export default {
    mixins: [scrolltool,backCall],
    name: "",
    data() {
      return { 
        SETTING,
        showMyself: true
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      backToTop() {
        this.scrollTo(0);
      },
      showBackCall(){
          // 弹窗回拨
          this.$prompt('请输入手机号码', '电话回拨', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: check.phone,
            inputErrorMessage: '手机号码格式不正确'
          }).then((confirm) => {
            // 提交弹窗
            this.backCall({phone:confirm.value}).then(res=>{
              window.toast(res.message)
            }).catch(err=>{
              window.toast(err.message)
            })
          }).catch((err) => {
            console.log(err)
          });
      }

    },
    created() {},
    activated() {},
    components: {}
  }

</script>
<style lang="scss" spcoed>
  .right-server {
    position: fixed;
    z-index: 100;
    right: 10px;
    top: 50%;
    margin-top: -257px;
    width: 141px;
    height: 515px;
    padding: 166px 17px 0;
    background: url(./images/bg.png) no-repeat;
    .close {
      position: absolute;
      top: -35px;
      left: 50%;
      margin-left: -18px;
      cursor: pointer;
      color: #c70d22;
      .iconfont {
        font-size: 36px;
      }
    }
    .cont-item {
      display: block;
      text-align: center;
      background: #e1192f;
      line-height: 29px;
      color: #fff;
      font-size: 14px;
      margin-top: 1px;
      cursor: pointer;
      
      &:hover{
        opacity: .8;
      }
      img {
        margin: 0 5px;
      }
    }
    .cont-qq {
      margin-top: 32px;
      font-size: 16px;
      font-weight: bold;
      img {
        margin-top: -20px;
        margin-right: 6px;
      }
      .cont-qq-num {
        text-align: center;
        background-color: #ed7e12;
        border-radius: 15px;
        line-height: 30px;
        color: #fff;
        margin-top: 5px;
      }
    }
    .cont-wechat {
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
      line-height: 38px;
      a img {
        margin-right: 5px;
      }
      img {
        vertical-align: top;
      }
    }
    .down-client {
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      background-color: #ed7e12;
      text-align: center;
      display: block;
      margin-top: 10px;
      border-radius: 15px;
    }
  }

</style>
