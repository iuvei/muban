<template>
  <div class="slotgame-playform">
    <div class="flex">
      <div class="p_box" v-for="item in platformData" :key="item.value">
        <router-link :to="{name:'slotgame',params:{type:item.value}}" class="p_item">
          <span class="p_ico" :class="`${item.value}`"></span>
          {{item.name}}
        </router-link>
        <i class="dashline"></i>
        <i class="triangle_down"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import {platformData} from "@/assets/data/index"
  export default {
    data() {
      return {
        platformData,
        inputVal: '',
      }
    }
  }

</script>
<style lang="scss">
.slotgame-playform{
  height: 100px;
  background: #ccc;
  color: #333;
  .flex{
    display: flex;
    justify-content: space-between;
    .p_box{
      width: 20%;
      height: 77px;
      display: inline-block;
      text-align: center;
      // &:nth-child(6){
      //   .dashline{
      //     border: none;
      //   }
      // }
      &:last-child{
        .dashline{
          border: none;
        }
      }
      .dashline{
        display: block;
        height: 65px;
        position: relative;
        float: right;
        top: -81px;
        // right:0;
        border-right: 1px #999 dashed;
        
      }
      .p_item{
        text-align: center;
        width: 100%;
        height: 100%;
        padding-top: 23px;
        cursor: pointer;
        text-align: center;
        display:block;
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        span{
          width: 100%;
          height: 36px;
          -webkit-transition: all .3s;
          transition: all .3s;
          display: block;
          margin-bottom: 5px;
        }
        .PT{
          background:url(./images/game-icon1.png) no-repeat center bottom;
        }
        .DT{
          background:url(./images/game-icon9.png) no-repeat center bottom;
        }
        .MG{
          background:url(./images/game-icon2.png) no-repeat center bottom;
        }
        .QT{
          background:url(./images/game-icon5.png) no-repeat center bottom;
        }
        .TTG{
          background:url(./images/game-icon6.png) no-repeat center bottom;
        }
        .PNG{
          background:url(./images/game-icon11.png) no-repeat center bottom;
        }
        .NT{
          background:url(./images/game-icon4.png) no-repeat center bottom;
        }
        .TGP{
          background:url(./images/game-icon8.png) no-repeat center bottom;
        }
        .CQ9{
          background:url(./images/game-icon10.png) no-repeat center bottom;
        }
        &.active,&:hover {
          // background:url(./images/game2.png) no-repeat -3px -2px;
          background-color: #222647;
          color: #fff;
        }
        &.active+.dashline{
          border: none;
        }
        &.active+.dashline+.triangle_down{
          width: 0;
          height: 0;
          // border: 10px solid;
          border-width: 4px 6px;
          border-style: solid;  
          border-color: #222647 #fff #fff #fff;
          position: relative;
          top: 6px;
        }
      }
    }
  }
}
.playform {
    height: 100px;
    background: #cccccc;
    color: #333333;
    .flex{
      display: flex;
      justify-content: space-between;
    }
    > div{
      margin: 0;
    }

    .p_box {
      // float: left;
      width: 20%;
      height: 100px;
      // position: relative;
    }
    .p_box2{
      width: percentage($number: 1/5);
    }

    a{
      position: relative;
        z-index: 1;

      span{
        width: 100%;
        height: 36px;
        -webkit-transition: all .3s;
        transition: all .3s;
        display: block;
        margin-bottom: 5px;
        margin-top: 5px;

      }

      .PT{
        background:url(./images/game-icon1.png) no-repeat center bottom;
      }
      .DT{
        background:url(./images/game-icon3.png) no-repeat center bottom;
      }
      .MG{
        background:url(./images/game-icon2.png) no-repeat center bottom;
      }
      .QT{
        background:url(./images/game-icon5.png) no-repeat center bottom;
      }
      .TTG{
        background:url(./images/game-icon6.png) no-repeat center bottom;
      }
      .PNG{
        background:url(./images/game-icon7.png) no-repeat center bottom;
      }
      .NT{
        background:url(./images/game-icon4.png) no-repeat center bottom;
      }
      &.active,&:hover {
        // background:url(./images/game2.png) no-repeat -3px -2px;
        background-color: #222647;
        color: #fff;
      }
    }
    .p_box > i{
      display: block;
      height: 65px;
      position: absolute;
      top: 20px;
      right:0;
      border-right: 1px #999 dashed;
    }
    .p_item {
      width: 100%;
      height: 100%;
      padding-top: 15px;
      cursor: pointer;
      text-align: center;
      display:block;
      font-size: 16px;
      color: #333333;
      font-weight: bold;
    }
  }
</style>
