<template>
  <div class="loged" v-if="isUser">
    <div class="line1">
      <div class="info">
        Hi,&nbsp;&nbsp;{{userData.loginname}}&nbsp;&nbsp;主账户余额:&nbsp;&nbsp;{{userData.accountMoney}}
        <span class="icobjh bjh-shuaxin" @click="getGameMoney('MAIN')"></span>
      </div>
      <div class="btns">
        <router-link class="m-btn" :to="{name:'finance_deposit'}">存款</router-link>
        <router-link class="m-btn" :to="{name:'finance_transfer'}">转账</router-link>
      </div>
    </div>
    <div class="line2">
      <span class="l-btn sign" @click="doSignRecord">
        <span class="icobjh bjh-qiandao"></span>签到
      </span>
      <router-link class="l-btn" :to="{name:'user'}">
        <span class="icobjh bjh-z-user"></span>用户中心
      </router-link>
      <span class="l-btn" @click="$store.dispatch('LOGIN_OUT')">
        <span class="icobjh bjh-dianyuan"></span>退出
      </span>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  import {getGameMoney,doSignRecord} from '@/api/user'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(["userData","isUser"]),
    },
    methods: {
      ...mapActions(["LOGIN_OUT"]),
      doSignRecord(){
        doSignRecord().then(res=>{
          toast(res.message)
        })
      },
      getGameMoney(val) {
        this.userData.accountMoney = "正在查询.."
        getGameMoney({gameCode: val}).then(res => {
          if (res.success) {
            this.userData.accountMoney = res.data;
          }
          else {
            toast(res.message)
            this.userData.accountMoney = '查询失败'
          }
        })
      },
    },
    created() {}
  };

</script>
<style lang="scss" scoped>
  .loged {
    color: #fff;
    font-size: 14px;
    width:500px;
    margin-top:20px;
    .line1 {
      display:flex;
      justify-content: flex-end;
      .info {
        .icobjh {
          display:inline-block;
          margin-left: 10px;
          font-size: 22px;
          vertical-align:middle;
          cursor:pointer;
          transition:all 0.5s;
          &:hover{
            transform:rotate(180deg);
          }
        }
      }
      .btns {
        .m-btn {
          display: inline-block;
          height:26px;
          line-height:26px;
          width:62px;
          text-align:center;
          border-radius:5px;
          cursor:pointer;
          margin-left:4px;
          color:#343434;
          background: rgb(255, 236, 183);
          /* Old browsers */
          background: -moz-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* FF3.6-15 */
          background: -webkit-linear-gradient(top, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to bottom, rgba(255, 236, 183, 1) 0%, rgba(255, 209, 120, 1) 100%);
          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffecb7', endColorstr='#ffd178', GradientType=0);
          /* IE6-9 */
        }
      }
    }
    .line2{
      margin-top:14px;
      text-align:right;
      .l-btn{
        display:inline-block;
        height:28px;
        line-height:28px;
        width:110px;
        text-align:center;
        border-radius:5px;
        margin-left:12px;
        font-size:14px;
        cursor:pointer;
        background: rgb(253,157,128); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(253,157,128,1) 0%, rgba(202,82,54,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(253,157,128,1) 0%,rgba(202,82,54,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(253,157,128,1) 0%,rgba(202,82,54,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fd9d80', endColorstr='#ca5236',GradientType=0 ); /* IE6-9 */
        .icobjh{
          margin-right:10px;
          font-size:18px;
          vertical-align:middle;
        }
        &.sign{
          border-radius:20em;
        }
      }
    }
  }

</style>
