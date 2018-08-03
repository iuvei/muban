<template>
  <div class="register-content">
      <!-- <div class="txt-center" style="margin:1rem 0">
        <img src="~@/assets/images/logo.gif" alt="">
      </div> -->
    <div class="register-item ">
      <div class="register-item-row">
        <i class="iconyg yg-zhanghao"></i>
        <span class="register-text">用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span>
        <input type="text" v-model="registerForm.account" class="register-input" placeholder="输入用户名">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-mima"></i>
        <span class="register-text">设置密码：</span>
        <input type="password" v-model="registerForm.password" class="register-input" placeholder="6-16位数字和英文字母">
      </div>
      <!-- <div class="register-item-row">
        <i class="iconyg yg-mima"></i>
        <span class="register-text">确认密码：</span>
        <input type="password" v-model="registerForm.confirmPassword" class="register-input" placeholder="再次输入密码">
      </div> -->
    </div>
    <div class="register-item">
      <!-- <div class="register-item-row">
        <i class="iconfont icon-openeye"></i>
        <span class="register-text">真实姓名：</span>
        <input type="text" v-model="registerForm.accountName" class="register-input" placeholder="需与银行卡姓名一致">
      </div> -->
      <div class="register-item-row">
        <i class="iconyg yg-shouji"></i>
        <span class="register-text">手机号码：</span>
        <input type="text" v-model="registerForm.phone" maxlength="11" class="register-input" placeholder="输入手机号码">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-yanzhengma"></i>
        <span class="register-text">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</span>
        <input type="text" v-model="registerForm.imageCode" class="register-input" maxlength="4" placeholder="输入验证码">
        <img :src="validateImage" @click="GET_VALIDATE"/>
      </div>
    </div>
    <div class="register-btngroup">
      <button class="register-btn" @click="submitForm">注册</button>
    </div>
  </div>
</template>
<script>
  import { register} from '@/api/authService';
  import {registerControl} from "@/controls/auth/registerControl" // 引入公共业务逻辑
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    mixins:[registerControl],
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      submitForm() {
            // 提交动作
            this.register(this.registerForm).then(res=>{ 
              window.toast(res.message)
              this.$router.replace({name:"user_index"});

            }).catch(err=>{
              window.toast(err.message)
            })
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .register-content{
    margin-top: r(100);
    .register-item{
      width: 100%;
      background: #fff;
      margin-top: r(20);
      box-shadow: 0 1px 3px 0 rgba(168,173,181,0.50);
      &:nth-child(1){
        margin-top: r(120);
      }
      .register-item-row{
        line-height: r(100);
        height: r(100);
        @include f(32px);
        border-bottom: 1px solid #e4e4e4;
        padding-left: 3%;
        position:relative;
        .iconyg{
          @include f(44px);
        }
        i{
          margin-right: 1%;
        }
        .register-text{
          color: #494949;
          text-align: center;
          margin-right: 1%;
        }
        .register-input{
          border: none;
          width: 50%;
          height:95%;
          @include f(32px);
        }
        img{
          width: r(200);
          position:absolute;
          right:0;
          height:100%;
        }
      }
    }
    .register-btngroup{
      margin-top: 10vh;
      text-align: center;
      .register-btn{
        width: 80%;
        background: #F28A57;
        border-radius: 8px;
        color: #fff;
        line-height: r(80);
        height: r(80);
        @include f(28px);
        letter-spacing: r(20);
      }
    }
  }
  // .form-box{
  //   .form-group{
  //     margin-bottom:r(32);
  //     font-size: 0;
  //     .form-lable{
  //       @include  f(36px);
  //       display:block;
  //       color: #009bc8;
  //       padding-left:r(20);
  //       font-weight: bold;
  //       letter-spacing: 2px;
  //       margin-bottom:r(16);
  //     }
  //     .form-control{
  //       display: block;
  //       position: relative;
  //       height: r(84);
  //       line-height:r(84);
  //       border: solid r(4) #009bc8;
  //       padding: 0 r(40);
  //       border-radius:r(40);
  //       background: #fff;
  //       overflow: hidden;
  //       @include f(32px);
  //       .input,input{
  //         vertical-align: top;
  //         width: 100%;
  //         height:100%;
  //         border: none;
  //       }
  //       &.inline-block{
  //         display: inline-block;
  //         width: 70%;
  //       }
  //     }
  //     .form-img{
  //       display: inline-block;
  //       vertical-align: top;
  //       overflow: hidden;
  //       border-radius: r(40);
  //       margin-left: 2%;
  //       width:28%;
  //       height: r(84);
  //       img{height: 100%;width:100%;}
  //     }
  //     .pwd-eye{  position:absolute;right:r(20);top:0;width:52px; height:100%;  }
  //   }
  // }
  // .login-page{
  //   padding: 0 r(30);
  //   .operate-links{
  //     padding: 0 r(50);
  //     line-height: r(48);
  //     overflow: hidden;
  //     margin-bottom: r(20);
  //   }
  //   .forgot-pwd{ float: left;color:#009bc8 }
  //   .remember-username{ float:right;}
  //   .btn-box{
  //     display: flex;
  //     padding: 0 r(50);
  //     text-align: center;
  //     color:#fff;
  //     &.column{
  //       flex-direction: column;
  //     }
  //     @include  f(36px);
  //     .btn{
  //       flex:1;
  //       padding:r(20) 0;
  //       margin: r(20);
  //     }
  //   }
  //   .login-btn{
  //     border-radius:r(200);
  //     background:$btn-bg1;
  //   }
  //   .rig-btn{
  //     border-radius:r(200);
  //     background:$btn-bg2;
  //   }
  // }
  // .from-common .matop {
  //   margin-top: 0.5rem;
  // }
</style>
