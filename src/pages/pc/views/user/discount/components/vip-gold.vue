<template>
  <div class="vip-gold">
      <div class="vip-tips">
        总投注额{{tips.allbet}}元
      </div>
      <el-table
        :data="level"
        border
        :row-class-name="tableRowClassName"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="levelName"
          label="等级"
          width="180">
        </el-table-column>
        <el-table-column
          prop="upgradeprize"
          label="晋级礼金">
        </el-table-column>
        <el-table-column
          prop="upgradethreshold"
          label="晋级要求">
        </el-table-column>
      </el-table>
      <div style="margin:20px 0">
        <el-button class="submitbtn" @click="submit" :loading="loading" :disabled="!canUpgrade">检测升级</el-button>
      </div>
  </div>
</template>
<script>
  import {checkUpgrade} from "@/api/preferential-terms"
  import {vipGold} from '@/controls/discount/vipGold'
  export default {
    mixins:[vipGold],
    data() {
      return {
        // disabled:false
        loading:false
      };
    },
    methods: {
      submit() {
        this.loading=true
        this.checkUpgrade().then(res=>{
          window.toast(res.toast)
          this.loading=false
        }).catch(err=>{
          window.toast(err.message)
          this.loading=false
        })
      },
      tableRowClassName({row, rowIndex}) {
        console.log(row.level,this.userData.levelNumber)
        if(row.level==this.userData.levelNumber){
          return 'active-row';
        }
        return '';
      }
    },
    components: {
      // vipStep
    },
    activated(){
      this.getVipInfo()
    }
  };
</script>
<style lang="scss">
.submitbtn{
  background: #ed7e12;
  color: #fff;
}
  .vip-gold {
    .vip-tips {
      color: #09affe;
      font-size: 30px;
      margin: 20px 0;
        line-height:1.5;
      
    }
    .active-row{
      background:#c7e9fd!important;
    }
    .formbtn{
      margin-top: 24px;
    }
    .disablebtn{
      background-color: #ccc!important;
      cursor: not-allowed!important;
    }
  }
</style>
