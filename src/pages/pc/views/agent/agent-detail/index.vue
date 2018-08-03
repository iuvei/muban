<template>
    <div class="mainAgentDiv">
        <menus></menus>
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
import menus from './components/menus'
export default {
  
    components: {
      menus
    }  
}
</script>

<style lang="scss" scoped>
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
            background: #353f8d;
            color: #fff;

          }
          .triangle-right{
            position: relative;
            right: -224px;
            top: -65px;
            width: 0;
            height: 0;
            border: 10px solid;
            border-color: transparent transparent transparent #353f8d;
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

