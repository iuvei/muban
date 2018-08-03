<template>
  <div id="app">
    <v-header>
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
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import vHeader from './components/header-back'
  export default {
    name:'mobileMaster',
    data() {
      return {
        transitionName: "slide",
        title: ""
      }
    },
    created() {
      this.$store.dispatch("UPDATE_USERDATA")
    },
    components: {
      vHeader
    }
  }
</script>
<style lang="scss" scoped>
</style>
