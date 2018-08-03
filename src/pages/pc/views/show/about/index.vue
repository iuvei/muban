<template>
  <div class="about-us">
    <div class="content">
      <div class="content-warp">
        <menus></menus> 
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
  import menus from './components/menus'
  export default {
    name: "",
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    activated() {
    },
    components: {menus}
  }
</script>
<style lang="scss">
.about-us {
    padding-bottom: 75px;
    background: url("./images/about-banner.jpg") top center no-repeat;
    padding-top: 259px;
    .content-warp {
      width: 1140px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 0px 2px 4px #dde2e7;
      padding-bottom: 38px;
    }
    .content-info {
      margin: 0 18px;
      background: #f0f0f0;
      padding: 44px;
      line-height: 1.4;
      font-size: 14px;
      h3 {
        margin: 20px 0;
        line-height: 1;
        font-size: 16px;
        color: #ed7e12;
        position: relative;
        padding-left: 10px;
        &::before {
          display: block;
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 15px;
          border-left: 2px solid #ed7e12;
        }
      }
      p,ol{
        font-size: 14px;
        overflow: hidden;
        line-height: 30px;
        color: #333333;
        text-indent: 2em;
        margin-bottom: 20px;
      }
    }
  }
</style>
