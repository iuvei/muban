<template>
  <div class="add-bank-card ">
    <div class="form-box">
      <input-inline label="银行卡号">
        <input v-model="bindData.cardNo" type="text" placeholder="输入卡号后，系统智能识别银行" maxlength="19" @input="verifyBankNumber(bindData.cardNo)">
      </input-inline>
    </div>
    <div class="card-tip">
      {{banktxt}}
    </div>
    <v-button @click="submit">保存</v-button>
  </div>
</template>
<script>
  import {bindBankNo} from "@/api/payment";
  import check from "@/util/RegExp"
  import {bank} from "@/controls/common/bank"
  export default {
    mixins: [bank],
    data() {
      return {
      };
    },
    methods: {
      submit() {
        console.log(this.userData)
        this.addBankNo(this.bindData).then(res=>{
          this.bindData.cardNo=''
          window.toast(res.message)
        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    }
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .add-bank-card {
    @include f(32px);
    padding: r(30) r(30) 0;
    .card-tip {
      line-height: 1.3;
      text-align: center;
      color: $cl3;
    }
  }
</style>
