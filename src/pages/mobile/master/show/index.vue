<template>
  <div id="app">
    <v-header>
      <!-- 头部，如果有title，则用title替代logo -->
      <div v-if="title">{{title || ''}}</div>
    </v-header>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="!$route.meta.noCache"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="$route.meta.noCache"></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import vHeader from './components/header'
  import vFooter from './components/footer'
  export default {
    name:'mobileMaster',
    data() {
      return {
        transitionName: "slide",
        title: ""
      }
    },
    watch: {
      "$route"(to, from) {
        this.title = (to.meta.title || to.meta.headName || "")
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
      }
    },
    created() {
      this.$store.dispatch("UPDATE_USERDATA")
    },
    components: {
    }
  }
</script>
<style lang="scss">


  #app {
    height: 100%;
    overflow: auto;
  }

  .slide-enter,
  .slide_back-enter {
    position: absolute;
    width: 100%;
  }

  .slide-leave,
  .slide_back-leave {
    position: absolute;
    width: 100%;
  }

  .slide-enter-active,
  .slide_back-enter-active {
    // transition: all 0.3s linear;
  }

  .slide-leave-active {
    position: absolute;
    // transition: all 0.3s linear;
    opacity:0;
    // transform: translate(-100%);
  }

  .slide-enter {
    opacity:1;
    // transform: translateX(100%);
  }

  .slide_back-leave-active {
    position: absolute;
    // transition: all 0.3s linear;
    opacity:1;
    // transform: translate(100%);
  }

  .slide_back-enter {
    opacity:0;
    // transform: translateX(-100%);
  }
</style>
