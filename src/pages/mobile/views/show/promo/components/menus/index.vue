<template>
    <div class="promotion_select">
      <nav class="promotion_content cfx">
        <span @click="setMenu('')"   :class="['promotion_select_item',{active:filter==''}]">全部优惠</span>
        <span v-for="(item,i) in menuData" :class="['promotion_select_item',{active:filter==item.typeId}]" @click="setMenu(item.typeId)" :key="i">
          {{item.typeName}}
        </span>
      </nav>
    </div>

</template>
<script>
  import {
    queryLatestPreferential
  } from '@/api/show'
  export default {
    name: "",
    data() {
      return {
        filter: "",
        // 设置对于的icon图标
        typeIco:{
          '001':'bjh-qianbao',
          '002':'bjh-youhui',
          '003':'bjh-time',
          '004':'bjh-rili'
        },
        menuData:[]
      }
    },
    computed: {},
    watch: {},
    methods: {
      setMenu(type){
        this.filter=type;
        this.$bus.$emit('filtPros',type);
      }
    },
    created() {
      this.$bus.$on('setProMenu',eventData=>{
        this.menuData=eventData;
      })
      console.log(this.menus);
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .promotion_select {
    background: $body-bg;
    // padding: r(10*2);
    height: r(80);
    .promotion_content {
      margin: 0 auto;
      background: #fff;
      // border-radius: 50em;
      // padding: r(6*2);
      height: r(80);
      overflow-y: hidden;
      overflow-x: scroll;
      .promotion_select_item {
        display: block;
        width: 20%;
        height: r(80);
        line-height: r(80);
        float: left;
        text-align: center;
        // border-radius: 50em;
        @include f(26px);
        // color: #333;
        color: rgba(114,114,114,1);
        transition: all 0.6s;
        &.active {
          // background: $cl1;
          color: rgba(255,126,40,1);
          border-bottom: 2px solid rgba(255,126,40,1);
        }
      }
    }
  }
</style>
