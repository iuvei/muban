<template>
  <div class="transfer">
    <input-inline label="转出">
      <select ref="transOut" v-model="data.transferGameOut">
        <option value=''>请选择转出钱包</option>
        <option :nameVal="item.name" v-for="item in Money" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
      <span class="transfer-tips">{{money.gameOut}}</span>
    </input-inline>
    <input-inline label="转入">
      <select v-model="data.transferGameIn" ref="transIn">
        <option value=''>请选择转入钱包</option>
        <option :nameVal="item.name" v-for="item in Money" :value="item.value" :key="item.value">
          {{item.name}}
        </option>
      </select>
      <span class="transfer-tips">{{money.gameIn}}</span>
    </input-inline>
    <input-inline label="金额">
      <input v-model.number="data.transferGameMoney" type="text" placeholder="请输入转账金额">
    </input-inline>
    <vButton @click="transfer" class="frombtn">确定</vButton>
  </div>
</template>
<script>
  import {updateGameMoney} from "@/api/payment"
  import {getGameMoney} from "@/api/user"
  import {platformData} from "@/assets/data"
  import {Money} from "@/assets/data"
  import {transfer} from '@/controls/money/transfer'
  export default {
    mixins:[transfer],
    data() {
      return {
        Money,
      };
    },
    watch: {

    },
    methods: {
      transfer() {
            this.transferSubmit(this.data).then(res=>{
              window.toast(res.message)
            }).catch(err=>{
              window.toast(err.message)
            })
      },
    }, components: {}
  }
</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .transfer {
    padding: r(30);
    .text_red {
      color: #00baa6;
    }
    .text_green {
      color: #00c755;
    }
    .transfer-tips{
      @include f(28px);
      position:absolute;
      right:r(20);
      word-break:keep-all;
    }
  }
</style>
