<template>
<div class="classes">
  <input-inline label="支付类型" select="1">
    <select v-model="infoSelect" @change="selectPayInfo(infoSelect)" placeholder="请先选择存款方式">
      <option v-for="(item,key,i) in classes" :key="i" :value="item">{{item.remark}}</option>
    </select>
  </input-inline>
</div>
</template>
<script>
  import {
    getPaymentConfigInfo,
  } from "@/api/payment"
  import {
    payTypes,
    mcTypech
  } from '@/assets/data/deposit'
  export default {
    data() {
      return {
        infoSelect: null
      }
    },
    methods: {
      selectPayInfo(info) {
        this.infoSelect = info;

      }
    },
    watch: {
      classes(val) {
        this.infoSelect = this.classes[0];
      },
      infoSelect(val){
        this.$emit('selectPayInfo', val)
        if (val.customParams) { // 风控 要加小数点
          if (val.customParams.enterMode === 'USER_DECIMAL') {
            let msg = ''
            if (val.customParams.depositLimitOfDay) {
              msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。<br>每日存款次数限制为：${val.customParams.depositLimitOfDay}次`
            } else {
              msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。`
            }
            // 风控 要加小数点
            $alert(msg,'存款金额提示')
          }
        }
      }
    },
    props: {
      classes: {
        type: Array
      }
    },
    created() {
      console.log(this.classes);
      // this.getPaymentConfigInfo();
    },
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .classes{
    margin:r(20) 0;
  }
</style>
