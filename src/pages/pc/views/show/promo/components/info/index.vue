<template>
  <transition name="fade">
    <div class="promo-info" v-show="showWindow">
        <div class="promo-info-wrap">
          <h1>{{showDatas.activityTitle || ''}}</h1>
          <img src="./images/close.png" @click="showWindow=false">
          <div class="promo-info-content">
            <div class="content-info">
              <iframe ref="iframe" width="100%" height="520" src="" frameborder="0"></iframe>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>
<script>
  import util from '@/util/util'
  import {
    findLatestPreferentialById
  } from "@/api/show"

  export default {
    name: "",
    data() {
      return {
        showWindow:false,
        showDatas:{
          activityTitle:'',
          activityContent:''
        }
      }
    },
    methods: {
      setiframe(title,content) {
        this.showWindow=true;
        this.showDatas.activityTitle = title
        this.showDatas.activityContent = content
        let ifrm = this.$refs.iframe;
        console.log(ifrm)
        const doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
          doc.open();
          doc.write(content);
          doc.body.style['overflow-y'] = 'visible';
          doc.body.style['margin'] = 0;
          doc.close();
      }
    },
    created() {
      this.$bus.$on('showProDetail', eventData=>{
        console.log(eventData)
        this.setiframe(eventData.data.activityTitle,eventData.data.activityContent)
      })
    },
  }

</script>
<style lang="scss" spcoed>
.promo-info {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;

    > div {
        position: absolute;
        left: 50%;
        width: 1000px;
        margin: -400px 0 0 -500px;
        background: #ebf0f4;
        border: 1px solid #fff;
        top: 20%;
        height: 800px;

        h1 {
            font-size: 30px;
            font-weight: bold;
            color: #ed7e13;
            height: 102px;
            border-bottom: 2px solid #ed7e13;
            text-align: center;
            line-height: 102px;
        }

        img {
            position: absolute;
            right: 20px;
            top: 30px;
            cursor: pointer;
        }

        > div {
            padding: 0 30px;
            height: 650px;
            overflow-y: hidden;
            margin-top: 20px;
        }

        h3 {
            font-size: 24px;
            color: #ed7e13;
            margin-bottom: 15px;
        }

        p {
            font-size: 24px;
            color: #353535;
            margin-bottom: 15px;
        }

        table{
            width: 100%;
            border-spacing: 0;
            font-size: 24px;
            text-align: center;
            border-left: 1px solid #bbbbbb;
            border-top: 1px solid #bbbbbb;
            margin-bottom: 60px;
        }
        table th{
            background: #666666;
            padding: 30px 0;
            color: #fff;
            font-weight: normal;
            border-right: 1px solid #bbbbbb;
            border-bottom: 1px solid #bbbbbb;
        }
        table td{
            padding: 20px 0;
            border-right: 1px solid #bbbbbb;
            border-bottom: 1px solid #bbbbbb;
        }

        table tr:nth-child(odd)
        {
            background:#dadada;
        }

    }


  &::before {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .promo-info-wrap {
    position: relative;
    width: 960px;
    vertical-align: middle;
    height: 700px;
    display: inline-block;
    background: #fff;
    padding-bottom: 40px;

  }
  .btn-close {
    position: absolute;
    top: 32px;
    right: 37px;
    cursor: pointer;
    color: #000;
    .iconfont {
      font-size: 36px;
    }
  }
  h2 {
    text-align: center;
    height: 100px;
    line-height: 100px;
    border-bottom: 2px solid #0f97bd;
    color: #0f97bd;
    font-size: 30px;
  }
  .promo-info-content {
    margin-top: 40px;
    padding-right: 15px;
    padding-left: 15px;
    line-height: 1;
    height: 520px;
    text-align: left;
    font-size: 24px;
  }
  .content-info {
    overflow: hidden;
    border:none;
    width:100%;
    height:100%;
    color:#333;
  }
}
</style>
