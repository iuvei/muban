<template>
  <div class="u-c-shows" v-if="isUser">
    <div class="u-c-box">
      <div class="wallet-menus">
          <router-link  :to="{name: 'user_datum'}"><div class="u-c-router">个人中心</div></router-link>
          <router-link  :to="{name: 'user_banks'}"><div class="u-c-router">银行卡管理</div></router-link>
          <router-link  :to="{name: 'user_password'}"><div class="u-c-router">登录密码</div></router-link>
          <router-link  :to="{name: 'user_payword'}"><div class="u-c-router">支付密码</div></router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
  <div v-else>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    methods: {
    },
    computed: {
      ...mapGetters(["userData","isUser","unread"]),
    },
    created() {
    },
  };
</script>
<style lang="scss">
.u-c-shows{
    .wallet-menus{
        width: 100%;
        // padding: 0 3%;
        margin-bottom: 20px;
        .u-c-router{
            padding: 6px 20px;
            font-size: 16px;
            width: 129px;
            height: 40px;
            line-height: 30px;
            color: #666;
            margin-right: 15px;
            text-align: center;
            background: #ebebeb;
            display: inline-block;
        }
        .active{
            .u-c-router{
                background: #ed7e12;
                color: #fff;
            }
        }
    }
}
</style>
