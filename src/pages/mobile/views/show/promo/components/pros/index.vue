<template>
    <div class="promotions_content page_content_wrap ">
      <a class="promotion_item " v-for="item in allData" @click="itemClk(item)" :key="item.id" v-if="!filtType || item.type == filtType">
        <img v-lazy="item.activityImageUrl" :alt="item.activitySummary" :title="item.activitySummary">
        <!-- <div class="title_wrap"><h2>{{item.activityTitle}}</h2>
          <div class="promotion_time icon_with_text"><span class="iconfont icon-time"></span><span class="text text_red">{{item.typeName}}</span>
          </div>
        </div> -->
      </a>
    </div>
</template>
<script>
  import {promos} from '@/controls/shows/promos'
  export default {
    name: "promos-c",
    mixins:[promos],
    data() {
      return {

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
  .promotion_item {
    display: block;
    margin: r(15);
    // padding: r(15) r(15) 0 r(15);
    background: #fff;
    img {
      display: block;
      width: 100%;
    }
    .title_wrap {
      position: relative;
      padding: r(10*2);
      background: #fff;
      h2 {
        // @include f(20px);
        @include f(26px);
        color: #3d3d3d;
        width: 80%;
        overflow: hidden;
      }
      .promotion_time {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: r(10*2);
        .iconfont {
          @include f(32px);
          color: $cl1;
          margin-right: 6px;
        }
        .text {
          vertical-align: middle;
        }
      }
    }
    .promotion_content_main {
      background: #fff;
      display: none;
      // padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
      overflow: hidden;
    }
    .promotion_toggle {
      background: #fff;
      text-align: center;
      .iconfont {
        width: 100%;
      }
    }
  }
</style>
