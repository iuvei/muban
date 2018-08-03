<template>
  <div class="show-agent-join">
    <div class="page_line_top">
      <div class="show-agent-nav">
        <div>
          <router-link :to="{name:'agentjoin_index'}">
            <span></span>首页
          </router-link>
          <router-link :to="{name:'agentjoin_system'}">
            <span></span>我们的代理制度
          </router-link>
          <router-link :to="{name:'agentjoin_question'}">
            <span></span>常见问题
          </router-link>
          <router-link :to="{name:'agentjoin_join'}">
            <span></span>申请加盟
          </router-link>
        </div>
      </div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
//      this.$emit('hide', ['nav', 'header'], false);
    },
    beforeDestroy() {
//      this.$emit('hide', ['nav', 'header'], true);
    },
    components: {}
  }
</script>
<style lang="scss">
  .show-agent-join {
    background: url("./images/agentjoin.jpg") center top no-repeat;
    background-color: #100603;
    padding-top: 331px;
    .container{
      width: 1200px;
      margin: 0 auto;
      display: block;
      position: relative;
    }
    .show-agent-nav {
      background: url("./images/rbd.png")  center  no-repeat;
      height: 51px;
      text-align: center;
      color: #ffff64;
      font-size: 17px;
      & > div {
        /*background: #1c0d03;*/
        /*padding: 0 10px;*/
        /*margin: 0 auto;*/
        margin-left: -16px;
      }
      a {
        height: 51px;
        line-height: 50px;
        width: 137px;
        display: inline-block;
        background: url("./images/nav.png") no-repeat;
        background-position: 0 -51px;
        margin: 0 1px;
        &:hover,&.active{
          color: #080301;
          background-position: 0 0;
        }
      }
    }
  }
</style>
