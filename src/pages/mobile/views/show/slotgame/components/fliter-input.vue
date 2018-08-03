<template>
  <div class="fliter-input">
    <div class="input-box">
      <input v-model="inputVal" type="text" placeholder="查找游戏">
      <div class="filter-btn1" v-if="value =='category'" @click="showbox()">
        <span>筛选</span>
        <i class="iconfont icon-arrow_d"></i>
      </div>
      <a href="javascript:;" v-else class="iconfont icon-search"></a>
    </div>
    
  </div>
</template>
<script>
  import vFilter from "./filter"
  export default {
    data() {
      return {
        inputVal: '',
        inputData: [],
        showList:false,
      }
    },
    methods: {
      showbox(){
        this.$bus.$emit('showFilter');
      },
    },
    props: {
      value: String
    },
    created(){
      // this.getChoosen
    },
    watch: {
      inputVal(val) {
        this.$bus.$emit('searchByInput',this.inputVal);
      }
    },
    components:{vFilter,}
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .fliter-input {
    display: flex;
    @include  f(28px);
    align-items: center;
    .input-box{
      position: relative;
      flex: 6;
      height:r(66);
    }
    input {
      margin: 0;
      padding: 0 0 0 r(10);
      vertical-align: top;
      width: 100%;
      height:100%;
      border: 1px solid #c8c8c8;
      border-radius: 5px;
    }
    .icon-search {
      color: $cl1;
      @include  f(54px);
      flex: 1;
      text-align: center;
      position: relative;
      float: right;
      right: r(20);
      top: r(-92);
    }
  }

</style>
