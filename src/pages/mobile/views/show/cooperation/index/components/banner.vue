<template>
  <div class='c-banner'>
    <img src="~mobile/assets/images/banner.png">
  </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props:{},
        methods:{},
        computed:{},
        created(){
        },
        components:{}
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.c-banner{
  img{
    width:100%;
    display:block;
  }
}
</style>
