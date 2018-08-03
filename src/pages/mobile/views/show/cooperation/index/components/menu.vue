<template>
  <div class="cooperation-menu">
    <router-link :to="{name:'agent_advantage'}" class="menu-item advantage">品牌介绍</router-link>
    <router-link data-toggle="tab" to="/cooperation/proce" class="menu-item proce">代理制度</router-link>
    <router-link data-toggle="tab" to="/cooperation/question" class="menu-item question">常见问题</router-link>
    <router-link data-toggle="tab" to="/cooperation/contact" class="menu-item contact">联系我们</router-link>
    <router-link to="/cooperation/register" class="menu-item agentregister">加盟注册</router-link>
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
        components:{
        }
    };
</script>
<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.cooperation-menu{
  width: 100%;
  padding: r(20) 1%;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
    .menu-item{
      width: 19%;
      display: inline-block;
      text-align: center;
      line-height: r(60);
      @include f(24px);
      color: #727272;
      &.active{
        background: #f9f9f9;
        background: -moz-linear-gradient(to bottom,#f9f9f9,#d8d8d8);
        background: -o-linear-gradient(to bottom,#f9f9f9,#d8d8d8);
        background: -webkit-linear-gradient(to bottom,#f9f9f9,#d8d8d8);
        background: linear-gradient(to bottom,#f9f9f9,#d8d8d8);
        color:#ff7e28;
        border-radius: r(50);
      }
    }
}
.c-menu{
  .joinNav{
    text-align:center;
    li{
      margin-bottom:r(30);
      a{
        display:inline-block;
        width:80%;
        // border:solid ;
        border-radius:20em;
        padding:r(30) r(10);
        @include f(36px);
        position:relative;
        color:#fff;
        &.agentregister{
          background:#009bc8;
        }
        &.advantage{
          background:#c357ee;
        }
        &.proce{
          background:#18c7f1;
        }
        &.question{
          background:#ffa107
        }
        &.contact{
          background:#1acd70;
        }
        img{
          position:absolute;
          left:10%;
          bottom:r(10);
          display:block;
          height:70%;
        }
      }
    }
  }
}
</style>
