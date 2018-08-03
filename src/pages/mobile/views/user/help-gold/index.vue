<template>
  <div class="help-gold">

      <v-input select="1">
        <select v-model="submitData.pno">
          <option value="">选择救援金</option>
          <option v-for="item in listData" :value="item.pno" :key="item.value" v-if="item.status==0">
            {{item.promo}}元-(截止{{getUom(item)}})
          </option>
        </select>
      </v-input>

      <v-input select="1">
        <select v-model="submitData.platform">
          <option value="">选择游戏平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">
            {{item.name}}
          </option>
        </select>
      </v-input>

      <v-button @click="submit">
        确定转入
      </v-button>
    <!-- <form-tip>
      <p class="c-red">温馨提示：</p>
      1.请您确认“领取”，点击领取救援金转入游戏平台后，将无法更改。
      <br> 2.救援金有效时间为30天（从派发当天开始计算），规定时间内未领取会自动取消。
    </form-tip> -->
  </div>
</template>

<script>
  import formTip from "mobile/components/form-tip"
  import vInput from "mobile/components/form"
  import vButton from "mobile/components/form/button"
  import {platformData} from "@/assets/data"
  import {helpGold} from '@/controls/discount/helpGold'
  export default {
    mixins: [helpGold],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      submit() {
        // 提交表单

        console.log('l;asfj')
        console.log(this.submitData)
        this.helpGoldSubmit(this.submitData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getHelpGold(this.searchLogData);
    },
    components: {
      formTip,
      vInput,
      vButton
    }
  };

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .help-gold {
    padding: r(30);
    @include f(28px);
    .item-list {
      position: relative;
      margin-bottom: r(20);
      padding: r(30);
      border: 1px solid #ddd;
      border-radius: r(20);
      background-repeat: no-repeat;
      line-height: r(60);
      &::before {
        position: absolute;
        right: r(30);
        top: 50%;
        transform: translateY(-50%);
      }
      .item-list-money {
        @include f(40px);
        color: $cl3;
      }
      .item-list-text {
        color: $cl4;
      }
    }

  }

</style>
