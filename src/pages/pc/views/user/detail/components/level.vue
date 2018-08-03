<template>
    <div class="u-c-shows">
        <div class="imgGroup">
            <div v-for="item in levels" :key="item.levelNumber" class="imgDev">
                <div class="logos" :class="`level${item.levelNumber}`"></div>
                <span>{{item.name}}</span>
            </div>
        </div>
        <el-steps :active="userData.levelNumber + 1" finish-status="success" :align-center='true' space="14.28%">
            <el-step v-for="item in levels" :key="item.levelNumber" :description="item.tip"></el-step>
        </el-steps>
        <div class="tips" :class="`pos${userData.levelNumber}`">
            <div class="triangle"></div>
            <div class="msgbox" v-if="userData.levelNumber < 6" >您已投注：{{tips.allbet}} <br/> 升级星级VIP，还需投注：{{tips.target}}</div>
            <div class="msgbox" v-else>已到最高等级</div>
        </div>
    </div>
</template>

<script>
import {    mapGetters,    mapActions  } from 'vuex'
import {vipGold} from '@/controls/discount/vipGold'
export default {
    mixins:[vipGold],
    data() {
      return {
          levels:[
              {levelNumber:0,name:'新会员'},
              {levelNumber:1,name:'忠实VIP'},
              {levelNumber:2,name:'青铜VIP'},
              {levelNumber:3,name:'白银VIP'},
              {levelNumber:4,name:'黄金VIP'},
              {levelNumber:5,name:'铂金VIP'},
              {levelNumber:6,name:'钻石VIP',tip:""},
          ],
      };
    },
    props: {},
    methods: {},
    computed: {
//      ...mapGetters(["userData", "islogin", "isAgent", 'isUser', 'showLogin'])
      ...mapGetters(["userData","isUser","unread"]),
    },
    created() {
        this.getVipInfo(this.userData)
        
    },
    activated(){
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
    .imgGroup{
        background-position:center center;
        background-repeat: no-repeat;
        background-size: contain!important;
        text-align: center;
        margin-bottom: 20px;
        .imgDev{
            display: inline-block;
            width: 14.28%;
            .logos{
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain !important;
                height: 80px;
                width: 100%;  
                margin-bottom: 10px;
            }
            .level0{
                background-image: url(./images/LV1.png);
            }
            .level1{
                background-image: url(./images/LV2.png);
            }
            .level2{
                background-image: url(./images/LV3.png);
            }
            .level3{
                background-image: url(./images/LV4.png);
            }
            .level4{
                background-image: url(./images/LV5.png);
            }
            .level5{
                background-image: url(./images/LV6.png);
            }
            .level6{
                background-image: url(./images/LV7.png);
            }
        }
    }
    .tips{
        position: relative;
        left: 8%;
        width: 250px;
        min-height: 40px;
        .msgbox{
            background: #16705e;
            color: #fff;
            width: 150px;
            text-align: center;
            line-height: 1.3rem;
            border-radius: 5px;
            margin: 0 auto;
        }
        .triangle{
            width: 0;
            height: 0;
            border: 10px solid;
            margin: 0 auto;
            border-color: #fff #fff #16705e #fff;
        }
    }
    .pos0{
        left: 8%;
    }
    .pos1{
        left: 8%+14.28%;
    }
    .pos2{
        left: 8%+14.28%*2;
    }
    .pos3{
        left: 8%+14.28%*3;
    }
    .pos4{
        left: 8%+14.28%*4;
    }
    .pos5,.pos6{
        left: 8%+14.28%*5;
    }
</style>

