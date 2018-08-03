<template>
  <div class="user-security">
     <!-- 先确认是否已经设置过支付密码 -->
     <pay-update ></pay-update>
     <pay-set></pay-set>
  </div>
</template>
<script>
  import paySet from "pc/views/common/pwd/pay-set" 
  import payUpdate from "pc/views/common/pwd/pay-update"

  export default {
    data() {
      return {
      }
    },
    components: {
      paySet, payUpdate
    },
    computed: {
    },
  };
</script>
