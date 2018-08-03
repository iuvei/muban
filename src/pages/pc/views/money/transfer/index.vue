<template>
  <div class="u-c-shows">
    <div>
        <el-form :model="data" ref="transferForm" label-width="100px" class="draw-form">

          <!-- 转出账户 -->
          <el-row>
            <el-col :span="16">
              <el-form-item label="转出账户：" prod="transferGameOut">
                <el-select v-model="data.transferGameOut" placeholder="请选择需要转出的账户">
                  <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8"><span class="tips">{{money.gameOut}}</span></el-col>
          </el-row>
          <!-- </div> -->

          <!-- 转入的账户 -->
          <el-row>
            <el-col :span="16">
              <el-form-item label="转入账户：" prod="transferGameIn">
                <el-select v-model="data.transferGameIn" placeholder="请选择需要转入的账户">
                  <el-option :label="item.name" v-for="item  in Money" :value="item.value" :key="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8"><span class="tips">{{money.gameIn}}</span></el-col>
          </el-row>


          <!-- 转账金额 -->
          <el-form-item label="转账金额：" prop="transferGameMoney">
            <el-input v-model.number="data.transferGameMoney" type="number" placeholder="请输入转账金额"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="submitbtn" @click="submitForm('transferForm')">提交</el-button>
            <el-button @click="resetForm('transferForm')">重置</el-button>
          </el-form-item>

        </el-form>
      </div>
      <tips></tips>
    </div>
</template>
<script>
  import {    mapGetters  } from 'vuex'
  import {    Money  } from "@/assets/data"
  import {transfer} from '@/controls/money/transfer'
  import tips from './components/tips'
  export default {
    mixins:[transfer],
    data() {
      return {
        Money,
      };
    },

    computed: {
      ...mapGetters(["userData"])
    },
    methods: {
      submitForm(formName) {
        this.drawSuccess = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.transferSubmit(this.data).then(res=>{
              window.toast(res.message)
              this.resetForm('transferForm')
            }).catch(err=>{
              window.toast(err.message)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    components:{
      tips
    }
  }

</script>
<style lang="scss" scoped>
  .transact_top {
    height: 70px;
    line-height: 35px;
    width: 800px;
    text-align: center;
    font-size: 24px;
  }

  .draw-form {
    margin-top: 30px;
    width: 500px;
    .el-select {
      display: block !important;
    }
    .tips{
      font-size: 16px;
      line-height: 33px;
      padding-left: 57px; 
    }
  }

  .transfer-info {
    .tips {
      position: absolute;
      left: 105%;
      top: 0;
      word-break: keep-all;
    }
  }
  .submitbtn{
    background: #ed7e12;
    color: #fff;
  }
</style>
