<template>
  <div class="index-main">
    <banner></banner>
    <annunciate></annunciate>
    <detail></detail>
    <alert-tips></alert-tips>
  </div>
</template>
<script>
  import annunciate from 'pc/components/annunciate'
  import banner from "./components/banner";
  import menus from "./components/menus"
  import hots from "./components/hots"
  import pros from "./components/pros"
  import services from "./components/services"
  import detail from "./components/detail"
  import alertTips from "./components/alert-tips/index"
  
  export default {
    data() {
      return {
            active: 0,
      };
    },
    components: {
      annunciate,
      banner,
      menus,
      hots,
      pros,
      services,
      alertTips,
      detail
    },
    methods: {
        btnC(){
          if (this.active == 4) {
            this.active = 0;
          }
          else{
            this.active++;
          }
        },
    },
    created() {

    },
    mounted() {
        window.setInterval(() => {
          this.btnC();
        },2000)
    },
    activated() {
    },
  };

</script>
<style lang="scss" scoped>
</style>
