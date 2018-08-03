<template>

  <!-- <header class="header">
    <div class="content">
      <div class="links">
        <a class="link" @click="toCs">在线客服</a>
        <a class="link red" @click="$bus.$emit('showRegister',true)" v-if="!islogin">注册领奖金</a>
      </div>
      <a class="logo" href="/">
        <img src="~@/assets/images/logo.png">
      </a>
      <div class="input">
        <haslogin v-if="islogin"></haslogin>
        <login v-else></login>
      </div>
    </div> -->
    <header class="header">
      <div class="content-warp cfx">
        <div class="fl">
          <a href="javascript:void(0);" class="cl-red">下载专区</a>|
          <a href="javascript:void(0);" @click="setIndex" class="cl-yelow">设为首页</a>
          <a href="javascript:void(0);">快速存款通道</a>
        </div>
        <div class="fr">
          <login v-if="!islogin" ></login>
          <span v-if="islogin">
            Hi,{{userData.loginname}}&nbsp;&nbsp;&nbsp;<span v-show='isUser'> 主账户余额：{{userData.accountMoney}}</span>
            <a href="javascript:;" @click="getMoney('MAIN')" class="iconfont icon-shuaxin btn003"></a>
            <router-link class="btn-other" v-if="isUser" :to="{name:'user'}">用户中心</router-link>
              <router-link class="btn-other" v-else :to="{name:'agent_memberbill'}">代理中心</router-link>
            <a href="javascript:void(0);" @click="$store.dispatch('LOGIN_OUT')" class="btn-other">退出</a>
            <!--<a href="javascript:void(0);" v-if='isUser' @click="doSignRecord"  class="btn-other">签到</a>-->
          </span>
          <a href="javascript:void(0);" @click="$bus.$emit('showForget',true)" class="cl-yelow free-try-play">忘记密码？</a>
          <a :href="SETTING.live800" target="_blank"  class="cl-red server free-try-play">
            <i class="iconfont icon-kefu"></i>
            24小时在线客服</a>
        </div>
      </div>
      <forgetPwd class="z999" v-show="showPass"  @hide="showPass=false"></forgetPwd>
    </header>

</template>
<script>
  import login from 'pc/views/common/auth/login'
  import haslogin from 'pc/views/common/auth/haslogin'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {SETTING} from '@/assets/data'
  import openWindow from '@/util/openWindow'
  import {getNewAnnouncement} from "@/api/show"
  import {getGameMoney,doSignRecord} from '@/api/user'
  import forgetPwd from "pc/views/common/pwd/pwdForgot"
  
  export default {
    data() {
      return {
        SETTING,
        showPass:false
      };
    },
    computed: {
      ...mapGetters(["userData", "islogin", "isAgent", 'isUser', 'showLogin'])
    },
    methods: {
      ...mapActions(["UPDATE_USERDATA"]),
      toCs(){
        openWindow(SETTING.live800, '在线客服', 700, 640)
      },
      setIndex(e){
        let obj=e.target,
          url=window.location.hostname
        try{
          obj.style.behavior='url(#default#homepage)';
          obj.setHomePage(url);
        }catch(e){
          if(window.netscape){
            try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
          }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
          }
        }
      },
      doSignRecord(){
        doSignRecord().then(res=>{
          toast(res.message)
        })
      }
    },
    created(){
      // 更新一次用户信息
      this.UPDATE_USERDATA();
    },
    components:{login,haslogin,forgetPwd}
  };
</script>
<style lang="scss" scoped>
// .header{
//   padding:10px 0;
//   background:#1b1b1c;
//   .content{
//     width:1200px;
//     margin:0 auto;
//     display:flex;
//     justify-content: space-between;
//     font-size:14px;
//     height:100px;
//     position:relative;
//     .links{
//       margin-top:15px;
//       color:#fff;
//       .link{
//         margin-right:10px;
//         cursor:pointer;
//         &.red{
//           animation: color 0.6s;
//           animation-iteration-count: 999;
//         }
//       }
//     }
//     .logo{
//       position: absolute;
//       top: 50%;
//       left: 45%;
//       transform: translate(-50%,-50%);
//       transition:all 0.4s;
//       &:hover{
//         transform:translate(-50%,-50%) scale(1.05);
//       }
//     }
//   }
// }
//   @keyframes color {
//     from {
//       color:#ffd177;
//       transform: scale(1)
      
//     }
//     to {
//       color:#fff;
//       transform: scale(1.05)
      
//     }
//   }
.z999{
  z-index: 999;
}
.header {
    height: 55px;
    background: #010016;
    color: #a4a3a7;
    line-height: 53px;
    .fl > a {
      margin: 0 15px;
    }
    .login-form {
      line-height: 27px;
      display: inline-block;
    }
    .login-form p {
      border: 1px solid #293758;
      padding-left: 53px;
      padding-right: 5px;
      display: inline-block;
      margin-right: 9px;
      vertical-align: middle;
      position: relative;
      height: 25px;
      width: 135px;
    }
    .login-form p input {
      color: #a4a3a7;
      text-align: right;
      width: 100%;
      background: none;
      height: 25px;
      outline: none;
      vertical-align: top;
    }
    .login-form p label {
      position: absolute;
      left: 9px;
      top: 0px;
      line-height: 25px;;
    }
    .login-form p.identifying-code {
      width: 145px;
      padding-left: 85px;
    }
    .login-form .btn {
      display: inline-block;
      width: 68px;
      height: 24px;
      line-height: 22px;
      border: 1px solid #ff4242;
      background: #d90000;
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      font-size: 12px;
      vertical-align: middle;
    }
    .login-form .btn-register {
      background: #ffd300;
      border-color: #ffcb5a;
      margin-left: 6px;
      color: #121212;
    }
    .free-try-play {
      display: inline-block;
      margin: 0 17px;
      vertical-align: middle;
    }
    .cl-yelow {
      color: #ffd924 !important;
    }
    .cl-red {
      color: #ff1e1e !important;
    }

    .btn-other {
      border: solid 1px #fff;
      color: #fff;
      display: inline-block;
      position: relative;
      display: inline;
      padding: 2px 24px;
      font-size: 14px;
      margin-left: 10px;
      text-align: center;
      border-radius: 3px;
      font-weight: 500;
    }
    .server{
      margin: 0!important;
      animation:flashs 0.6s infinite; ;
    }
    @keyframes flashs {
      0%{ color: #f00;}
      100%{color:yellow;}
    }
  }
</style>
