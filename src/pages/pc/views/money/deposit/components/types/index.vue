<template>
  <div class="mainDev">
      <div class="next posl" @click="pregame()"><span class=" ico-pre"></span></div>
      <div class="payBox">
        <div class="gameDev" v-for="item in newPayMenus" :class="{active:active==item.name}" :key="item.name" @click="setPaytype(item)">
            <div class="name"><i :class="item.ico" class="iconyg"></i> {{item.name}}</div>
        </div>
      </div>
      <div class="next" @click="nextgame()"><i class=" ico-next"></i></div>
  </div>
</template>
<script>

  import {depositMenu} from '@/controls/money/deposit'
  export default {
    mixins:[depositMenu],
    data() {
      return {
        paySelect: null,
        active: "",
        newPayMenus:[],
        gameMinIndex:0,
        gameMaxIndex:5,
        gamelen:''
      }
    },
    methods: {
      setPaytype(item){
        console.log(item);
        
        if(this.paySelect==item) return
        this.paySelect=item;
        this.$emit('setClasses',item);
        this.active = item.name;
      },
      pregame(){
        if (this.gameMinIndex == 0) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex - 1
          this.gameMaxIndex = this.gameMaxIndex - 1
          console.log(this.gameMinIndex,this.gameMaxIndex);
          
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      },
      nextgame(){
        if (this.gameMaxIndex < 5 || this.gameMaxIndex >= this.gamelen) {
          window.toast('已无更多')
          return false;
        } else {
          this.gameMinIndex = this.gameMinIndex + 1
          this.gameMaxIndex = this.gameMaxIndex + 1
          this.newPayMenus = this.payMenus.slice(this.gameMinIndex,this.gameMaxIndex)
        }
      }
    },
    created() {
      this.getPaymentConfigInfo({terminalType: 0});
    },
    watch:{
      payMenus(item){
        this.active = item[0].name
        this.setPaytype(item[0])
        
        this.gamelen = this.payMenus.length;
          console.log(this.payMenus.length);
        if (this.payMenus.length>5) {
          this.newPayMenus = this.payMenus.slice(0,5)
          console.log('dayuwu');
        }else{
          this.newPayMenus = this.payMenus;
          console.log("xiaoyu");
        }
      }
    }
  };

</script>
<style lang="scss" scoped>
    .mainDev{
        color: #b2b2b2;
        width: 100%;
        border-bottom: 1px dotted #cccccc;
        text-align: center;
        .payBox{
          display: inline-block;
          border-left: 1px solid #cccccc;
          border-right: 1px solid #cccccc;
          width: 92%;
          margin: 5px auto;
          .gameDev{
            cursor: pointer;
            padding: 15px 0;
            width: 19%;
            display: inline-block;
            text-align: center;
            &.active{
              border-bottom: 2px solid #ed7e12;
              color: #ed7e12;
            }
            .name{
                font-size: 17px;
                color: #666;
                .iconyg{
                  font-size: 24px;
                  color: #ed7e12;
                }
            }
            .money{
                color: #ecf4f2;
                font-size: 16px;
                margin-top: 12px;
            }
            .iconfont{
              color: #353f8d;
            }
          } 

        }
        .posl{
          position: relative;
          left: -29px;
        }
        .next{
            background: #16705e;
            display: inline-block;
            height: 20px;
            vertical-align: middle;
            cursor: pointer;
            .ico-pre{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              border-color: #fff #ed7e12 #fff #fff;
            }
            .ico-next{
              width: 0;
              height: 0;
              border: 10px solid;
              position: absolute;
              border-color: #fff #fff #fff #ed7e12;
              margin-left: 10px;
            }
        }
    }
</style>
