<template>
  <div class="birthday-gold">
    <!-- 判断有无设置生日 -->
    <img src="./images/birthday.png" style="width:60%;">
    <div v-if="userData.birthday!=''">
      <!-- 可以领取生日礼金 -->
      <div v-if="isBirthday">
        <div class="bir-text">
          在您注册生日当天，即可申请生日礼金，祝您生日快乐，多多盈利！
          <p class="txtct">
            <v-button v-show="userData.birthday!=''" @click="submit" :disabled="!isBirthday">领取生日礼金</v-button>
            <!-- <el-button type="primary" :disabled="!isBirthday" @click="submit">领取礼金</el-button> -->
          </p>
        </div>
      </div>
      <!-- 不可以领取生日,礼金 -->
      <div class="bir-tips" v-else>
        {{message}}
      </div>
    </div>
    <!-- 未设置生日 -->
    <div v-else>
      <div class="bir-tips">
        请先完善个人信息
      </div>
      <router-link class="bir-reset" :to="{name:'user_personal'}" v-show="userData.birthday==''">
        去设置生日
      </router-link>
    </div>
    <form-tip>
      <p class="c-red">温馨提示：</p>
      1.请您先前往个人资料账户设置中完善生日信息，才能享受该优惠。 <br>
      2.您完善资料后，达到生日礼金的要求，即可自助申请生日礼金。 <br>
      3.当您成功申请生日礼金后，请联系我们在线客服为您处理。
    </form-tip>
  </div>
</template>

<script>
  import formTip from "mobile/components/form-tip"
  import vButton from "mobile/components/form/button"
  import {mapGetters} from 'vuex'
  import {
    birthday
  } from '@/controls/discount/birthday'
  export default {
    mixins: [birthday],
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters(["userData"])
    },
    methods: {
      submit() {
        if (!this.isBirthday) return;
        this.birthSubmit().then(res => {
          window.toast(res.message)
        }).then(err => {
          window.toast(err.message)
        })
      }
    },
    created() {
      this.checkBirthCoupon().then(res => {}).catch(err => {
        console.log(err)
      })
    },
    components: {
      formTip, vButton
    }
  };
</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .birthday-gold {
    // background:#fff url(./images/birthday.jpg) center r(30) no-repeat;
    min-height: 100vh;
    text-align: center;
    padding:r(20)!important;
    color:#666;
    @include f(30px);
    .bir-text{
      color:#666;
    }
    .bir-reset{
      @include f(26px);
    }
  }
</style>
