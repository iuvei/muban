<template>
<div class="login-box">
  <div class="login_logo">
  </div>
  <div class="login_content">
    
    <div class="form-group">
      <div class="form-control">
        <span class="login-input-head"><i class="iconyg yg-zhanghao"></i></span>
        <input class="login-input"  v-model="loginData.account" type="text" name="account_user" placeholder="游戏帐号">

      </div>
    </div>
    <div class="form-group">
      <div class="form-control">
        <span class="login-input-head"><i class="iconyg yg-mima2"></i></span>
        <input class="login-input" v-model="loginData.password" ref="pwd" name="pwd_user" type="password" placeholder="游戏密码">
        <eyes :dom="$refs.pwd"></eyes>
      </div>
    </div>
    <div class="form-group">
      <div class="form-control inline-block">
        <span class="login-input-head"><i class="iconyg yg-yanzhengma1"></i></span>
        <input class="login-input" v-model="loginData.imageCode" name="imageCode" type="text" placeholder="验证码">
        <div class="form-img">
          <img :src="authImg" @click="GET_VALIDATE"/>
        </div>
      </div>
    </div>
    <div class="operate-links">
        <div class="remember-username">
          <input type="checkbox" id="remember">
          <span class="rem_desc">记住密码</span>
          <!-- <v-choose  v-model="isRemember"></v-choose> -->
        </div>
        <router-link to="/forgotpwd" class="forgot-pwd">忘记密码?</router-link>
    </div>
  </div>
  <div class="login_btn">
    <a class="submitbtn" @click="login">登陆</a>
  </div>
  <div class="register_btn">
    <router-link :to="{path:'/register'}" class="registerbtn">没有账号，先去注册</router-link>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  import vChoose from './components/choose';
  import {AUTH_NAME} from "@/store/types"//权限名称
  import {loginControl} from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {getAuthImg} from '@/api/authService';

  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        authImg: getAuthImg(),
      };
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      getimg(e) {
        this.authImg = getAuthImg();
      },
      login() {
        this.loginSubmit(this.loginData).then(res=>{
          console.log(res.data.role)
          if (res.success && res.data.role == "AGENT"){
            console.log('as;fsadf')
            this.$router.push({name:"agent_index"})
          }else {
            console.log("klasdjflkasjf")
            this.$router.push({name:"user_index"})
          }
        }).catch(err=>{
          // alert(JSON.stringify(err))
          window.toast(err.message)
        })
      },

    },
    components: {
      vChoose
    }
  };
</script>
<style lang="scss" scoped> 
  @import "~mobile/assets/scss/mixin.scss";
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:    #333;
  }
  input:-moz-placeholder, textarea:-moz-placeholder { 
      color:    #333;
  }
  input::-moz-placeholder, textarea::-moz-placeholder { 
      color:    #333;
  }
  input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
      color:    #333;
  }
  .login-box{
    background: url('./images/bg.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
    .login_logo{
      text-align: center;
      height:r(400)
    }
    .login_content{
      text-align: center;
      .form-group{
        margin: r(40) auto;
        position:relative;
        .form-control{
          display: block;
          position: relative;
          height: r(84);
          line-height:r(84);
          margin: 0 r(70);
          border-radius:r(10);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          @include f(32px);
            .pubeyes{
              color: #fff!important;
              right: 5%;
            }
          .login-input-head{
            background: rgba(255, 255, 255, 0.7);
            border-radius:  8px 0 0 8px ;
            height: r(85);
            width: r(90);
            display: inline-block;
            margin-right: -3px;
            position: absolute;
            top: 0;
            left: 0;
            .iconyg{
              @include f(44px);
            }
          }
          .login-input{
            height: r(70);
            line-height: r(80);
            background: rgba(255,255,255,0.6);
            width: 100%;
            vertical-align: top;
            // width: 100%;
            height:100%;
            border: none;
            padding-left:r(100);;
            position:absolute;
            top:0;
            left:0;
          }
          .form-img{
              display: inline-block;
              vertical-align: top;
              margin-left: 2%;
              position: absolute;
              right: 0;
              top: 0;
              height:100%;
              img{
                display:block;
                height: 100%;

              };
              
          }
        }
      }

    }
    .operate-links{
      // margin-top: r(50);
      margin:r(40) r(90);
      color: #fff;
      display:flex;
      justify-content: space-between;
      .remember-username{
        display: inline-block;
        text-align: left;
        #remember{
          width: r(30);
          height: r(27);
          border-radius: 15px;
        }
        .mycheck{
          background-color: white;
          border-radius: 5px;
          border:1px solid #d3d3d3;
          width:20px;
          height:20px;
          display: inline-block;
          text-align: center;
          vertical-align: middle;
          line-height: 20px;
        }
        label:checked{
            background-color: #eee;
        }
        label:after{
            content:"\2714";
        }
      }
    }
    .login_btn{
      margin: 0 r(70);
      margin-bottom:r(100);
      .submitbtn{
        text-align:center;
        display:block;
        color: #fff;
        opacity: 0.8;
        background: #F28A57;
        border-radius: r(6);
        height: r(84);
        line-height: r(84);
        @include f(28px);
      }
    }
    .register_btn{
      width: 100%;
      text-align: center;
      .registerbtn{
        opacity: 0.7;
        border: 1px solid #FFFFFF;
        border-radius: 100px;
        color: #fff;
        height: r(80);
        line-height: r(80);
        @include f(24px);
        width: 50%;
        display: inline-block;
      }
    }
  }
  
</style>
