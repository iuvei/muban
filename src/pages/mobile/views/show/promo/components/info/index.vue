<template>
  <transition name="fade">
    <div class="prefer_box" v-show="showWindow">
      <div class="prefer_content">
        <div class="prefer_title" @click="showWindow=false">
          <span class="iconfont icon-close1"></span>
          <img :src="resdata.data.newImageUrl" alt="">
        </div>
        <div class="prefer_detail">
          <iframe  ref="iframe" style="height:100%;" width="100%"  cl src="" frameborder="0">
          </iframe>
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
        },
        resdata:{
          data:{
            newImageUrl:''
          }
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
        this.resdata = eventData
      })
    },
  }

</script>
<style lang="scss" spcoed>
  @import "~mobile/assets/scss/mixin.scss";

  .promotion_toggle_all {
    position: fixed;
    right: 5%;
    bottom: 15%;
    border-radius: r(8);
    padding: r(8);
    border: solid 2px $cl1;
    text-align: center;
    color: $cl1;
    background-color: #fff;
    .iconfont {
      @include f(36px);
    }
  }

  .prefer_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    .prefer_content {
      position: absolute;
      display: block;
      width: 85%;
      // height: 75%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      // padding: r(20);
      // border:solid;
      .prefer_title {
        text-align: center;
        img{
          width: 100%;
        }
        .iconfont {
          @include f(45px);
          color: #fff;
          border-radius: 20em;
          padding: r(15);
          // background: $cl1;
          position: fixed;
          // top: r(-30);
          right: 0;
        }
      }
      .prefer_detail {
        padding: r(20);
        height: r(700);
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
      }
    }
  }
</style>
