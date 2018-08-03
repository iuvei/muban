<template>
  <div class="down-client">
    <div class="section-tit">
      <!-- <i class="icobjh bjh-download"></i> -->
      <h2>应用下载</h2>
    </div>
    <ul class="down-list">
      <li><a target="_blank" :href="Download.agMobile">
        <img src="./dl_ag.png">
        <div class="down-text">AG真人</div>
      </a>
      </li>
      <li v-if="isIOS">
        <a target="_blank" :href="Download.dtIos">
          <img src="./dl_dt.png">
          <div class="down-text">DT苹果版</div>
        </a>
      </li>
      <li v-else>
        <a target="_blank" :href="Download.dtAndroid">
          <img src="./dl_dt.png">
          <div class="down-text">DT安卓版</div>
        </a>
      </li>
      <!-- <li>
        <a target="_blank" :href="Download.ebetMobile">
          <img src="./ebet.png">
          <div class="down-text">EBET下载</div>
        </a></li> -->
      <li v-if="!isIOS">
        <a target="_blank" :href="Download.ptMobile">
          <img src="./dl_pt.png">
          <div class="down-text">PT安卓版</div>
        </a></li>
    </ul>
  </div>
</template>
<script>
  import {Download} from "@/assets/data"

  export default {
    data() {
      return {
        Download,
        isIOS:false
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
      if(window.navigator.userAgent.toString().search(/(iPhone|iPod|ios|iPad)/i)>-1)
      {
        this.isIOS=true;
      }
    },
    activated() {
    },
    components: {}
  }
</script>
<style spcoed lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .down-client {
    @include f(28px);
    background-color: $main-cl;
    padding: 0 r(10);
    margin: r(20) auto r(30);
			.section-tit{
        border-bottom:solid 1px #999;
        padding:r(16) 0;
				h2 {
					display: inline-block;
					vertical-align: middle;
					font-weight: normal;
					@include f(34px);
				}
				.icobjh{
    				@include  f(36px);
					color:#666;
					vertical-align:middle;

				}
			}
    .down-list {
      text-align: center;
      padding:r(25) 0;
      display: flex;
      flex-wrap: nowrap;
      li {
        margin-right: r(20);
        min-width:25%;
      }
      img {
        width: r(125);
        height: auto;
      }
      .down-text {
        margin-top: r(14);
      }
    }
  }
</style>
