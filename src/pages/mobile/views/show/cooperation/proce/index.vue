<template>
  <div class="agent-proce-content m-content">
    <span>佣金比例：</span>
    <p class="content-color"></p>
    <table class="table">
      <tbody>
      <tr>
        <th>当月利润</th>
        <th>活跃会员</th>
        <th>分红比例</th>
      </tr>
      <tr>
        <td>无要求</td>
        <td>≥3</td>
        <td>35%</td>
      </tr>
      <tr>
        <td>≥200000</td>
        <td>≥10</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>≥500000</td>
        <td>≥30</td>
        <td>45%</td>
      </tr>
      <tr>
        <td>≥1000000</td>
        <td>≥50</td>
        <td>50%</td>
      </tr>
      </tbody>
    </table>
    <span>佣金计算方式：</span>
    <p class="content-color"></p>
    <p class="content-p">老虎机佣金：老虎机平台输赢x85%（平台费）-返水-优惠</p>
    <p class="content-p">其他类佣金：真人/体育类平台输赢x90%（平台费）-返水-优惠</p>
    <p class="content-p">*平台费用：我们需要上缴给平台商的租赁费用，其他类10%，老虎机类15%。</p>
    <p class="content-p">*优惠及返水：亚冠国际官方赠送给代理下线玩家所申请的福利。</p>
    <span>日结方式：</span>
    <p class="content-color"></p>
    <p class="content-p">所有老虎机代理终身享受日结佣金</p>
    <p class="content-p">其他类：累计佣金30万以上，每月满足活跃会员要求，可申请晋级VIP代理，享有日结佣金</p>
    <p class="content-p">老虎机佣金每日18：00后佣金会自动派发到代理账号（非工作日则次日结算）。</p>
    <p class="content-p">每月1-5号为其他类佣金提款时间，期间佣金不更新，将于6号统一结算。</p>
    <p class="content-p">代理若连续两个月无新增1位活跃会员，将取消其日结模式（享受月结），达到活跃人数要求后即可恢复日结。</p>
    <span>提款规则：</span>
    <p class="content-color"></p>
    <p class="content-p">老虎机类佣金≥100元，且活跃玩家≥3人，可随时提款。</p>
    <p class="content-p">其他类佣金≥100元，且活跃玩家≥3人，每月1～5号提款。</p>
    <span>佣金累计：</span>
    <p class="content-color"></p>
    <p class="content-p">佣金无论正负都会一直累计。</p>
    <span>注意事项：</span>
    <p class="content-color"></p>
    <p class="content-p">1、严禁下线玩家与代理同IP和同姓名，一经查处，同姓名玩家将会扣除本月的所有盈利／盈亏。</p>
    <p class="content-p">2、任何使用不诚信的方法骗取佣金，我方将永久冻结代理账户，佣金不予发放。</p>
    <p class="content-p">3、如果代理在注册过程中，胡乱填写注册信息，导致无法出款，我方概不负责。</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
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
  .agent-proce-content{
    text-align: center;
    padding: 0 r(30);
    @include f(24px);
    line-height: r(50);
    color: #727272;
    table {
      width: 100%;
      @include f(24px);
      text-align: center;
      th{
        background: #f28a57;
        border:1px solid #944b23;
        color: #fff;
        padding: r(10) 0;
      }
      td{
        border: 1px solid #606060;
        color:#727272;
        line-height: 2;
        padding: r(10) 0;
      }
    }
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
  .agent-proce {
    padding: 0 r(30);
    @include f(28px);
    line-height: 1.3;
    table {
      width: 100%;
      @include f(26px);
      text-align: center;
      td, th {
        border: 1px solid $main-bg;
        line-height: 2;
      }
    }
    p {
      line-height: 1.3;
      @include f(24px)
    }
    h3 {
      margin: 1em 0;
      color: $cl1;
    }
  }
</style>
