<template>
  <div class="flex menu-list-box">
    <router-link class="flex menu-list-item" to="experiencegold">
      <span class="menu-ico iconfont icon-renminbi"></span>
      <span class="menu-text">体验金</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="savesend">
      <span class="menu-ico iconyg  yg-youhui"></span>
      <span class="menu-text">存送优惠</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="washcode">
      <span class="menu-ico iconyg  yg-poker-spade"></span>
      <span class="menu-text">洗码</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="helpgold">
      <span class="menu-ico iconyg  yg-tongqian"></span>
      <span class="menu-text">救援金</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="vipgold">
      <span class="menu-ico iconyg  yg-complaint"></span>
      <span class="menu-text">自助晋级</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="birthdaygold">
      <span class="menu-ico iconyg  yg-qianbao"></span>
      <span class="menu-text">生日礼金</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="recommendfirend">
      <span class="menu-ico iconfont  icon-zan"></span>
      <span class="menu-text">推荐好友</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="discountcode">
      <span class="menu-ico iconyg  yg-youhuiquan"></span>
      <span class="menu-text">存送优惠券</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
    <router-link class="flex menu-list-item" to="redenvelope">
      <span class="menu-ico iconyg  yg-youhuiquan2"></span>
      <span class="menu-text">红包优惠券</span>
      <span class="iconyg yg-jiantou"></span>
    </router-link>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {

      };
    },
    props: {
      value: {}
    },
    watch: {

    },
    methods: {

    },
    created() {},
    computed: {}
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .menu-list-box {
    background: #fff;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    .menu-list-item {
      border-bottom: 1px solid #e4e4e4;
      @include f(30px);
      justify-content: space-between;
      align-items: center;
      text-align: center;
      width: 100%;
      height: r(96);
      .menu-ico {
        color: $iconcl;
        @include f(46px);
        flex: 1;
      }
      .menu-text {
        flex: 5;
        text-align: left;
      }
      .yg-jiantou {
        color: #333;
        @include f(40px);
        flex: 1;
      }
    }
  }

</style>
