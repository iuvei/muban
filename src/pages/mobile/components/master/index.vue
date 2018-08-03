<template>
  <div class="master">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: ""
      }
    },
    props: {
      header: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      computer() {
        var docBody = document.querySelector('body')
        docBody.style.overflow = "hidden"
      }
    },
    created() {
      this.$nextTick(() => {
        this.computer();
      })
    },
    activated() {
      this.$nextTick(() => {
        this.computer();
      })
    },
    deactivated() {
      var docBody = document.querySelector('body')
      docBody.style.overflow = ""
    },
    beforeDestroy() {
      var docBody = document.querySelector('body')
      docBody.style.overflow = ""
    },
    components: {}
  }
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";
  .master {
    position: fixed;
    z-index:40;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: #fff;
    &.top {
      // padding-top: r($header-h);
    }
    &.bottom {
      padding-bottom: r($footer-h);
    }
    &.important{
      z-index:100!important;
    }
  }
</style>
