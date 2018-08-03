<template>
  <div class="discount-code">
    <v-input select="1">
      <select v-model="data.couponType" id="couponType">
        <option value=""> 请选择 </option>
        <option v-for="item in platformData" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
    </v-input>
    <v-input>
      <input type="text" v-model.number="data.couponRemit" placeholder="请填写转入金额" name="couponRemit" maxlength="10">
      <span class="right-info">元</span>
    </v-input>
    <v-input>
      <input type="text" v-model="data.couponCode" placeholder="优惠代码">
    </v-input>
    <v-button @click="submit">确定转入</v-button>
    <!-- <form-tip>
      <p class="c-red">温馨提示：</p>
      <p>1.仅限老虎机平台使用。</p>
      <p>2.红利金额会自动添加到您转到的游戏平台里。</p>
      <p>3.优惠券代码会以站内信形式发送给您。</p>
    </form-tip> -->
  </div>
</template>
<script>
  import formTip from "mobile/components/form-tip"
  import {
    platformData
  } from "@/assets/data"
  import vInput from "mobile/components/form"
  import vButton from "mobile/components/form/button"

  import {
    coupon
  } from '@/controls/discount/coupon'
  export default {
    mixins: [coupon],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      submit() {
        this.couponSubmit(this.data).then(res => {
          console.log(res)
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {},
    components: {
      formTip,
      vInput,
      vButton
    }
  };

</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .discount-code {
    padding: r(30);

  }

</style>
