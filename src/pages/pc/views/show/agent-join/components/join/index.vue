<template>
  <div class="agent-apply-join">
    <div class="container">
      <register-agent></register-agent>
    </div>
  </div>
</template>
<script>
  import registerAgent from 'pc/views/common/auth/register-agent'

  export default {
    name: "",
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    activated() {
    },
    components: {registerAgent}
  }
</script>
<style lang="scss">
  .agent-apply-join {
    padding-top: 139px;
    padding-bottom: 450px;
    .container {
      background: url("./images/border.png");
      width: 1007px;
      height: 477px;
      padding-top: 66px;
    }
  }
</style>
