<template>
  <div class="recommend-firend">

    <div v-show="step==1">
      <div class="link-box" v-clipboard:copy="friendLink" v-clipboard:success="onCopy">
        您的专属推荐链接 (点击可复制)
        <div class="link-href" ref="linkurl">{{friendLink}}</div>
      </div>
      <div class="item-list  iconfont icon-arrow_r" @click="step=2">
        推荐奖金
        <div class="item-list-money">{{money}}</div>
      </div>
    </div>

    <div v-show="step==2">
      <v-input select="1">
        <select v-model="myData.platform">
          <option value="">请选择转入平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">
            {{item.name}}
          </option>
        </select>
      </v-input>
      <v-input>
        <input v-model.number="myData.money" type="text" placeholder="请填写转入金额">
        <span class="right-info">元</span>
      </v-input>
      <v-button @click="submit">确定转入</v-button>
    </div>
    <!-- <form-tip>
      <p class="c-red">温馨提示：</p>
      1.被介绍人需要在介绍人的<span class="c-red">专属链接</span>下进行注册 <br>
      3.如有疑问请及时联系24小时在线客服进行咨询.
    </form-tip> -->
  </div>
</template>
<script>
  import vButton from "mobile/components/form/button"
  import vInput from "mobile/components/form"
  import formTip from "mobile/components/form-tip"
  import {platformData} from "@/assets/data"
  import {recommendFriend} from '@/controls/discount/recommendFriend'
  export default {
    mixins: [recommendFriend],
    data() {
      return {
        platformData,
        step: 1
      };
    },
    methods: {
      onCopy() {
        window.toast("复制成功")
      },
      submit() {
        this.friendSubmit(this.myData).then(res => {
          console.log(res)
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getFriendBonue()
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
  .recommend-firend {
    padding: r(30);
    @include f(28px);
    .link-box,
    .item-list {
      margin-bottom: r(30);
      padding: r(30);
      border: 1px dashed $cl1;
      border-radius: r(10);
      line-height: r(48);
      color: #999;
    }
    .link-href {
      @include f(32px);
      color: #282828;
    }

    .item-list {
      position: relative;
      margin-bottom: r(20);
      padding: r(30);
      border: 1px solid #ddd;
      border-radius: r(20);
      background-repeat: no-repeat;
      background-size: 7px 12px;
      &::before {
        position: absolute;
        right: r(30);
        top: 50%;
        transform: translateY(-50%);
      }
      .item-list-money {
        @include f(40px);
        line-height: 1.8;
        color: $cl3;
      }
    }
  }

</style>
