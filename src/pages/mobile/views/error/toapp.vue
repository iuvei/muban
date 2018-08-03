<template>
  <div class="toapp">
    <h1>登录已过期</h1>
    <a :href="WEBCONFIG.appNative">点击返回APP</a>
  </div>
</template>
<script>
  import  {WEBCONFIG} from "@/assets/data"
  import  util from "@/util/util"
  export default {
    name: "",
    data() {
      return {
        WEBCONFIG,
      }
    },

  }
</script>
<style lang="scss">
  .toapp{
    padding-top: 50px;
    text-align: center;
    font-size: 30px;

    h1{
      margin-bottom: 100px;
    }

    a{

    }
  }

</style>
