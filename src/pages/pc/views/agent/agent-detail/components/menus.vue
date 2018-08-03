<template>
  <div class="sidebar">
    <div class="sidenav">
      <router-link class="sidenav1-item" v-for="item in Menus" :to="{name:item.to}" :key="item.name">
        <div class="sidenav1-item-dev">
          <div class="iconyg" :class="item.ico"></div><br>
          <div class="side-text">{{item.name}}</div>
        </div>
        <div class="triangle-right"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        Menus:[{
          to:'agent_setting',
          name:'个人资料',
          ico:'yg-credentials_icon'
        },{
          to:'agent_banks',
          name:'银行卡管理',
          ico:'yg-iconyinhangqiaguanli'
        },{
          to:'agent_password',
          name:'修改密码',
          ico:'yg-mima'
        },{
          to:'agent_payword',
          name:'修改支付码',
          ico:'yg-zhifu'
        }]
      };
    },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters(["userData","unread","isUser"]),
    },
    created() {}
  };

</script>
<style lang="scss" scoped="">
  .sidebar {
    width: 225px;
    min-height: 800px;
    position: relative;
    z-index: 10;
    text-align: center;
    // background: #f2f2f2;
    .userbox {
      width: 100%;
      text-align: center;
    }
    .sidenav1 {
      font-weight: normal;
      position: relative;
      background: #fff;
    }
    .sidenav {
      font-weight: normal;
      position: relative;
      .sidenav1-item{
        text-align: center;
        .icobjh {
          font-size: 20px;
          vertical-align: middle;
        }
        .sidenav1-item-dev {
          text-align: center;
          border: 1px solid #ccc;
          padding: 15px 10px;
          border-radius: 5px;
          font-size: 1.1rem;
          background: #fff;
          color: #969696;
          margin-bottom: 14px;
        }
        &.active {
          .sidenav1-item-dev{
            background: #ed7e12;
            color: #fff;

          }
          .triangle-right{
            position: relative;
            right: -224px;
            top: -65px;
            width: 0;
            height: 0;
            border: 10px solid;
            border-color: transparent transparent transparent #ed7e12;
          }
        }
      }
    }
    .menu-grid {
      .m-g-item {
        display: block;
        padding: 20px 10px;
        border: solid 1px #eee;
        font-size: 14px;
        border-bottom: none;
        color: #343434;
        .icobjh {
          margin-right: 10px;
          font-size: 24px;
          vertical-align: middle;
        }
        &:hover,
        &.active {
          background: #eee;
        }
        &:last-child {
          border-bottom: solid 1px #eee;
        }
      }
    }
  }

</style>
