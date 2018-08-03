<template>
  <div class="agent-contact-content">
    <p class="qq"><i class="iconyg yg-weixin"></i><span>{{SETTING.qqAgent}}</span></p>
    <p class="qq"><i class="iconyg yg-weixin"></i><span>{{SETTING.wechatAgent}}</span></p>
    <p class="qq"><i class="iconyg yg-weixin"></i><span>{{SETTING.skypeAgent}}</span></p>
    <!-- <h3>QQ联系：</h3>
    <p>{{SETTING.qqAgent}}</p>

    <h3>微信联系：</h3>
    <p>{{SETTING.wechatAgent}}</p>
    <h3>Skype联系：</h3>
    <p> {{SETTING.skypeAgent}}</p> -->

  </div>
</template>
<script>
  import {SETTING} from "@/assets/data"

  export default {
    data() {
      return {SETTING};
    },
    props: {},
    methods: {},
    computed: {},
    created() {
    },
    components: {}
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .agent-contact-content{
    padding: r(30);
    margin: r(30) auto;
    width: 96%;
    background: url("./bg1.png") no-repeat ;
    background-size: 100% 100%;
    min-height: 25.9vh;
    .qq{
      // position: absolute;
      // left: 40vw;
      // top: 43.5vh;
      // color: #fff;
      color: #fff;
      @include f(44px);
      line-height: r(110);
      padding-left: 27%;
      span{
        padding-left: 5%;
      }
      .iconyg{
        vertical-align: top;
      }
    }
    .wx{
      position: absolute;
      left: 40vw;
      top: 51.2vh;
      color: #fff;
    }
    .skype{
      position: absolute;
      left: 40vw;
      top: 58.9vh;
      color: #fff;
    }
  }
  .agent-contact {
    padding: 0 r(30);
    @include f(24px);
    line-height: 1.4;
    h3 {
      margin: 1em 0;
      color: $cl1;
      @include  f(32px)
    }
    p {
      line-height: 2;
      @include f(28px)
    }
  }
</style>
