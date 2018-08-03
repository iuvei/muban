<template>
  <div class="mainAgentDiv">
    <div class="sidebar">
      <div class="sidenav">
        <router-link class="sidenav1-item" v-for="item in Menus" :to="{name:item.to}" :key="item.name">
          <div class="sidenav1-item-dev">
            <div class="icobjh bjh-Management"></div><br>
            <div class="side-text">{{item.name}}</div>
          </div>
          <div class="triangle-right"></div>
        </router-link>
      </div>
    </div>
    <div class="user-page">
        <!-- 需要缓存的页面 -->
        <div class="u-c-shows">
          <keep-alive v-if="!$route.meta.noCache">
            <router-view >
              <!-- 页面内容可视部分 -->
            </router-view>
          </keep-alive>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        Menus:[{
          to:'agent_deposit',
          name:'会员存款',
          ico:'bjh-yewubaobiao'
        },{
          to:'agent_withdraw',
          name:'会员提款',
          ico:'bjh-yewubaobiao'
        },{
          to:'agent_feedback',
          name:'会员返水',
          ico:'bjh-yewubaobiao'
        },{
          to:'agent_promo',
          name:'会员优惠',
          ico:'bjh-yewubaobiao'
        },{
          to:'agent_winlose',
          name:'会员输赢',
          ico:'bjh-yewubaobiao'
        }]
      }
    }
  }
</script>
<style lang='scss' scoped>
.mainAgentDiv{
  width: 100%;
  padding: 20px;
}
  .u-c-router{
    padding:0 30px!important;
  }
.user-page{
  padding: 40px 0;
  background: #fff;
  border: 1px solid #ccc;
  // display: inline-block;
  float:right;
}
.u-c-shows{
  padding: 0 20px;
  width: 930px!important;
}
  .sidebar {
    width: 225px;
    min-height: 800px;
    // position: relative;
    z-index: 10;
    // display: inline-block;
    text-align: center;
    float: left;
    clear: both;
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
