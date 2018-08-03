<template>
  <div class="agent-advantage-content">
    <div v-for="item in items" :key="item.title">
      <span>{{item.title}}</span>
      <p class="content-color"></p>
      <p class="content-p">{{item.content}}</p>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              items:[
                {title:'平台介绍',content:'网络菠菜已经成为一个如日中兴的热门产业,本站凭借多年你的博彩运营经验和先进的秒提技术,具有绝对的品牌优势.合作方式简单,无风险零投资,即可享受高达50%佣金回报,如果您身边有对博彩感兴趣的朋友,充分利用身边的人脉及网络资源,可从被推荐会员处终身受益,月赚百万,您还在犹豫什么?'},
                {title:'企业文化',content:'点击“立即加盟”并填写真实完整的注册资料,认真阅读本站的相关规则条款,并同意确认“合作协议”,然后提交“申请”,审查通过后,您就可以正式成为本站的代理商成员之一,迈出您成功的第一步!'},
                {title:'立即赚钱',content:'成为本站代理商是完全免费,无需任何资金投入,零风险高回报,每月坐享高达50%的佣金.'},
              ]
            };
        },
        props:{},
        methods:{},
        computed:{},
        created(){
        },
        components:{}
    };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .agent-advantage-content{
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
  .agent-advantage{
    padding:0 r(30);
    @include f(24px);
    line-height: 1.4;
    h3{
      margin: 1em 0;
      color: $cl1;
      @include f(32px)
    }
    p{
      text-indent: 2em;
      margin: 1em 0;
    };
  }
</style>
