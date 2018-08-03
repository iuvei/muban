<template>
  <div class="save-send">
    <v-input select="1">
      <select v-model="Type">
        <option value="">选择游戏平台</option>
        <option v-for="(item,i) in platformData" :value="item.value" :key="i">{{item.name}}</option>
      </select>
    </v-input>

    <v-input select="1">
      <select v-model="submitData.youhuiConfigId">
        <option value="">选择优惠幅度</option>
        <option v-for="(item,i) in listData" :value="item.id" :key="item.id" v-if="item.platform==Type">
          {{item.name}}
        </option>
      </select>
    </v-input>

    <v-input>
      <input v-model.number="submitData.remit" placeholder="请填写转入金额">
      <span class="right-info">元</span>
    </v-input>
    <div class="money-tip">
      <div class="tip-item">
        可获得红利
        <div class="item-money">
          {{percentMoney | toFixed}} 元
        </div>
      </div>
      <div class="tip-item">
        取款流水要求
        <div class="item-money text_red">
          {{limitMoney | toFixed}} 元
        </div>
      </div>
      <div class="tip-item">
        流水倍数
        <div class="item-money text_red">
          {{betMultiples | toFixed}} 元
        </div>
      </div>
      <!--<div class="tip-item">-->
      <!--投注限额-->
      <!--<div class="item-money">{{touzhuLimit | toFixed }} 元</div>-->
      <!--</div>-->
    </div>
    <v-button @click="submit" class="btn-submit">确定转入</v-button>
    <!-- <form-tip>
      <div class="c-red">温馨提示：</div>
      <span class="c-red">1.每天的00:00-01:00为系统结算时间，暂时无法使用自助存送。</span><br>
      2.申请存送后台彩金会自动添加到相应平台，您直接进入游戏即可。 <br>
    </form-tip> -->
  </div>
</template>
<script>
  import {
    youhui,
    getSelfYouHuiObject
  } from "@/api/preferential-terms"
  import formTip from "mobile/components/form-tip"
  import {
    mapGetters
  } from 'vuex'
  import {
    saveSend
  } from '@/controls/discount/saveSend'
  export default {
    mixins: [saveSend],
    data() {
      return {

      };
    },
    methods: {
      submit() {
        this.saveSendSubmit(this.submitData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
    },
    watch: {},
    computed: {
      ...mapGetters(["userData"]),
    },
    created() {
      this.getYouHui();
    },
    components: {
      formTip
    }
  };

</script>

<style lang="scss">
  @import "~mobile/assets/scss/mixin";

  .save-send {
    @include f(28px);
    padding: r(30);
    .money-tip {
      overflow: hidden;
      color: $cl4;
      .tip-item {
        float: left;
        width: 33.33%;
        text-align: center;
        .item-money {
          color: $cl3;
          @include f(40px);
          line-height: 1;
          word-break: break-all;
        }
      }
    }
  }

</style>
