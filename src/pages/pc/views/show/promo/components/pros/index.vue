<template>
  <div class="promotion">
    <ul>
      <li v-for="(item,i) in  allData" :key="item.id"  v-if="!filtType || item.type == filtType">
        <img v-lazy="item.activityImageUrl"  :alt="item.activitySummary" :title="item.activitySummary" :src="item.activityImageUrl">
        <p><a href="javascript:void(0);" @click="itemClk(item)">点击查看<span>&gt;</span></a></p>
      </li>
    </ul>
  </div>
</template>
<script>
  import {promos} from '@/controls/shows/promos'
  import {queryLatestPreferential} from '@/api/show'
  export default {
    name: "promos-c",
    mixins:[promos],
    data() {
      return {
        cur: {},
        show: false,
        filter: "",
        myData: {
          types: [],
          records: []
        }
      }
    },
    methods: {
      itemClk(item, i) {
        this.readPros(item.id).then(res=>{
          console.log(res)
        this.$bus.$emit('showProDetail',res)

        }).catch(err=>{
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    created(){
      // 筛选事件监听
      this.$bus.$on('filtPros',eventData=>{
        this.filtType=eventData
      })
      this.getPromos('pc').then(res=>{
        // 设置菜单
        this.$bus.$emit('setProMenu',res.data.types)
      }).catch(err=>{
        window.toast(err.message)
      })
    }
  }

</script>
<style lang="scss" scoped>
.promotion{
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      li{
        float: left;
        margin: 20px 0 20px 35px;
        width: 334px;
        border: 1px solid #e6e6e6;

        img{
          display: block;
          width: 334px;
          margin-top: -1px;
          margin-left: -1px;
        }

        p{
          padding: 10px 0;
          text-align: center;

          a {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 24px;
            border-radius: 14px;
            background: #ed7e12;
            color: #fff;

            span{
              font-family: "宋体";
              padding-left: 5px;
            }
          }
        }
      }


      &::after{
        content: '';
        clear: both;
        display: block;
      }
    }
  }
  

</style>
