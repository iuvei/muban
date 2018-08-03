<template>
<div>
  <!-- <errorhead></errorhead> -->
  <error403></error403>
</div>
</template>
<script>
  import error403 from "@/pages/error/403"
  // import errorhead from "@/pages/error/header"
  export default {
    name: "",
    data() {
      return {
      }
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
    components:{error403,}
  }
</script>