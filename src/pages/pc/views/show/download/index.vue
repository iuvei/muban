<template>
<div class="down-page">
    <div class="content app-download">
      <div class="content-warp">
        <div class="tab-ment">
					<!--<span>-->
						<!--手机APP-->
					<!--</span>-->
          <span v-for="item in data" :key="item" :class="{active:cur==item}" @click="cur=item">
            {{item}}
          </span>
        </div>
        <div class="content-info" v-show="cur=='DT客户端'">
          <div>
            <h3 class="i1">苹果IOS</h3>
            <p>
              下载方法【1】
            </p>
            <p>
              使用手机二维码扫描软件扫码下载（请不要微信扫描哦）
            </p>
            <img width="140" :src="generateQRCode(Download.dtIos,140)">
            <p>
              下载方法【2】
            </p>
            <p>
              手机任意浏览器输入网址
            </p>
            <a class="url">{{Download.dtIos}}</a>
          </div>
          <div>
            <h3 class="i2">Android</h3>
            <p>
              下载方法【1】
            </p>
            <p>
              使用手机二维码扫描软件扫码下载（请不要微信扫描哦）
            </p>
            <img width="140"  :src="generateQRCode(Download.dtAndroid,140)">
            <p>
              下载方法【2】
            </p>
            <p>
              手机任意浏览器输入网址
            </p>
            <a class="url">{{Download.dtAndroid}} </a>
          </div>
        </div>
        <div class="content-info" v-show="cur=='PT客户端'">
          <div>
            <h3 class="i2">Android</h3>
            <p>
              下载方法【1】
            </p>
            <p>
              使用手机二维码扫描软件扫码下载（请不要微信扫描哦）
            </p>
            <img width="140" ref="imgs" :src="generateQRCode(Download.ptMobile,140)">

            <p>
              下载方法【2】
            </p>
            <p>
              手机任意浏览器输入网址
            </p>
            <a class="url">{{Download.ptMobile}}</a>
          </div>
          <div class="hauto">
            <h3 class="i3">电脑客户端</h3>
            <p>
              下载地址
            </p>
            <a target="_blank" :href="Download.ptpc">点击下载</a>
            <p>
              温馨提示：PT电脑客户端登录需在账号前加大写字母“{{WEBCONFIG.PtBefore}}”。
            </p>
            <p>
              例如：亚冠账号yaguan登录PT电脑客户端需输入“{{WEBCONFIG.PtBefore}}YAGUAN“
            </p>
          </div>
        </div>
        <div class="content-info" v-show="cur=='EBET客户端'">
          <div>
            <h3 class="i2">手机客户端</h3>
            <p>
              下载方法【1】
            </p>
            <p>
              使用手机二维码扫描软件扫码下载（请不要微信扫描哦）
            </p>
            <img width="140" ref="imgs" :src="generateQRCode(Download.ebetMobile,140)">

            <p>
              下载方法【2】
            </p>
            <p>
              手机任意浏览器输入网址
            </p>
            <a class="url">{{Download.ebetMobile}}</a>
          </div>
        </div>
        <div class="content-info" v-show="cur=='AG客户端'">
          <div>
            <h3 class="i2">手机客户端</h3>
            <p>
              下载方法【1】
            </p>
            <p>
              使用手机二维码扫描软件扫码下载（请不要微信扫描哦）
            </p>
            <img width="140" ref="imgs" :src="generateQRCode(Download.agMobile,140)">

            <p>
              下载方法【2】
            </p>
            <p>
              手机任意浏览器输入网址
            </p>
            <a class="url">{{Download.agMobile}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import banner from "./components/banner"
  import  {generateQRCode} from "@/api/show"
  import  {SETTING,WEBCONFIG,Download} from "@/assets/data"
  // import  {Download} from "@/assets/data"
  export default {
    // name: "",
    // data() {
    //   return {
    //     Download,
    //   }
    // },
    // methods: {
    //   generateQRCode(url,size){
    //     return   generateQRCode(url,size)
    //   }
    // },
    // components:{
    //   banner
    // }
    name: "",
    data() {
      return {
        SETTING,
        WEBCONFIG,
        Download,
        cur:"PT客户端",
        // data:['PT客户端','DT客户端','AG客户端']
        data:['PT客户端','AG客户端']
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      generateQRCode(url,size){
        console.log(url);
        
        return   generateQRCode(url,size)
      }
    },
    created() {
      console.log(this.SETTING);
      
      this.generateQRCode("text")
    },
    activated() {
    },
    components: {}
  }
</script>
<style lang="scss" spcoed>
.down-page{background:url(./images/phone-banner.jpg) top center no-repeat; padding-top: 257px; }
  .content {
    padding-bottom: 75px;
    .content-warp {
      width: 1140px;
      margin: 0 auto;
      background: url(./images/bg.jpg) no-repeat #fff;
      box-shadow: 0px 2px 4px #dde2e7;
      min-height: 948px;

      .hauto {
        height: auto !important;
      }
      .banner2 {
        position: relative;
        margin: 0 auto;
        max-width: 1920px;
        overflow: hidden;
      }
      .banner2 img {
        position: relative;
        display: block;
        width: 1920px;
        margin-left: -960px;
        left: 50%;
      }
      .tab-ment {
        padding: 50px 0 20px;
        margin: 0 50px;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
        span {
          display: inline-block;
          height: 32px;
          line-height: 32px;
          text-align: center;
          padding: 0 26px;
          border-radius: 16px;
          background: #d7d7d7;
          color: #333333;
          margin: 0 10px;
          margin-bottom: 10px;
          font-size: 16px;
          cursor: pointer;
          &.active {
            background: #ed7e12;
            color: #fff;
            i {
              background-position: center -24px !important;
            }
            i.i5 {
              background-position: center -25px !important;
            }
          }
        }
      }
      .content-info {
        overflow: hidden;
        margin: 0 18px;
        padding: 60px 134px;
        background: none;
        padding-right: 0;
        div {
          width: 480px;
          float: left;
          font-size: 14px;
          color: #666666;
          height: 480px;
          h3 {
            padding-left: 40px;
            line-height: 40px;
            font-size: 16px;
            color: #333333;
            font-weight: bold;
            margin-bottom: 15px;
            &.i1 {
              background: url(./images/01.png) no-repeat left top;
              line-height: 45px;
            }
            &.i2 {
              background: url(./images/02.png) no-repeat left top;
            }
            &.i3 {
              background: url(./images/03.png) no-repeat left top;
            }
          }
          p {
            margin-bottom: 20px;
          }
          img {
            box-shadow: 0px 2px 4px #dde2e7;
            margin-bottom: 20px;
          }
          input,.url {
            min-width: 390px;
            height: 30px;
            box-sizing: border-box;
            padding-left: 20px;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            background: #e0e0e0;
            border-radius: 15px;
            margin-top: 10px;
          }
          a {
            display: inline-block;
            padding: 7px 30px;
            color: #fff;
            background: #ed7e12;
            border-radius: 30px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  // .down-page{
  //   background:#202020;
  //   .down-content{
  //     padding:40px 0;
  //     .d-item{
  //       border-radius:12px;
  //       overflow:hidden;
  //       height:320px;
  //       background:url(./images/bg.jpg) center center no-repeat;
  //       background-size:100% 100%;
  //       margin-bottom:20px;
  //       position:relative;
  //       .title{
  //         position:absolute;
  //         top:0;
  //         left:0;
  //         height:100%;
  //         width:70px;
  //         word-break:break-all;
  //         font-size:24px;
  //         padding:20px;
  //         line-height:1.8;
  //       }
  //       .android{
  //         position:absolute;
  //         top: 184px;
  //         left: 132px;
  //         width:100px;
  //         height:100px; 
  //       }
  //       .ios{
  //         position:absolute;
  //         top: 184px;
  //         left:300px;     
  //         width:100px;
  //         height:100px;     
  //       }
  //       .links{
  //         position:absolute;
  //         top: 125px;
  //         left: 480px;
  //         min-width:300px;
  //         height:40px;
  //         line-height:40px;
  //         font-size:14px;
  //         border-radius:20em;
  //         color:#fff;
  //         padding:0 10px;
  //         // z-index:9;
  //         background: rgb(218,101,77); /* Old browsers */
  //         background: -moz-linear-gradient(left, rgba(218,101,77,1) 0%, rgba(236,136,76,1) 100%); /* FF3.6-15 */
  //         background: -webkit-linear-gradient(left, rgba(218,101,77,1) 0%,rgba(236,136,76,1) 100%); /* Chrome10-25,Safari5.1-6 */
  //         background: linear-gradient(to right, rgba(218,101,77,1) 0%,rgba(236,136,76,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  //         filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#da654d', endColorstr='#ec884c',GradientType=1 ); /* IE6-9 */
  //       }
  //       .ico{
  //         position:absolute;
  //         right:0;
  //         top:50%;
  //         transform:translateY(-50%);
  //       }
  //     }
  //   }
  // }
</style>
