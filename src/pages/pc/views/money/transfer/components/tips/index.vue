<template>
    <div class="tipsDiv">
        <p class="tipsTitle">温馨提示：</p>
        <p class="tipsBox" v-for="item in tips" :key="item">{{item}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tips:[
                "需要申请首存的玩家，申请成功前请勿在此转账，请进入个人中心-自助优惠-存送优惠-选择要申请的首存平台，进行申请操作，否则错过无法再次申请。",
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.tipsDiv{
    font-size: 15px;
    line-height: 30px;
    width: 800px;
    .tipsTitle{
        color: #666666;
    }
    .tipsBox{
        color:#b5b5b5;
    }
}
</style>

