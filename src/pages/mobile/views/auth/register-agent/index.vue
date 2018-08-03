<template>
  <div class="agent-register-content">
    <div class="register-item ">
      <div class="register-item-row">
        <i class="iconyg yg-zhanghao"></i>
        <span class="register-text">代理账户：</span>
        <input type="text" v-model="submitData.loginname" class="register-input" placeholder="输入用户名">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-mima1"></i>
        <span class="register-text">设置密码：</span>
        <input type="password" v-model="submitData.password" class="register-input" placeholder="6-16位数字或英文字母">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-mima1"></i>
        <span class="register-text">确认密码：</span>
        <input type="password" v-model="submitData.confirmPassword" class="register-input" placeholder="再次输入密码">
      </div>
    </div>
    <div class="register-item ">
      <div class="register-item-row">
        <i class="iconyg yg-shenfenxinxi"></i>
        <span class="register-text">真实姓名：</span>
        <input type="text" v-model="submitData.accountName" class="register-input" placeholder="请输入真实姓名">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-link"></i>
        <span class="register-text">代理网址：</span>
        <input type="text" v-model="submitData.referWebsite" class="register-input" placeholder="推广网址(1-6位数字/字母)">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-xiaoxi"></i>
        <span class="register-text">电子邮箱：</span>
        <input type="text" v-model="submitData.email" class="register-input" placeholder="请输入电子邮箱">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-shouji"></i>
        <span class="register-text">手机号码：</span>
        <input type="text" maxlength="11" v-model="submitData.phone" class="register-input" placeholder="请输入手机号码">
      </div>
      <div class="register-item-row">
        <i class="iconyg yg-qq"></i>
        <span class="register-text">QQ：</span>
        <input type="text" v-model="submitData.qq" class="register-input" placeholder="请输入QQ">
      </div>
      <!-- <div class="register-item-row">
        <i class="iconyg yg-qq"></i>
        <span class="register-text">代理推荐人：</span>
        <input type="text" v-model="submitData.partner" class="register-input" placeholder="请输入代理推荐人">
      </div> -->
      <div class="register-item-row">
        <i class="iconyg yg-yanzhengma"></i>
        <span class="register-text">验证码：</span>
        <input type="text" v-model="submitData.validateCode" class="register-input" maxlength="4" placeholder="输入验证码">
        <img :src="validateImage" @click="GET_VALIDATE"/>
      </div>
    </div>
    <div class="agreeGroup">
      <input id='agentAgreeBoolean' type="checkbox"  v-model="submitData.agentAgree">
      <label for="agentAgreeBoolean">
        同意并接受亚冠娱乐的合作协议。
      </label>
    </div>
    
  <div class="register-btngroup">
    <button class="register-btn" @click="regSubmit">注册</button>
  </div>
  </div>
</template>

<script>
  import backHeader from "mobile/components/header-back"
  import {
    AgentRegisterControl
  } from '@/controls/auth/registerAgent'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    mixins: [AgentRegisterControl],
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      regSubmit(){
        this.register(this.submitData).then(res=>{
            window.toast(res.message)
        }).catch(err=>{
            window.toast(err.message)
        })
      }
    }
    , components: {
      backHeader
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .agent-register-content{
    text-align: center;
    padding: 0;
    @include f(24px);
    line-height: r(50);
    color: #727272;
    .register-item{
      width: 100%;
      background: #fff;
      margin-top: r(20);
      box-shadow: 0 1px 3px 0 rgba(168,173,181,0.50);
      &:nth-child(1){
        margin-top: 0;
      }
      .register-item-row{
        line-height: r(100);
        height: r(100);
        @include f(28px);
        border-bottom: 1px solid #e4e4e4;
        padding-left: 3%;
        text-align: left;
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
          @include f(28px);
        }
        img{
          width: r(130);
          height: r(60);
        }
      }
    }
    .agreeGroup{
      margin-top: r(10);
      text-align: left;
      padding-left: 3%;
      #agentAgreeBoolean{
        width: r(30);
        height: r(27);
        border-radius: 15px;
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
  .layout_form04 {
    padding: r(10) 0 r(20);
    .form_field_warp {
      padding-left: r(15*2);
      padding-right: r(15*2);
    }
  }

  .form_field {
    &.form_field_cap_code {
      // margin-right: r(110*2);
      .right_label {
        top: r(-4);
        right: r(6);
        height: 100%;
        position: absolute;
        img {
          vertical-align: middle;
          border-radius: 20em;
          height: r(40*2);
          width: auto;
        }
      }
    }
  }
</style>
