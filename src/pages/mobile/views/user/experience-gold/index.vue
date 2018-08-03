<template>
  <div class="user-experience-gold">
    <!-- 是否可以领取体验金 -->
    <div v-if="canExp">
      <form-tip style="text-align: center">
        可领取体验金{{amount}}元
        <br/> 无投注额要求,游戏账户达到{{limitAmount}}元即可提款
      </form-tip>
        <input-inline label="选择游戏平台" select="1">
          <select v-model="expData.platform">
            <option value="">选择游戏平台</option>
            <option v-for="item in platformData" :value="item.value" :key="item.value">
              {{item.name}}
            </option>
          </select>
        </input-inline>
          <v-button @click="submit">提交</v-button>
          <v-button v-if="!userData.accountName">
            <router-link :to="{name:'user_personal'}" class="link">
              去完善个人信息
            </router-link>
          </v-button>
          <v-button v-if="userData.phoneValidStatus=='0'">
            <router-link :to="{name:'user_personal'}" class="link">
              去验证手机
            </router-link>
          </v-button>
    </div>
    <div v-else>
      <form-tip style="text-align: center">
        {{msg}}
      </form-tip>
    </div>
  </div>
</template>
<script>
  import formTip from "mobile/components/form-tip"
  import {platformData} from "@/assets/data"
  import {mapGetters} from 'vuex'
  import {
    experience
  } from '@/controls/discount/experience'
  export default {
    mixins: [experience],
    data() {
      return {
        platformData
      };
    },
    methods: {
      submit() {
        this.CouponSubmit(this.expData).then(res => {
          window.toast(res.message)
        }).catch(err => {
          console.log(err)
          window.toast(err.message)
        })
      }
    },
    computed: {
      ...mapGetters(["userData"])
    },
    created() {
      this.checkCoupon()
    },
    components: {formTip}
  };
</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .user-experience-gold {
    padding: r(30);

    .text_red{
      color:$cl3;
    }
  }
</style>
