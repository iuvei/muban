<template>
    <div class="slot-game-list cfx">
        <a v-for="(item,i) in items" class="gameImg" :key="i+item.name" @click="open(item.href, item.name, 900, 640, true, islogin)">
            <img :src="item.imgsrc" :alt="item.name">
        </a>
    </div>
</template>
<script>
import openWindow from '@/util/openWindow'
import {mapGetters} from 'vuex'
import {Games} from "@/assets/data"

const reality = [
    {name: "AG真人", href: Games.href_ag, imgsrc:require('./images/ag.png')},
    {name: "BBIN真人", href: Games.href_bbin, imgsrc:require('./images/bbin.png')},
    {name: "申博真人", href: Games.href_sunbetH5, imgsrc:require('./images/sunbet.png')},
    {name: "OG真人", href: Games.href_og, imgsrc:require('./images/og.png')}
]
const sports = [
    {name: "沙巴体育", href: Games.href_sb_mobile, imgsrc:require('./images/sbsport.png')},
    {name: "平博体育", href: Games.href_pbsport, imgsrc:require('./images/pbsport.png')},
]
const fish = [
    {name: "AG捕鱼", href: Games.href_fish, imgsrc:require('./images/761qp.png')},
    {name: "761棋牌", href: Games.href_city761, imgsrc:require('./images/761qp.png')},
    {name: "开元棋牌", href: Games.href_kyqp, imgsrc:require('./images/bbin.png')},
]
const vr = [
    {name: "VR", href: Games.href_vr, imgsrc:require('./images/761qp.png')},
]
export default {
    data(){
        return{
            items:[]
        }
    },
    methods: {
      open(url, title, w, h, needLogin, loginState) {
        console.log('test')
        openWindow(url, title, w, h, needLogin, loginState)
      },
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    props:{
        value:String
    },
    watch:{
        value(val){
            console.log( 'data-list:'+val);
            switch (val) {
            case 'reality':
                this.items = reality;
                break;
            case 'sports':
                this.items = sports;
                break;
            case 'catchfish':
                this.items = fish;
                break;
            default:
                this.items = vr;
            }
        }
    }
}
</script>

<style lang="scss">
@import "~mobile/assets/scss/mixin.scss";
.slot-game-list{
    .gameImg{
        width: 100%;
        display: block;
        padding: 0 2%;
        margin-bottom: r(20);
        img{
            width: 96%;
        }
    }
}
</style>

