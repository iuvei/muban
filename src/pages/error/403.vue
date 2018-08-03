<template>
  <div class="error-404">
      <div class="fbbg bg403">
        <img src="./images/403.png">
      </div>
      <p class="des" style="font-size:80%!important;">{{ipDatas.country}}-{{ipDatas.city}}-{{ipDatas.query}}</p>
      <p class="des">尊敬的客户，很抱歉您所访问的页面无法连接，如您对此有任何疑问，可联系我们的客服中心。</p>
      <p class="des">The requested page could not be found.Should you have any enquiries regarding this matter.Please contact our customer service center.</p>
      <div class="btn">
        <a :href="SETTING.live800" target="_blank" class="b_btn j-no">在线客服</a>
      </div>
    </div>
</template>
<script>
  import {SETTING} from "@/assets/data"
  import {getIp} from '@/api/show'

  export default {
    name: "",
    data() {
      return {
        SETTING,
        ipDatas: {
        }  
      }
    },
    methods: {
      getIpData(){
        getIp().then(res=>{
          console.log(res)
          this.ipDatas=res
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    created(){
      this.getIpData()
    }
  }
</script>
<style lang="scss" scoped>
@import "style.scss";
</style>

