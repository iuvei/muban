<template>
  <div class="depost-input">
    <input-inline label="支付银行" v-if="bankCodeData.length>0">
      <select v-model="submitData.bankCode" placeholder="请选择支付银行">
        <option value="">请选择支付银行</option>
        <option v-for='(item,i) in bankCodeData' :value="item.value" :key="i+item.value">
          {{item.name}}
        </option>
      </select>
    </input-inline>

    <input-inline label="充值金额">
      <input type="text" v-model="submitData.order_amount" :placeholder="placeholder" name="order_amount">
      <span slot="right">元</span>
    </input-inline>
    
    <div class="btn_wrap j-btn">
      <!--部分电子银行需要该选项-->
      <input type="hidden" v-model="submitData.bankCode" name="bankCode">
      <v-button @click="depositPost">提交</v-button>
    </div>
  </div>

</template>
<script>
  import check from '@/util/RegExp'
  import {basePay} from '@/controls/money/basePay'
  export default {
    mixins:[basePay],
    data() {
      return {
        active: 0,
      }
    },
    watch: {
      payItem(val) {
        // 变化后去请求获取银行卡
        this.getBankList(val)
      },
    },
    methods: {
      // 生成新的订单
      depositPost(e) {
        this.submitData.id=this.payItem.id // 赋值当前支付的id
        // 提交表单
        this.depositPostSubmit(this.submitData,this.payItem).then(res=>{
          window.toast(res.message)
        }).catch(err=>{ 
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    props: {
      payItem: {
        type: Object
      }
    },
    computed: {
      placeholder() {
        if (this.payItem && this.payItem.lowerlimit) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    }
  };

</script>
