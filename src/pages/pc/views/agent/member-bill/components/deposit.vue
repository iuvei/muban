<template>
      <div class="agent-deposit-log">
        <div class="deposit-info">
          <div class="form-box">

            <div class="inputbox">
              <el-date-picker v-model="searchData.starttime" type="date" placeholder="选择开始日期" :picker-options="pickerOptions" format="yyyy-MM-dd"
                value-format="yyyy-MM-dd" :default-value="new Date()">
              </el-date-picker>
            </div>

            <div class="inputbox">
              <el-date-picker v-model="searchData.endtime" align="right" type="date" placeholder="选择结束日期" :picker-options="pickerOptions"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd" :default-value="new Date()">
              </el-date-picker>
            </div>
            <div class="inputbox">
              <el-input v-model.number="searchData.loginname" placeholder="会员用户名"></el-input>
            </div>
            <el-button :loading="loading" type="primary" icon="el-icon-search" @click="search(1)">查询
            </el-button>

          </div>
          <!-- 表格数据显示区域 -->
          <el-table :data="pageContents" style="width: 100%" v-loading="loading">
            <el-table-column label='序号' type="index"></el-table-column>
            <el-table-column property="loginname" label="会员账户"></el-table-column>
            <el-table-column property="tempCreateTime" label="申请时间"></el-table-column>
            <el-table-column property="money" label="额度"></el-table-column>
            <el-table-column property="type" label="申请类型"></el-table-column>
          </el-table>
          <!-- 表格分页 -->
          <div v-if="pageContents.length>0">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchData.pageIndex"
              :page-sizes="[10, 20, 50, 100]" :page-size="searchData.size" layout="total, sizes, prev, pager, next" :total="searchData.totalRecords">
            </el-pagination>
          </div>
        </div>
      </div>
  <!--div class="data-warp">
    <div class="form-box">
      <div class="row-group">
        <div class="inputbox">
          <label>开始时间：</label>
          <datepicker class="input" v-model="searchData.starttime"><i class="icons"></i></datepicker>
        </div>
        <div class="inputbox">
          <label>结束时间：</label>
          <datepicker class="input" v-model="searchData.endtime"><i class="icons"></i></datepicker>
        </div>
      </div>
      <div class="row-group">
        <div class="inputbox">
          <label>会员帐号：</label>
          <input type="text" v-model="searchData.loginname" class="inpt" maxlength="15"/>
        </div>
        <div class="btn" type="button" @click.prevent="search">查询</div>
      </div>
      <div class="data-info">
        <table-data :thead="thead" :data="data" @search="search">
          <tr v-for="(item,i) in data.pageContents||[]">
            <td>{{(data.pageNumber - 1) * data.size + i + 1}}</td>
            <td>{{item.loginname}}</td>
            <td>{{item.tempCreateTime}}</td>
            <td>{{item.money || item.amount}}</td>
            <td>{{item.type}}</td>
          </tr>
          <div class="comTips" slot="footer">
            <p style="text-align: right;">当页小计:{{data.subtotalStatics1||0}}</p>
            <p style="text-align: right;">总计：{{data.statics1||0}}</p>
          </div>
        </table-data>
      </div>
    </div>
  </div-->
</template>
<script>
  import {searchsubuserProposalData} from "@/api/agent";

  export default {
    name: "",
    data() {
      return {
        loading:false,
        // 日期控件配置
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pageContents:[],
        searchData: {
          loginname: "",
          tail: "",
          total: 0,
          starttime: "",
          endtime: "",
          proposalType: "-1",
          size: 10,
          pageIndex: 1,
          totalRecords:0
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        // 每页条数触发函数
        this.searchData.size = val;
        this.search();
      },
      handleCurrentChange(val) {
        // 翻页触发函数
        this.searchData.pageIndex = val;
        this.search(val);
      },
      search(index) {
        if (!isNaN(index)) {
          // if (index == this.searchData.pageIndex) return
          this.searchData.pageIndex = index
        }
        this.pageContents = [];
        searchsubuserProposalData(this.searchData).then(res => {
          if (res.success) {
            this.pageContents = res.data.pageContents
            this.search.pageIndex = res.data.pageIndex
          } else {
            window.toast(res.message)
          }
        }).catch(err => {
          console.log(err)
          window.toast("查询失败")
        })
      }
    },
    created() {
      this.searchData.starttime = new Date().addDay(-30).format();
      this.searchData.endtime = new Date().format();
    },
    activated() {
    },
    components: {
      // tableData, datepicker
    }
  }
</script>
<style spcoed lang="scss">
  .deposit-info{
      .form-box {
      .row-group {
        padding: 14px 0 5px 0;
      }
      .inputbox {
        display: inline-block;
        margin: 5px 16px 5px 0;
      }
    }
}
</style>
