<template>
  <div class="winning-list">
    <div class="section-tit"><i class="icobjh bjh-jiangbei"></i>
      <h2>中奖资讯</h2></div>
    <div class="list-warp" ref="listwarp">
      <ul :class="{animates:myData.length>5}" :style="animation">
        <li v-for="item in myData" :key="item.ganeName">
          <i class="iconfont icon-arrow_r"></i>
          玩家 <span class="txt-y">{{item.userName}}</span>
          在 <span class="txt-r">{{item.gameName}}({{item.platform}})</span>
          投注 <span class="txt-r">{{item.betAmt}}</span> 喜中<span class="txt-l">{{item.prize}}</span>
        </li>
      </ul>
      <ul :class="{animates:myData.length>5}" :style="animation">
        <li v-for="item in myData" :key="item.ganeName">
          <i class="iconfont icon-arrow_r"></i>
          玩家 <span class="txt-y">{{item.userName}}</span>
          在 <span class="txt-r">{{item.gameName}}({{item.platform}})</span>
          投注 <span class="txt-r">{{item.betAmt}}</span> 喜中<span class="txt-l">{{item.prize}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {getCarouselListAll} from "@/api/show"

  export default {
    data() {
      return {
        myData: [],
        id: 0,
        animation: {}
      }
    },
    watch: {
      myData(val) {
        this.animation = {
          "animation-duration": val.length + 's',
          "-webkit-animation-duration": val.length + 's'
        }
      },

    },
    methods: {
      setStatus(val){
        this.animation = {
          "animation-duration": this.myData.length + 's',
          "-webkit-animation-duration": this.myData.length + 's',
          'animation-play-state:paused':val,
          '-webkit-animation-play-state': val
        };
      }
    },
    created() {
      getCarouselListAll().then(res => {
        if (res.success) {
          this.myData = res.data || [];
        }
      })
    }, mounted() {

      this.$refs.listwarp.addEventListener('touchstart', () => {
        this.setStatus('paused')
      }, false)
      this.$refs.listwarp.addEventListener('touchend', () => {
        this.setStatus('initial')
      }, false)
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .winning-list {
    padding: r(10) r(30) r(30);
    overflow: hidden;
    user-select: none;
    @include f(24px);
			.section-tit{
				margin-bottom: r(24);
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
    .animates {
      position: relative;
      animation: animations 6s linear infinite;
    }
    li {
      height: r(70);
      line-height: r(70);
      border-bottom: 1px solid #574740;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      i.icon-arrow-right {
        display: inline-block;
        width: r(45);
        color: #fff;
      }
    }
    .txt-y {
      color: blue;
    }
    .txt-r {
      color: #ff4200;
    }
    .txt-l {
      color: red;
    }
    .list-warp {
      height: r(350);
      overflow: hidden;
    }
  }

  @keyframes animations {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>
