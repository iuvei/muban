<template>
    <div class="slotgameContent">
        <div class="slotgameBox" v-for="item in data" :class="{active:cur==item.value}" @click="search(item)" :key="item.value">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import {Games} from "@/assets/data"
export default {
    data() {
        return{
            cur: "category",
            data: {
                category: {
                    name: "老虎机平台",
                    value: "category",
                    
                },
                reality: {
                    name: "真人平台",
                    value: 'reality',
                    
                },
                catchfish: {
                    name: "捕鱼/棋牌",
                    value: "catchfish",
                    
                },
                sports: {
                    name: "竞技体育",
                    value: 'sports'
                },
                VR:{
                    name: "VR彩票",
                    value: 'vr',
                }
            }
        }
    },
    methods:{
        search(item){
            this.cur = item.value
            console.log(item);
            this.$emit('fromMenu',item.value);
        }
    },
    created(){
        this.search(this.data.category)
    }
}
</script>

<style lang="scss" scoped>
    @import "~mobile/assets/scss/mixin.scss";
    .slotgameContent{
        width: 100%;
        background-color: $main-cl;
        height: r(100);
        line-height: r(74);
        text-align: center;
        position: fixed;
        z-index: 99;
        top: r(100);
        display: flex;
        .slotgameBox{
            width: 25%;
            padding: r(10);
            display: inline-block;
            @include f(28px);
            color: rgba(114,114,114,1);
            &.active{
                color: rgba(255,126,40,1);
                border-bottom: 3px solid rgba(255,126,40,1);
            }
        }
    }
</style>

