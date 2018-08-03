<template>
  <div  :class="['grid-col-new',className]">
    <div v-for="(item,i) in data" :key="item.name+i" @click="item.method||null" class="grid-col-item">
      <i class="iconyg" :class="item.ico"></i>
      <span class="col-item-red ">{{item.view}}</span>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  export  default {
    props: {
      data: {
        type: Array
      },
      className:{
        type:String
      }
    },
    data(){
      return {}
    }
  }
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
  .grid-col-new {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    margin:r(20) auto;
    .grid-col-item {
      &:nth-child(3n) {
        border-right: none;
      }
      width: 33.33%;
      padding:r(20*2);
      /*flex:1;*/
      box-sizing: border-box;;
      border-right: 1px #e4e4e4 solid;
      border-bottom: 1px #e4e4e4 solid;
      display: flex;
      flex-direction: column;
      text-align: center;
      .iconyg{
        @include f(50px);
      }
      .col-item-red {
        color: #3f3f3f;
        line-height: r(50);
      }
    }
  }
  .grid-col {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top:r(20);
    .grid-col-item {
      &:nth-child(3n) {
        border-right: none;
      }
      width: 33.33%;
      padding:r(15*2);
      /*flex:1;*/
      box-sizing: border-box;;
      border-right: 1px #ccc solid;
      border-bottom: 1px #ccc solid;
      display: flex;
      flex-direction: column;
      text-align: center;
      .col-item-red {
        color: #f66;
      }
    }
  }
</style>
