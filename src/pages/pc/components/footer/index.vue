<template>
  <!--底部内容-->
  <div class="footer">
    <div class="footer-website">
      <div class="content">
        <div class="website-link">
          <router-link :to="{path:'/aboutus/home/aboutustab1'}" class="bdnone">关于我们</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab2'}">专业团队</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab3'}">利益保障</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab4'}">公司宗旨</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab5'}">客户至上</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab6'}">公司责任</router-link>
          <router-link :to="{path:'/aboutus/home/aboutustab7'}">用户协议</router-link>
        </div>
      </div>
    </div>
    <div class="footer-btm">
      <div class="content">
        <div class="friend-link">
          <div v-for="(item,i) in items" :key="i">
            <a href="javascript:void(0);" class="f-l-item" :class="item.className"></a>
          </div>
        </div>
        <div class="footer-tips">
            <div class="left">
                Copyright Reserved 2017 YG.All Rights Reserved
            </div>
            <div class="right">
                <span>推荐浏览器</span>
                <a href="javascript:;" class="c1"></a>
                <a href="javascript:;" class="c2"></a>
                <a href="javascript:;" class="c3"></a>
                <a href="javascript:;" class="c4"></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items:[
          {className:'DT'},
          {className:'AG'},
          {className:'PT'},
          {className:'BBIN'},
          {className:'MG'},
          {className:'SUNBET'},
          {className:'PNG'},
          {className:'OG'},
          {className:'QT'},
          {className:'CQ9'},
          {className:'VR'},
          {className:'QP761'},
          {className:'TGP'},
          {className:'PIN'},
          {className:'SHABA'},
          {className:'NT'},
          {className:'KYQP'}
        ]
      };
    },
    props: {},
    methods: {},
    computed: {},
    created() {},
    components: {}
  };

</script>
<style lang="scss">
  .footer {
    padding-top:20px;
    padding-bottom:20px;
    background:#141415;
    .footer-website{
      border-bottom:solid 2px #2c2c2c;

    }
    .website-link {
      display:flex;
      color: #fff;
      justify-content: space-between;
      padding:30px 0;
      a {
        font-size:14px;
        justify-content: center;
        text-align:center;
        display:flex;
        flex:1;
        border-left: #5e5e5e solid 1px;
        &.bdnone {
          border: none
        }
      }
      img {
        margin-top: -35px;
      }
    }

    .footer-btm {
      height: 140px;
    }
    .friend-link {
      line-height: 87px;
      display:flex;
      margin:24px 0;
      padding: 0 31px 0 55px;
      justify-content: space-between;
      div{
        display: inline-block;
        width: 30px;
        margin-right: 24px;
      }
      .f-l-item {
        // flex:1;
        // display:inline-block;
        // height:36px;
        // width:132px;
        // border-radius:6px;
        // transition:all 0.4s;
        // background-color:#2c2c2c;
        // background-repeat:no-repeat;
        // background-size: cover;
        // background-position:center bottom;
        display: inline-block;
        flex: 1;
        width: 30px;
        height:30px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &.DT{
          background-image:url(./images/footlogo-dt.png);
        }
        &.AG{
          background-image:url(./images/footlogo-ag.png);
        }
        &.PT{
          background-image:url(./images/footlogo-pt.png);
        }
        &.BBIN{
          background-image:url(./images/footlogo-bbin.png);
          width: 50px;
        }
        &.MG{
          background-image:url(./images/footlogo-mg.png);
        }
        &.SUNBET{
          background-image:url(./images/footlogo-sunbet.png);
          width: 45px;
        }
        &.PNG{
          background-image:url(./images/footlogo-png.png);
        }
        &.OG{
          background-image:url(./images/footlogo-og.png);
        }
        &.QT{
          background-image:url(./images/footlogo-qt.png);
        }
        &.CQ9{
          background-image:url(./images/footlogo-cq9.png);
          width: 50px;
        }
        &.VR{
          background-image:url(./images/footlogo-vr.png);
        }
        &.QP761{
          background-image:url(./images/footlogo-761.png);
        }
        &.TGP{
          background-image:url(./images/footlogo-tgp.png);
        }
        &.PIN{
          background-image:url(./images/footlogo-pin.png);
        }
        &.SHABA{
          background-image:url(./images/footlogo-shaba.png);
        }
        &.NT{
          background-image:url(./images/footlogo-nt.png);
        }
        &.KYQP{
          background-image:url(./images/footlogo-kyqp.png);
        }
        // &:hover{
        //   background-color:#000;
        //   background-position:center top!important;
        // }
      }
    }
    .footer-tips {
      color: #757576;
      line-height: 30px;
        .left{
            font-size: 12px;
            float:left;
            width: 300px;
        }

        .right{
            float: right;
            width: 300px;

            span{
                position: relative;
                top: -10px;
                display: inline-block;
                margin-right: 5px;
            }

            a{
                display: inline-block;
                width: 30px;
                height: 30px;
                margin-right: 5px;
            }

            .c1{
                background: url(./images/c1.png) no-repeat center;

                &:hover{
                    background: url(./images/c1s.png) no-repeat center;
                }
            }
            .c2{
                background: url(./images/c2.png) no-repeat center;

                &:hover{
                    background: url(./images/c2s.png) no-repeat center;
                }
            }
            .c3{
                background: url(./images/c3.png) no-repeat center;

                &:hover{
                    background: url(./images/c3s.png) no-repeat center;
                }
            }
            .c4{
                background: url(./images/c4.png) no-repeat center;

                &:hover{
                    background: url(./images/c4s.png) no-repeat center;
                }
            }
        }
    }
  }

</style>
