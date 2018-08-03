<template>
  <table-data :thead="thead" :data="data" @search="search">
    <tr v-for="(item,i) in data.pageContents">
      <td>{{(data.pageNumber - 1) * data.size + i + 1}}</td>
      <td>{{item.loginname}}</td>
      <td>{{item.platform}}</td>
      <td>{{item.bettotal}}</td>
      <td>{{item.amount }}</td>
      <td>{{item.tempCreateTime | Date}}</td>
    </tr>
  </table-data>
</template>
<script>
  import {searchagprofitData} from "@/api/agent";
  import tableData from "mobile/components/table-data"
  export default {
    name: "",
    data() {
      return {
        thead: ['序', '会员帐号', '平台', '投注总额', '输赢值', '时间'],
        data: {pageContents: []}
      }
    },
    props:["searchData"],
    methods: {
      search(index) {
        if(!isNaN(index)) {
          this.searchData.pageIndex = index
        }
        this.data.pageContents = [];
        searchagprofitData(this.searchData).then(res => {
          console.log(this.success)
          if (res.success) {
            this.data = res.data;
          }
          else {
            this.data.pageContents = [];
            window.toast(res.message)
          }
        }).catch(err => {
          this.data.pageContents = [];
          window.toast("查询失败")
        })
      }
    },
    components: {
      tableData
    }
  }
</script>
<style spcoed>

</style>
