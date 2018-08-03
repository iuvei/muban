<template>
  <div>
    <!-- <errorhead></errorhead> -->
    <error404></error404>
  </div>
</template>
<script>
  import error404 from "@/pages/error/404"
  // import errorhead from "@/pages/error/header"

  export default {
    name: "",
    data() {
      return {}
    },
    mounted(){
      this.$bus.$emit('setHeader',false)
      this.$bus.$emit('setFooter',false)
    },
    activated(){
      this.$bus.$emit('setHeader',false)
      this.$bus.$emit('setFooter',false)
    },
    deactivated(){
      this.$bus.$emit('setHeader',true)
      this.$bus.$emit('setFooter',true)
    },
    beforeDestroy(){
      this.$bus.$emit('setHeader',true)
      this.$bus.$emit('setFooter',true)
    },
    components:{error404,}
  }
</script>