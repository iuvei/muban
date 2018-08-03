<template>
      <div class="marquee-info">
        <i class="mar-ico">
          <img src="./img/ico_home_notice@2x.png">
        </i>
        <marquee ref="mq" class="marquee-content" behavior="scroll" direction="left" loop="infinite" scrollamount="3">
          <router-link v-for="(item,i) in announcement" :key="i" to="/notice">
            [{{item.createtime}}]&nbsp;<span style="margin-right:0.3rem">{{item.title}}</span>
          </router-link>
        </marquee>
      </div>
</template>
<script>
  import { getNewAnnouncement} from "@/api/show"

  export default {
    data() {
      return {
        announcement:[]
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      getAnnounce(){
        getNewAnnouncement().then(res => {
          this.announcement = res.data;
          // this.$refs.mq.start();
        })
      }
    },
    created() {
      this.getAnnounce({bannerType:1})
    }
  }
</script>
<style spcoed lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
    .marquee-info {
      position:relative;
      height: r(70);
      line-height: r(70);
      width: 100%;
      z-index: 1;
      padding-left: r(100);
      background: $main-cl;
      color: $text-cl;
      overflow: hidden;
      white-space: nowrap;
      margin: r(20) auto;
      @include f(30px);
      .mar-ico {
        position: absolute;
        top: 0;
        left: r(22);
        width:r(80);
        img{
          width:90%;
          max-height:r(54);
        }
      }
    }
</style>
