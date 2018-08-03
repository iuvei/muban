<template>
  <div class="error-main">
    <errorhead></errorhead>
    <error404></error404>
  </div>
</template>
<script>
  import error404 from "@/pages/error/404"
  import errorhead from "@/pages/error/header"
  import {SETTING} from "@/assets/data"
  export default {
    name: "",
    data() {
      return {SETTING}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
      document.querySelector('body').style.overflow='hidden';
    },
    beforeDestroy(){
      document.querySelector('body').style.overflow='';
    },
    activated() {
    },
    components:{error404,errorhead}
  }
</script>
<style lang="scss" scoped>
.error-main {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 100%;
    overflow: auto;
  }
</style>
