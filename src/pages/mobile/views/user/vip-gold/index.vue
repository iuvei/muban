<template>
  <div class="warp-public vip-gold">
    <div class="vip-step">
      <div class="titleT">
        <span>本月总投注额{{tips.allbet}}</span>
      </div>
      <table>
        <tr>
          <th>序号</th>
          <th>游戏平台</th>
          <th>投注金额</th>
          <th>保级</th>
        </tr>
        <tr v-for=" (item,i) in level" :key="item.level">
          <td>{{i+1}}</td>
          <td>{{item.levelName}}</td>
          <td>{{item.upgradeprize}}</td>
          <td>{{item.upgradethreshold}}</td>
        </tr>
      </table>
    </div>

    <vButton @click="submit" :disabled="!canUpgrade">检测升级</vButton>
    <div class="bottom_info_text">每月仅可自助申请一次哟</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {vipGold} from '@/controls/discount/vipGold'
  export default {
    mixins:[vipGold],
    name: "",
    data() {
      return {
        disabled:false,
        data: {
          upgradeThresholdList: [],
          betList: [{bet: 0}]
        },
        levelCount: 0, //所有的等级数量
        thisMonthMoney: 0//本月投注额
      };
    },
    methods: {
      submit() {
        this.checkUpgrade().then(res=>{
          window.toast(res.toast)
        }).catch(err=>{
          window.toast(err.message)
        })
      }
    },
    created() {
      this.getVipInfo()
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin";
  .vip-gold {
    padding: 0 r(20);
.bottom_info_text{margin: 1em; text-align: center;}
    .vip-step {
      .titleT {
        height: r(84);
        line-height:r(84);
        color: #000;
        text-align: left;
        border-bottom: 1px solid #666;
        margin-bottom: 10px;
     @include  f(36px)
      }
      table {
        width: 100%;
        border-spacing: 0;
        @include  f(28px)
        text-align: center;
        border-collapse:collapse;
        th {
          background: #666;
          padding: r(20) r(40);
          font-weight: 100;
          color: #fff;
          height: r(100);
        }
        td {
          padding: r(20) r(40);
          border: 1px solid #b8b8b8
        }
      }
    }
  }
</style>
