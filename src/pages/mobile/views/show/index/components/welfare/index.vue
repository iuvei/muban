<template>
    <div class="main">
        <router-link class="welfareBox" v-for="(item,i) in allData.slice(0,2)" :key="i" :to="{name:'preferential'}">
            <img v-lazy="item.activityImageUrl" :alt="item.activitySummary" :title="item.activitySummary">
        </router-link>
    </div>
</template>
<script>
  import {promos} from '@/controls/shows/promos'
  export default {
    mixins:[promos],
    created(){
      this.getPromos('mobile').then(res=>{
        // 设置菜单
        this.$bus.$emit('setProMenu',res.data.types)
      }).catch(err=>{
        window.toast(err.message)
      })
    }
}
</script>
<style lang="scss" scoped>
@import "~mobile/assets/scss/mixin.scss";

.main{
    width: 100%;
    margin: r(20) auto;
    display: flex;
    background-color: $main-cl;
    .welfareBox{
        width: 50%;
        border: 1px solid #e4e4e4;
        img{
            width: 100%;
        }
    }
}
</style>
