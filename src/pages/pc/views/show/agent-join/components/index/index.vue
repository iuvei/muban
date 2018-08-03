<template>
  <div class="show-agent-index">
    <div class="container">
      <div class="step">
        <div>
          <img src="./images/step_03.png" alt="">
          <p>10秒快速填写代理申请表，一旦申请成功，您将即刻成为最有吸引力的合营计划的一份子。马上加入吧！</p>
          <router-link tag="div" :to="{name:'agentjoin_join'}" class="btn">申  请</router-link>
        </div>
        <div>
          <img src="./images/step_05.png" alt="">
          <p>除了运用您自身的资源外，我们也提供多种市场推广工具、资源与您一起开拓您的代理事业，让您如虎添翼！</p>
          <router-link  tag="div" :to="{name:'agentjoin_join'}" class="btn">推  广</router-link>
        </div>
        <div>
          <img src="./images/step_07.png" alt="">
          <p>您的佣金来自每位您所推荐的会员。会员越多、投注越大，您获得的佣金也就越多。</p>
          <router-link  tag="div" :to="{name:'agentjoin_join'}" class="btn">提  现</router-link>
        </div>
      </div>
    </div>
    <div class="top-txt-bg">

    </div>
    <div class="agent-tips">
      <div class="container">
        <ul>
          <li>赚取高达50%的代理佣金</li>
          <li>从被推荐会员处终身受益</li>
          <li>多元化在线老虎机平台</li>
          <li>专业的市场发展战略、丰富的推广</li>
          <li>全面清晰的佣金报表</li>
          <li>成为在线老虎机新生代的一员</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    activated() {
    },
    components: {}
  }
</script>
<style lang="scss">
  .show-agent-index {
    .step {
      padding-top: 76px;
      height: 555px;
      text-align: justify;
      > div {
        text-align: center;
        display: inline-block;
        vertical-align: top;
        width: 242px;
        margin-right: 150px;;
        &:last-child {
          margin-right: 0;
        }
        p {
          height: 153px;
          color: #eda927;
          text-align: left;
          line-height: 29px;
          font-size: 14px;
          padding-top: 33px;
        }
        .btn {
          height: 33px;
          text-align: center;
          margin: 0 auto;
          width: 101px;
          line-height: 33px;
          color: #040404;
          font-size: 14px;
          border-radius: 10px;
          cursor: pointer;
          background: url("./images/game-btn.png") center/100% 100%;
        }
      }
    }

    .top-txt-bg{
      background: url("./images/ttiel.png") center no-repeat;
      height: 75px;
    }
    .agent-tips {
      .container {
        background: url("./images/login.png") 600px bottom no-repeat;
        padding-left: 200px;
        padding-top: 90px;
        height: 440px;
        margin-bottom: 20px;
      }
      li {
        background: url("./images/icon.png") left center no-repeat;
        padding-left: 30px;
        line-height: 21px;
        font-size: 16px;
        /*background:linear-gradient(to right,#8c5522,#da8113 20%,#ffff7b 33%,#fff000 60%,#ffe400 70%,#c37417);*/
        /*background: -webkit-gradient(linear,left top,right top, color-stop(20%, #8c5522), color-stop(33%, #da8113), color-stop(60%, #ffff7b), color-stop(60%, #fff000), color-stop(70%, #ffe400), color-stop(70%, #c37417));*/
        /*-webkit-background-clip: text;*/
        /*-webkit-text-fill-color: transparent;*/
        margin-bottom: 24px;
        color: #c37417;
      }
    }
  }
</style>
