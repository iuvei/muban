<template>
  <div class="login-form">
    <p>
      <label>用户名:</label>
      <input style="display:none"><!-- for disable autocomplete on chrome -->
      <input @keyup.enter="login" v-model="loginData.account" type="text"  autocomplete="off"></p>
    <p>
      <label>密码:</label>
      <input @keyup.enter="login" v-model="loginData.password" type="password"  autocomplete="off">
    </p>
    <p class="identifying-code"><label @click="GET_VALIDATE" style="left: 0;">
      <img :src="validateImage" style="vertical-align: top" height="23" width="80"  alt=""> </label>
      <input @keyup.enter="login" v-model="loginData.imageCode"   type="text"></p>
    <div @click.enter="login"  class="pointer btn">立刻登陆</div>
    <a href="javascript:void(0);"  class="btn btn-register" @click="showRig=true">免费注册</a>
    <vRigester v-model="showRig"></vRigester>
  </div>
</template>
<script>
  import {loginControl} from "@/controls/auth/loginControl"; // 引入公共业务逻辑
  import forgetPwd from "pc/views/common/pwd/pwdForgot"
  import vRigester  from '../register'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    mixins: [loginControl], // 混合
    data() {
      return {
        showRig:false,
        ImgCode:"",
        showPass:false
      }
    },
    computed: {
      ...mapGetters(['validateImage'])
    },
    methods: {
      ...mapMutations(['GET_VALIDATE']),
      login(){
        this.loginSubmit(this.loginData).then(res=>{
          window.toast(res.message)
        }).catch(err=>{
          // Vue.set(err,'customClass','toastPos')
          // Vue.set(err,'duration','0')
          console.log(err)
          window.toast(err)
        })
      }
    },
    components:{forgetPwd,vRigester}
  };

</script>
<style lang="scss" scoped>
  .pointer{
    cursor: pointer;
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

</style>
