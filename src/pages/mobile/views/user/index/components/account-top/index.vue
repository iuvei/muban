<template>
  <div class="user-top-box">
    <div class="user-top-box-row">
      <div class="user-top-box-row-col">{{userData.loginname}}，您好！</div>
      <div class="user-top-box-row-col"><i class="iconfont icon-crown"></i>{{userData.level}}</div>
    </div>
    <div class="user-top-box-row">
      <div class="user-top-box-row-col">主账户(元)：<br/><span>{{userData.accountMoney}}</span></div>
      <div class="user-top-box-row-col"><span class="btn-sign" @click="doSignRecord">签到</span></div>
    </div>
    <div class="user-top-box-row">
      <div class="user-top-box-row-col">副账户(元)：<br/><span>{{userData.deputyCredit}}</span></div>
      <div class="user-top-box-row-col"></div>
    </div>
    <!-- <div class="account-name"><strong>{{userData.loginname}}</strong></div>
    <div class="level-sign">
      <div class="level-info"><i class="iconfont icon-crown"></i>{{userData.level }}</div>
      <div class="sign-info" @click="doSignRecord">签到</div>
      <router-link tag="div" class="sign-info" :to="{name:'user_message'}">站内信</router-link>
    </div>
    <div class="flex money-list">
      <div class="flex-1">主账户&nbsp;&nbsp;{{userData.accountMoney}}</div>
      <div class="flex-1">副账户&nbsp;&nbsp;{{userData.deputyCredit}}</div>
    </div> -->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getGuestbookCountNew} from "@/api/show"
  import {doSignRecord} from "@/api/user"
  export default {
    data() {
      return {
        newMsg: false,
        showSheet: false,
        sheetData: [
          {name: "在线客服"},
          {name: "电话回拨"},
          {
            name: "400-2312314", method() {
          }
          }
        ]
      };
    },
    props: {
      value: {
        default: false
      }
    },
    watch: {
      value(val) {
        this.showSheet = val;
      },
      showSheet(val) {
        this.$emit("input", val)
      }
    },
    methods: {
      loadData() {
        getGuestbookCountNew().then(res => {  //未读消息
          this.newMsg = res.data > 0;
        })
      },
      doSignRecord(){
        doSignRecord().then(res=>{
          window.toast(res.message)
        })
      }
    },
    created() {
//      this.loadData();
    },
    computed: {
      ...mapGetters(["userData"]),
      userImg(){
        return this.userData.levelNumber?require(`./images/${this.userData.levelNumber}.png`):require("./images/0.png"); 
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .user-top-box{
    overflow: hidden;
    background:#fff url("./images/bg.jpg") no-repeat top center/100% 100%;
    margin-top: r(100);
    padding-bottom: r(100);
    @include f(30px);
    .user-top-box-row{
      width: 100%;
      padding: r(20) 2%;
      .user-top-box-row-col{
        width: 49%;
        display: inline-block;
        color: #fff;
        .iconfont{
          @include f(50px);
          vertical-align:middle;
          margin-right:r(5);
        }
        &:nth-child(1){
          text-align: left;
        }
        &:nth-child(2){
          text-align: right;
        }
        .btn-sign{
          display:inline-block;
          background-color: #FF7E28;
          @include f(40px);
          color:#fff;
          padding:r(2) r(14);
          border-radius:r(8);
        }
        span{
          color: #FF7E28;
          letter-spacing: 0;
          @include f(40px);
          line-height: r(60);
        }
      }
    }
  }
  .account-top{
    overflow: hidden;
    background:#fff url("./images/bg.jpg") no-repeat top center/100% 100%;
    .account-img{
      @include  f(100px);
      margin: r(38) auto 0;
      width: r(164);
      height: r(164);
      text-align: center;
      img{
        width:100%;
        display:block;
      }
    }
    .account-name{
      text-align: center;
      @include f(44px);
      margin: r(8) 0;
      color:#fff;
    }
    .level-sign{
      text-align: center;
      line-height: r(44);
      div{
        display: inline-block;
        background-color: #fcb712;
        padding: 0 r(16);
        border-radius:r(30);
        color: #6d091c;
        min-width:r(128);
      }
      .icon-crown{
        @include f(34px);
        margin-right:4px;
      }
    }
    .money-list{
      @include f(36px);
      color: #fced54;
      text-align: center;
      line-height:r(88);
    }
  }
</style>
