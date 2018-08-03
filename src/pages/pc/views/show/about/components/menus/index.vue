<template>
  <div class="tab-menu">
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab1'}">
      <i class="i1"></i>关于我们</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab2'}">
      <i class="i7"></i>专业团队</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab3'}">
      <i class="i3"></i>利益保障</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab4'}">
      <i class="i4"></i>公司宗旨</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab5'}">
      <i class="i5"></i>客户至上</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab6'}">
      <i class="i6"></i>公司责任</router-link>
    <router-link class="tab-menu-item" :to="{path:'/aboutus/aboutustab7'}">
      <i class="i2"></i>用户协议</router-link>
  </div>
</template>
<script>
  import {
    SETTING
  } from "@/assets/data"
  export default {
    data() {
      return {
        SETTING,
      };
    }
  }

</script>
<style lang="scss" scoped>
.tab-menu {
      height: 116px;
      text-align: center;
      .tab-menu-item {
        display: inline-block;
        width: 80px;
        height: 80px;
        padding-top: 45px;
        border: 1px solid #cfcfcf;
        border-radius: 40px;
        margin: 15px 20px 0;
        box-sizing: border-box;
        font-size: 14px;
        color: #333333;
        cursor: pointer;
        position: relative;
        &.active, &:hover {
          border: 0;
          background: -prefix-linear-zgradient(top, #ffb600, #ed7f12);
          background: linear-gradient(to bottom, #ffb600, #ed7f12);
          color: #fff;
          i {
            background-position: center -24px !important;
          }
          i.i6{
            background-position: center -25px !important;
          }
        }
        i {
          position: absolute;
          width: 24px;
          height: 24px;
          left: 28px;
          top: 13px;
          &.i1 {
            background: url(./images/a1.png) no-repeat center top;
          }
          &.i2 {
            background: url(./images/a2.png) no-repeat center top;
          }
          &.i3 {
            background: url(./images/a3.png) no-repeat center top;
          }
          &.i4 {
            background: url(./images/a4.png) no-repeat center top;
          }
          &.i5 {
            background: url(./images/a5.png) no-repeat center top;
            height: 25px;
          }
          &.i6 {
            background: url(./images/a6.png) no-repeat center top;
          }
          &.i7 {
            background: url(./images/a7.png) no-repeat center top;
          }
        }
      }
    }
</style>
