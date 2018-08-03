<template>

  <div class="hot-game" v-show="recommandData.length>0">
    <div class="section-tit"><i class="icobjh bjh-remen"></i><h2>热门游戏</h2> </div>
    <div class="game-list">
      <div v-for="(item,i) in recommandData" @click="tickGanme(item)" class="hot-item" :key="i+item.id">

          <img class="game_img lazy" v-lazy="getImg(item,'mobile')">

        <div class="item-title">{{item.gameName}}</div>
      </div>
    </div>
    <model-game v-model="showModel" :data="curItem"></model-game>
  </div>
</template>
<script>
  import {queryRecommandGamesList} from "@/api/show"
  import modelGame from "mobile/views/show/slotgame/components/data-list/model-game"
  import {games} from "@/controls/games/game" 
  export default {
    // 混合
    mixins: [games],
    data() {
      return {
        recommandData: [],
        curItem: {},
        showModel: false
      }
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      tickGanme(item) {
        this.curItem = item;
        // {
        //   "eName": "",
        //   "name": item.gameName,
        //   "id": item.gameId,
        //   "code": item.code||'',
        //   "category": item.platform,
        //   "type": "SLO",
        //   "line": "",
        //   "state": 1,
        //   subType:item.subType||'',
        //   "pic": item.picPath,
        //   "tag": []
        // };
        this.showModel = true;
      },
    },
    created() {
      queryRecommandGamesList({gameType: 1}).then(res => {
        if (res.success){
          this.recommandData = []
          for(let i =0;i<res.data.length;i++){
            this.recommandData.push({
              category:res.data[i].platform,
              code:res.data[i].code||'',
              eName:res.data[i].gameId,
              id:res.data[i].gameId,
              language:"",
              name:res.data[i].gameName,
              pic:res.data[i].picPath,
              subType:res.data[i].subType||'',
              state:1,
              tag:[],

            })
          }
        }
      })
    },
    activated() {
    },
    components: {
      modelGame
    }
  }
</script>
<style spcoed lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .hot-game {
    @include f(28px);
    padding: r(10) 0 r(30) r(30);
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
    .game-list {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    .hot-item {
      position: relative;
      margin-right: r(30);
      img {
        width: r(240);
        height: r(200);
        border-radius:10px;
      }
    }
    .item-title {
      position: absolute;
      bottom: 0px;
      color: #fff;
      width: 100%;
      text-align: center;
      background: linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0.4) 100%);
    }
  }
</style>
