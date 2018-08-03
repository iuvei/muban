<template>
    <div class="modal fade in" v-show="value">
      <div class="alert-tips">
        <div class="alert-tips-content">
          <i class="iconfont icon-guanbi iclose" @click="close"></i>
          <div class="content-info">
            <div class="title">免费成为会员</div>
            <div class="conent">
              <h2>注册成为会员</h2>
              <div class="form-box">
                <div class="form-group">
                  <i class="iconyg yg-gerenxinxi"></i>
                  <input type="text" class="ps-input ps-input1" v-model="registerForm.account" placeholder="用户名(6-10位数字和字母)"
                        maxlength="20">
                </div>
                <div class="form-group">
                  <i class="iconyg yg-mima1"></i>
                  <input ref="pwd" type="password" autocomplete="off" class="ps-input inpt-pwd"
                        v-model="registerForm.password" placeholder="密   码(6-16位数字或字母）" maxlength="16">
                  <eyes :dom="$refs.pwd"></eyes>

                </div>
                <div class="form-group">
                  <i class="iconyg yg-shouji"></i>
                  <input type="text" class="ps-input ps-input1" v-model="registerForm.phone"
                        placeholder="取款唯一凭证，请正确填写手机号" maxlength="11">
                </div>
                <div class="form-group">
                  <i class="iconyg yg-yanzhengma"></i>
                  <input type="text" class="ps-input ps-input2" v-model="registerForm.imageCode" placeholder="验证码"
                        maxlength="4">
                  <a href="javascript:;" class="captcha-code icon_popup" @click="getimg">
                    <img  :src="authImg"></a>
                </div>
                <span class="validate"></span>
                <input type="submit" class="submit" @click.prevent="register(registerForm)" id="submit_user" value="提交">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {getAuthImg, register} from '@/api/authService';
  import eyes from "pc/components/eyes"
  import  check from "@/util/RegExp"
  
  import {registerControl} from "@/controls/auth/registerControl" // 引入公共业务逻辑

  
  export default {
    props: {
      value: Boolean
    },
    mixins:[registerControl],
    data() {
      return {
        authImg:getAuthImg(),
        registerForm: {
          aliasName: "", //true string
          phone: "", //true string
          confirmPassword: "",// true string
          email: "", //true string
          name: "", //true string
          account: "", //true string
          birthDate: "", //true string
          imageCode: "", //true string
          password: "", //true string
          qq: "", //true string
          intro: "",
          friendcode:""
        }
      }
    },
    created() {
      let name="friendcode"
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r!= null) {
        this.registerForm.intro=this.registerForm.friendcode=unescape(r[2]);
      }
    },
    methods: {
      close(){
            this.$emit('input', false)
      },
      checked() {
        if (!check.account.test(this.registerForm.account)) window.toast("登入账号的长度请介于6-10字符之间！");
        else if (!check.password.test(this.registerForm.password)) window.toast("密码需为6-16位，包含数字和字母");
        else if (!check.phone.test(this.registerForm.phone)) window.toast("手机号格式不正确");
        else if (this.registerForm.imageCode == "") window.toast("请输入验证码");
        else {
          return true;
        }
      },
      register() {
        if (!this.checked()) return;
        register(this.registerForm).then((res) => {
          if (res.success) {
            this.$emit('input', false)
            // this.$store.dispatch("UPDATE_USERDATA");
            this.$router.replace({path: "/user", query: {account: this.registerForm.account}});
            window.toast(res.message);
          } else {
            this.getimg()
            window.toast(res.message);
          }
        }).catch(err => {
          this.getimg()
        });
      },
      getimg(e) {
        this.authImg = getAuthImg();
      }
    },
    components:{
      eyes
    }
  }
</script>
<style lang="scss" scoped>
  // .register-ruleForm{
  //   width:450px;
  //   margin:0 auto;
  // }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #b2b2b2;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:    #b2b2b2;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:    #b2b2b2;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color:    #b2b2b2;
  }
  .alert-tips {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99;
    text-align: center;
    .alert-tips-content {
      background: url("./images/bg.png");
      width: 815px;
      height: 628px;
      display: inline-block;
      margin-top: 10%;
      border-radius: 15px;
      background-size: 100% 100%;
      color: #000;
      padding: 43px 264px 120px 30px;
      position: relative;
      .iclose {
        position: absolute;
        right:56px;
        top: 18px;
        font-size:50px;
        color: #fff;
        cursor: pointer;
        background-color: #0e1a95;
        border-radius: 50%;
      }
      .content-info {
        .title {
          text-align: center;
          font-size: 19px;
          color: #ffe72b;
          white-space: nowrap;
          padding-left: 180px;
          padding-right: 46px;
        }
        .conent{
          font-size: 16px;
          color:#ed7e12;
          line-height: 24px;
          overflow-x: hidden;
          text-align: left;
          margin: 42px 0 0 0;
          overflow: hidden;
          height: 402px;
          h2{
            text-align: center;
            color: #666664;
          }
          .form-box {
            width: 300px;
            margin: 20px auto;
            .form-group {
              height: 34px;
              line-height: 34px;
              position: relative;
              margin-bottom: 20px;
              width: 100%;
            }
            .validate {
              display: block;
              margin: 10px 0;
              font-size: 12px;
              color: #13a1ca;
              min-height: 16px;
              text-align: center;
            }
            p {
              text-align: center;
              color: #999;
            }
            .captcha-code {
              width: 90px;
              height: 34px;
              float: left;
              display: block;
              position: relative;
              background: no-repeat;

              img {
                height: 34px;
                width: 90px;
                vertical-align: top;
              }
            }
            .ps-input {
              width: 300px;
              height: 34px;
              border: 0;
              background: 0 0;
              border-bottom: 1px solid #ccc;
              outline: 0;
              line-height: 34px;
              font-size: 16px;
              color: #333;
              padding: 0 20px 0 30px;
            }
            .ps-input2 {
              width: 210px;
              float: left;
              height: 34px;
              border-bottom: 1px solid #ccc;
              outline: 0;
              line-height: 34px;
              font-size: 16px;
              color: #333;
              padding: 0 20px 0 30px;
            }
            i.iconfont {
              position: absolute;
              height: 100%;
              line-height: 34px;
              top: 0;
              left: 0;
              font-size: 24px;
              display: inline-block;
            }
            span.iconfont {
              position: absolute;
              top: 0;
              right: 10px;
              font-size: 24px;
              cursor: pointer;
              line-height: 34px;
              height: 100% !important;
              color: #f66;
            }
            i.iconyg {
              position: absolute;
              height: 100%;
              line-height: 34px;
              top: 0;
              left: 0;
              font-size: 24px;
              display: inline-block;
            }
            span.iconyg {
              position: absolute;
              top: 0;
              right: 10px;
              font-size: 24px;
              cursor: pointer;
              line-height: 34px;
              height: 100% !important;
              color: #f66;
            }
            .submit {
              width: 300px;
              height: 40px;
              background: #ed7e12;
              text-align: center;
              line-height: 40px;
              cursor: pointer;
              font-size: 16px;
              color: #fff;
              text-align: center;
              display: block;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
  
</style>
