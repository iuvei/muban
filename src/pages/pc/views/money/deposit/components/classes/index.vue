<template>
  <el-row class="dep_type">
    <el-col :span="2">
      <span class="dep_title">
        存款渠道：
      </span>
    </el-col>
    <el-col :span="22">
      <el-radio v-model="value"
                v-for="(item,key,i) in classes"
                :key="i"
                :label="item.id"
                border 
                class="test"
                size="medium">
                {{item.remark}}
      </el-radio>
      <span  v-show="!classes">请先选择支付方式</span>
    </el-col>
  </el-row>
</template>
<script>
  import {
    getPaymentConfigInfo,
  } from "@/api/payment"
  import {payTypes,mcTypech} from '@/assets/data/deposit'
  export default {
    data() {
      return {
        infoSelect:null,
        value:''
      }
    },
    methods: {
    },
    watch:{
      classes(val){
        this.infoSelect={};
        this.value = val[0].id;
      },
      value(val){
        let item = {};
        for (let i = 0; i < this.classes.length; i++) {
          if (this.classes[i].id == val) {
            item = this.classes[i]
          }
        }
        if (item.customParams) { // 风控 要加小数点
          if (item.customParams.enterMode === 'USER_DECIMAL') {
            let msg = ''
            if (item.customParams.depositLimitOfDay) {
              msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。<br>每日存款次数限制为：${item.customParams.depositLimitOfDay}次`
            } else {
              msg = `存款金额请输入带有两位小数点的数字，如${(Math.random()*100).toFixed(2)}元。`
            }
            // 风控 要加小数点
            $alert({
              dangerouslyUseHTMLString: true,
              message:msg
            })
          }
        }
        this.infoSelect=item;
        this.$emit('selectPayInfo',item)
      }
    },
    props:{
      classes:{
        type:Array
      }
    },
    created() {
    },
  };

</script>
<style lang="scss" scoped>
  .dep_type{
    margin-top: 20px;
    font-size: 14px;
    line-height: 30px;
    .test{
      margin: 5px 0 5px 27px;
    }
    .dep_title{
      color:#343434;
    }
    .dep_item{
      display:inline-block;
      border:solid 2px #efefef;
      border-radius:5px;
      background:#f8f8f8;
      min-width:100px;
      text-align:center;
      height:40px;
      line-height:40px;
      margin:0 10px 4px 0;
      padding:0 10px;
      margin-bottom:20px;
      cursor:pointer;
      position:relative;
      &:hover,&.active{
        border:solid 2px #8bd5ff;
      }
      .dep_selected{
        line-height:1;
        position:absolute;
        color:#39b6fe;
        top:-6px;
        right:-8px;
        font-size:16px;
      }
    }
  }

</style>
