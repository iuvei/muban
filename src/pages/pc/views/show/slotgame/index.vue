<template>
  <div class="game-main">
    <banner></banner>
    <div class="gamemain">
      <div class="contain">
        <recommandGames></recommandGames>
        <platform></platform>
        <v-filter>
          <filter-input></filter-input>
        </v-filter>
        <dada-list></dada-list>
      </div>
    </div>

  </div>
</template>
<script>
  import banner from "./components/banner"
  import recommandGames from "./components/recommand-games/"
  import filterInput from "./components/filter-input"
  import platform from "./components/platform"
  import dadaList from "./components/games"
  import vFilter from "./components/fliter"
  import {getAllGames} from "@/api/show"
  import {queryGameStatus} from "@/api/user"
  export default {
    data() {
      return {
        showloadding: false,//加载中... 相反的 false=显示
        showNoData: false,//是否显示空数据
        allGames: [],//所有的数据
        fillterData: [], //过滤后 的数据
        filter: { //过滤条件
          category: '', //老虎机平台类型
          type: '',  //老虎机类型 :经典,电动吃角子
          line: '', // 老虎机线性类型
          subType: '', // 第二种类型类型
          tag: '' //热门 最新等
        },
        statusData: []
      };
    },
    components: {
      banner,platform,vFilter, dadaList,recommandGames,filterInput
    },
    methods: {
      
    },
    watch: {
      
    },
    computed: {
      
    },
    created() {
      
    },
  };
</script>
<style lang='scss' spcoed>
  .game-main{
  background: url(../../../assets/images/bg.png) no-repeat center 383px;
  .gamemain {
    
    > .contain {
      width: 1140px;
      margin: 0 auto;
      background: #fff;
    }
  }
  }
</style>
