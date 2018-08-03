<template>
  <div class="agent-question-content" v-once>
    <span>Q1:为什么要加盟亚冠国际？</span>
    <p class="content-color"></p>
    <p class="content-p">
      网络博彩已经成为一个如日中兴的热门产业，本站凭借多年的博彩运营经验和先进的秒提技术，具有绝对的品牌优势。合作方式简单，无风险零投资，即可享受高达 50%佣金回报，如果您身边有对博彩感兴趣的朋友，充分利用身边的人脉及网络资源，可从被推荐会员处终身受益，月赚百万，您还在犹豫什么？
    </p>
    <span>Q2:如何加盟亚冠国际？</span>
    <p class="content-color"></p>
    <p class="content-p">
      点击“立即加盟”并填写真实完整的注册资料，认真阅读本站的相关规则条款，并同意确认“合作协议”，然后提交“申请”，审查通过后，您就可以正式成为本站的代理商成员之一，迈出您成功的第一步！
    </p>
    <span>Q3:佣金待遇如何？</span>
    <p class="content-color"></p>
    <p class="content-p">
      成为本站代理商是完全免费，无需任何资金投入，零风险高回报，每月坐享高达50%的佣金。
    </p>
    <span>Q4:如何查询我的会员投注记录及输赢情况？</span>
    <p class="content-color"></p>
    <p class="content-p">
      合作伙伴登入账号后 点击“代理中心—会员账务 ”就可以查询到下线会员的游戏平台输赢情况 。
    </p>
    <span>Q5:代理佣金是如何计算？</span>
    <p class="content-color"></p>
    <p class="content-p">合作伙伴佣金=(PT、NT、DT、MG等老虎机平台输赢x85%）x佣金比例；</p>
    <p class="content-p">举例：假如你某月满足至少三个有效活跃会员，老虎机平台输赢值5000，得到返水200，优惠100；佣金计算为：（5000×85%-200-100）x30%=1185</p>
    <span>Q6:我将如何收取佣金？</span>
    <p class="content-color"></p>
    <p class="content-p">
    根据合作协议佣金主要是采用日结方式，达到要求的合营商可直接申请提款。
    </p>
    <span>Q7:我想问的问题上面都没有怎么办？</span>
    <p class="content-color"></p>
    <p class="content-p">
    马上联络24小时客服，给您最专业的1：1解答。
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
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
  .agent-question-content{
    text-align: center;
    padding: 0 r(30);
    @include f(24px);
    line-height: r(50);
    color: #727272;
    span{
      @include f(30px);
      color: #303030;
      // border-bottom: 1px solid #c3c3c3;
      margin: r(20) auto;
      display: block;
    }
    .content-color{
      // background:#c3c3c3;
      border-color: #c3c3c3;
      border-width: 1.5px 3px;
      border-style: solid;
      width: 8%;
      margin: -5px auto 5px;
    }
    .content-p{
      text-align: justify;
      @include f(24px);
    }
  }
  .agent-question {
    padding:0 r(30);
    @include f(28px);
    line-height: 1.3;
    table {
      width: 100%;
      @include f(26px);
      text-align: center;
      td,th{
        border: 1px solid $main-bg;
        line-height:2;
      }
    }
    p{
      line-height: 1.3;
      @include f(24px)
    }
    h3{
      margin: 1em 0;
      color: $cl1;
    }
  }
</style>
