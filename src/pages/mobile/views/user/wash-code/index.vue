<template>
  <div class="user-wash-code">
    <div class="layout_form no_padding with_last_border" v-show="!show">
      <!-- 游戏平台 -->
      <v-input select="1">
        <select class="j-plat" v-model="type" @change="search(type)">
          <option value="">选择游戏平台</option>
          <option v-for="item in platformData" :value="item.value" :key="item.value">{{item.name}}</option>
        </select>
      </v-input>

      <!-- 开始时间 -->
      <v-input>
        <p class="text">开始时间</p>
        <input v-model="data.startDate" readonly placeholder="请选择游戏平台">
      </v-input>

      <!-- 结束时间 -->
      <v-input>
        <input v-model="data.endDate" readonly placeholder="请选择游戏平台">
      </v-input>

      <!-- 总有效投注额 -->
      <v-input>
        <input v-model="data.validAmount" readonly placeholder="无投注记录">
      </v-input>

      <!-- 洗码比率 -->
      <v-input>
        <input v-model="data.rate" readonly placeholder="无投注记录">
      </v-input>

      <!-- 返水金额 -->
      <v-input>
        <input v-model="data.ximaAmount" readonly placeholder="无投注记录">
      </v-input>

      <v-button @click="doXima" v-if="show">洗码</v-button>

    </div>
  </div>
</template>

<script>
  import vButton from "mobile/components/form/button"
  import vInput from "mobile/components/form"
  import {    platformData  } from "@/assets/data"
  import {    washCode  } from '@/controls/discount/washCode'
  export default {
    mixins: [washCode],
    data() {
      return {
        platformData,
      };
    },
    methods: {
      search(type) {
        this.searchSubmit({gameId:type}).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      },
      doXima() {
        if(!this.show){
          return
        }
        this.doXimaSubmit({
          gameId: this.type
        }).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    components: {
      vInput,
      vButton
    }
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .user-wash-code {
    padding: r(30);
    .form-control-block {}
  }

</style>
