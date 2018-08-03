<template>
  <div class="select">
    <span class="tabs" @click="setMenu('')" :class="{active:filter==''}">全部优惠</span>
    <span :class="['tabs',{active:filter==item.typeId}]" v-for="item in menuData" @click="setMenu(item.typeId)" :key="item.typeId">{{ item.typeName }}</span>
  </div>
</template>
<script>
  import {
    queryLatestPreferential
  } from '@/api/show'
  export default {
    name: "",
    data() {
      return {
        filter: "",
        myData: {
          types: [],
        },
        menuData:[]
      }
    },
    computed: {
      filterData() {
        if (this.filter == '') {
          return this.myData.records;
        }
        return this.myData.records.filter((item, i) => {
          return item.type == this.filter;
        })
      }
    },
    watch: {},
    methods: {
      setMenu(type){
        this.filter=type;
        this.$bus.$emit('filtPros',type);
      }
    },
    created() {
      this.$bus.$on('setProMenu',eventData=>{
        this.menuData=eventData;
      })
      console.log(this.menus);
      queryLatestPreferential(
        {
          platFormType: "pc",
          type: "000",
          pageIndex: 0,
          pageSize: 0
        }
      ).then(res => {
        // console.log("post");

        let data = {
          "types":[
            {"typeId": "001", "typeName": "专题优惠"}, 
            {"typeId": "002", "typeName": "长期优惠"}, 
            {"typeId": "003", "typeName": "限时优惠"}, 
            {"typeId": "004", "typeName": "当月优惠"}
          ], 
        }
        this.myData = data;

        /*res.success && (
          res.data.records.map(item => {
            item.already = false;
            return item;
          }),
          this.myData = res.data
        )*/
      })
    },
    activated() {},
    components: {}
  }

</script>
<style lang="scss" scoped>
.select {
      padding: 50px 0 20px;
      margin: 0 20px;
      border-bottom: 1px solid #e6e6e6;
      text-align: center;

      span{
        display: inline-block;
        height: 32px;
        line-height: 32px;
        text-align: center;
        padding: 0 30px;
        border-radius: 16px;
        background: #d7d7d7;
        color: #333333;
        margin: 0 15px;
        margin-bottom: 10px;
        font-size: 16px;

        &:hover,&.active{
          background: #ed7e12;
          color: #fff;
        }
      }
    }


</style>
