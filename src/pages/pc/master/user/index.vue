<template>
  <div class="user-master">
    <main-master>
      <div class="user-page">
        <div class="user-top">
          <info>
            <!-- 用户信息模块 -->
          </info>
          <games>
            <!-- 游戏账户余额查询 -->
          </games>
        </div>
        <div class="user-content content">
          <v-menu>
            <!-- 左边的菜单内容 -->
          </v-menu>
          <div class="u-c-shows">
            <router-view>
              <!-- 路由内容区域 -->
            </router-view>
          </div>
        </div>
      </div>
    </main-master>
  </div>
</template>
<script>
  import {
    mainMaster
  } from 'pc/master/show';
  import info from './components/info'
  import games from './components/games'
  import userMenus from './components/user-menus'
  export default {
    name: "userMaster",
    data() {
      return {
        myData: []
      }
    },
    components: {
      info,
      games,
      userMenus
    }
  }

</script>
<style spcoed lang="scss">
  .user-master {
    .user-page {
      padding: 40px 0; // background:#f2f2f2;
      background-image: url('./images/bg.png');
      background-repeat: no-repeat;
      background-position: bottom;
      .user-content {
        padding: 20px 0;
        background: transparent;
        min-height: 800px;
        display: flex;
        justify-content: space-between;
      }
      .agent-content {
        // padding:20px;
        // background:#f2f2f2;
        min-height: 800px;
        display: flex;
        justify-content: space-between;
        .u-c-shows {
          width: 100%;
        }
      }
      .u-c-shows {
        width: 930px;
        .u-c-menu {
          display: flex;
          justify-content: space-between;
          .u-c-router {
            border: solid 2px #c7e9fd;
            border-bottom: none !important;
            padding: 0 60px;
            font-size: 14px;
            color: #343434;
            position: relative;
            cursor: pointer;
            &:before {
              content: '';
              width: 100%;
              background: none;
              height: 5px;
              position: absolute;
              bottom: -4px;
              left: 0;
            }
            &:hover,
            &.active {
              border: solid 2px #25b79e;
              &:before {
                background: #fff;
              }
            }
            .icobjh {
              color: #25b79e;
              margin-right: 10px;
              font-size: 26px;
              vertical-align: middle;
              height: 40px;
              line-height: 40px;
            }
          }
        }
        .u-c-box {
          min-height: 700px;
          border: solid 1px #ccc;
          padding: 20px;
          background: #ffffff;
        }
      }
    }
  }

</style>
