<template>
  <div class="u-c-shows">
    <div class="u-c-box">
      <div class="user-discount">
        <div class="discount-content form-rowbox memberlist">
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

            <el-button :loading="loading" type="primary" icon="el-icon-search" @click="search(1)">查询
            </el-button>

          </div>
          <!-- 表格数据显示区域 -->
          <el-table :data="pageContents" style="width: 100%" v-loading="loading">

            <el-table-column label='序号' type="index"></el-table-column>
            <el-table-column property="loginname" label="会员帐号"></el-table-column>
            <el-table-column property="flag" label="状态"></el-table-column>
            <el-table-column property="credit" label="账户额度"></el-table-column>
            <el-table-column property="tempCreateTime" label="开户日期"></el-table-column>
            <el-table-column property="howToKnow" label="来源网址"></el-table-column>
          </el-table>
          <!-- 表格分页 -->
          <div v-if="pageContents.length>0">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="searchData.pageIndex"
              :page-sizes="[10, 20, 50, 100]" :page-size="searchData.size" layout="total, sizes, prev, pager, next" :total="searchData.totalRecords">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--div class="agent-content member-list">
    <div class="style_f">
      <div class="style_i active">会员列表</div>
    </div>
    <div class="form-box data-wrap">
      <div class="row-group cfx">
        <div class="inputbox">
          <label>开始时间：</label>
          <datepicker class="input" v-model="searchData.starttime" style="display: inline-block; vertical-align: top;">
            <i class="icons"></i></datepicker>
        </div>
        <div class="inputbox">
          <label>结束时间：</label>
          <datepicker class="input" v-model="searchData.endtime" style="display: inline-block; vertical-align: top;">
            <i class="icons"></i></datepicker>
        </div>
        <a href="javascript:;" @click="search" class="btn">查询</a>
      </div>
      <div class="data-info">
        <table-data :thead="thead" :data="data" @search="search">
          <tr v-for="(item,i) in data.pageContents||[]" :key="i">
            <td>{{(data.pageNumber - 1) * data.size + i + 1}}</td>
            <td>{{item.loginname}}</td>
            <td>{{item.flag === 0 ? '启用' : '关闭'}}</td>
            <td>{{item.credit}}</td>
            <td>{{item.tempCreateTime | Date}}</td>
            <td>{{item.howToKnow || '未知'}}</td>
          </tr>
        </table-data>
      </div>
    </div>
  </div-->
</template>

<script>
  import {memberList} from '@/controls/agent/memberList'
  export default {
    mixins:[memberList],
    data() {
      return {
        loading: false,
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
        }
      }
    },
    methods: {
      search(index) {
        if (!isNaN(index)) {
          this.searchData.pageIndex = index
        }
        this.loading = true
        console.log('search')
        this.getDatas(this.searchData).then(res=>{
          window.toast(res.message)
          this.loading=false
        }).catch(err=>{
          console.log(err)
          this.loading=false
          window.toast(err.message)
        })
      },
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
    },
    created() {
      this.searchData.starttime = new Date().addDay(-30).format()
      this.searchData.endtime = new Date().format()
    },
    components: {}
  }

</script>
<style lang="scss" scoped>
  .u-c-shows{
  width: 100%;
}
  .memberlist {
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
