<template>
  <div>
    <!-- <errorhead></errorhead> -->
    <error500></error500>
  </div>
</template>
<script>
  import  {SETTING} from "@/assets/data"
  import error500 from "@/pages/error/500"
  // import errorhead from "@/pages/error/header"

  export default {
    name: "",
    data() {
      return {SETTING}
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
    components:{error500,}
  }
</script>
