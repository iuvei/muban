<template>
  <div class="user-index">
    <account-top>头部内容</account-top>
    <account-menu>头部菜单</account-menu>
    <account-list>头部列表</account-list>
  </div>
</template>
<script>
  import accountTop from "./components/account-top"
  import accountMenu from "./components/account-menu"
  import accountList from "./components/account-list"
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        Deputy: 0
      };
    },
    components: {
      accountTop,
      accountMenu,
      accountList
    }
  };
</script>
<style lang="scss" scoped="">
  @import "~mobile/assets/scss/mixin.scss";
  .user-index {
    .tab-list{
      flex-wrap: wrap;
      @include  f(32px);
      text-align: center;
      .tab-item{
        width: 25%;
        padding-top: r(20);
      }
    }
    .iconfont{
      @include  f(128px);
    }
  }

  .icons {
    background-image: url(./user_icon.png);
    background-size:r(128);
    background-repeat: no-repeat;
    display: inline-block;
    width: r(128);;
    height:r(128);;
    margin-bottom: r(4);
  }

  /*普通用户管理中心*/
  .icons-store {
    background-position: 0 r(-74*2);
  }
  .icons-withdraw {
    background-position: 0 r(-298*2)
  }
  .icons-transfer {
    background-position: 0 r(-370*2);
  }
  .icons-record {
    background-position: 0 0;
  }

  .icons-tyj {
    background-position: 0 r(-520*2);
  }

  .icons-cunsong {
    background-position: 0 r(-595*2);
  }

  .icons-xima {
    background-position: 0 r(-670*2);
  }

  .icons-jyj {
    background-position: 0 r(-744*2);
  }

  .icons-update {
    background-position: 0 r(-818*2);
  }

  .icons-birthday {
    background-position: 0 r(-446*2);
  }

  .icons-friend {
    background-position: 0 r(-148*2);
  }

  .icons-tickets {
    background-position: 0 r(-222*2);
  }
</style>
