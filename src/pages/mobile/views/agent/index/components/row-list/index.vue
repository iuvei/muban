<template>
  <div :class="['grid-row',className]">
    <div v-for="(item,i) in data"
         :class="['grid-row-item',{active:i==index},item.className||'']"
         @click="clickMetod(item,i,$event)"
         :key="i">
      <slot>{{item.name}}</slot>
      <i class="iconfont icon-arrow_r"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        index: 0
      }
    },
    methods: {
      clickMetod(item, i, e) {
        this.index = i;
        if (item.to) {
          this.$router.push(item.to);
        }
        else if (item.params) {
          this.$emit("roulist", item, i, e)
        }
      }
    },
    props: {
      data: {
        type: Array
      }
      ,
      className: {
        type: String
      }
    }
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .grid-row {
    background: #fff;
    .grid-row-item {
      &:last-child {
        border-bottom: none;
      }
      display: block;
      height: r(42*2);
      margin: 0 15px;
      cursor: pointer;
      line-height: r(42*2);
      border-bottom: 1px solid #ddd;
      background-size: 7px 12px;
      color: #666;
      .icon-arrow_r {
        float: right;
        margin-right: r(36);
      }
    }
  }
</style>
