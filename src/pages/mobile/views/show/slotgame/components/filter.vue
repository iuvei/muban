<template>
  <transition name="fade">
    <div class="slotgame-filter" v-show="showFilter">
      <!-- <div class="filter-category">
        <div v-for="item in data" :class="{active:cur==item.value}" @click="cur=item.value" :key="item.value">
          {{item.name}}
        </div>
      </div> -->
      <div class="filter-btn" v-for="(mydata,i) in data" :key="i">
        <h3>{{mydata.title}}</h3>
        <ul class="filter_item_content cfx">
          <li v-for="(item,i) in mydata.data" :class="[{active:item.value==mydata.active},'filter_item']" :key="item.value">
            <a href="javascript:;" v-if="!item.href" @click="search(item,i,mydata)">{{item.name}}</a>
            <a v-else @click="open(item.href, item.name, 900, 640, true, islogin)">{{item.name}}</a>
          </li>
        </ul>
        <div class="space_border_wrap">
          <div class="space_border"></div>
        </div>
      </div>
      <vButton @click="searching">完成</vButton>
    </div>
  </transition>
</template>
<script>
  import {
    Games
  } from "@/assets/data"
  import vButton from "mobile/components/form/button"
  import openWindow from '@/util/openWindow'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        cur: "category",
        showFilter:false,
        data: {
          platform: {
            title: "游戏平台",
            filter: "category",
            active: "",
            data: [{
              name: "全部平台",
              value: ""
            }, {
              name: "PT",
              value: "PT"
            }, {
              name: "MG",
              value: "MGS"
            }, {
              name: "DT",
              value: "DT"
            }, {
              name: "NT",
              value: "NT"
            }, {
              name: "PNG",
              value: "PNG"
            }, {
              name: "TGP",
              value: "TGP"
            }, {
              name: "CQ9",
              calue: "CQ9"
            }]
          },
          line: {
            title: "赔付线数",
            filter: "line",
            active: "",
            data: [{
              name: "全部",
              value: ""
            }, {
              name: "全赔",
              value: "100-1024"
            }, {
              name: "1-15",
              value: "1-15"
            }, {
              name: "16-40",
              value: "16-140"
            }, {
              name: "41-100",
              value: "41-100"
            }, {
              name: "其它",
              value: "1025-2048"
            }]
          },
          type: {
            title: "游戏类型",
            filter: "tag",
            active: "",
            data: [{
                name: "全部",
                value: ""
              }, {
                name: "热门",
                value: "HOT"
              }, {
                name: "最新",
                value: "NEW"
              }, {
                name: "经典",
                value: "CLA"
              }, {
                name: "彩金池",
                value: "AMA"
              }, {
                name: "多旋转老虎机",
                value: "CIR"
              },
              {
                name: "消消乐游戏",
                value: "ETL"
              }
            ]
          },
        }
      }
    },
    methods: {
      search(item, i, filter) {
        if (filter.active == item.value) return;
        filter.active = item.value;
        this.$bus.$emit('serachGame', filter.filter, item.value);
      },
      open(url, title, w, h, needLogin, loginState) {
        openWindow(url, title, w, h, needLogin, loginState)
      },
      searching() {
        this.showFilter=false
      }
    },
    computed: {
      ...mapGetters(["islogin"])
    },
    created() {
      if (this.$route.params.type) {
        this.data.platform.active = this.$route.params.type;
      }
      this.$bus.$on('showFilter',EventData=>{
        this.showFilter=true
      })
    },
    components: {
      vButton
    },
  };

</script>
<style lang="scss">
  @import "~mobile/assets/scss/mixin.scss";

  .slotgame-filter {
    padding-top: r(20);
    padding-bottom: r($footer-h);
    position: absolute;
    top: r(86);
    left: 0;
    z-index: 99;
    width: 100%; // min-height:100vh;
    height: 70vh;
    overflow-y: scroll;
    background: #fff; // .filter-category {
    //   display: flex;
    //   padding-left: r(30);
    //   text-align: center;
    //   @include f(28px);
    //   margin: r(20) 0;
    //   div {
    //     flex: 1;
    //     line-height: r(60);
    //     @include f(30px);
    //     border-bottom: 3px solid #d4d0d0;
    //     &.active {
    //       color: $cl1;
    //       border-bottom: 3px solid $cl1;
    //     }
    //   }
    // }
    h3 {
      margin-bottom: r(20); // padding-left: r(30);
      @include f(26px);
      line-height: 1.3;
      color: rgba(255, 126, 40, 1);
      font-weight: normal;

      &:before {
        content: "";
        display: inline-block;
        width: 6px;
        height: r(30);
        background: rgba(255, 126, 40, 1);
        margin-right: r(15);
        vertical-align: middle;

      }
    }
    .filter_item_content {
      padding: 0 r(14) 0 0;
    }
    .filter_item_content .filter_item {
      float: left;
      margin: 0 0 r(20) 0;
      padding: 0 r(14);
      width: 33.33%;
      box-sizing: border-box;
      height: r(52);
      line-height: r(52);
    }
    .filter_item_content .filter_item a {
      display: block; // background: #fff;
      background: rgba(249, 249, 249, 1);
      /* Old browsers */
      background: linear-gradient(to bottom, rgba(249, 249, 249, 1), rgba(216, 216, 216, 1));
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      background: -moz-linear-gradient(to bottom, rgba(249, 249, 249, 1), rgba(216, 216, 216, 1));
      /* FF3.6-15 */
      background: -webkit-linear-gradient(to bottom, rgba(249, 249, 249, 1), rgba(216, 216, 216, 1));
      /* Chrome10-25,Safari5.1-6 */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#41afe6', endColorstr='#218eb7', GradientType=0);
      /* IE6-9 */
      border: 1px solid #b3b3b3;
      text-align: center;
      color: rgba(73, 76, 79, 1);
      @include f(24px);
      border-radius: 5px;
    }
    .filter_item_content .filter_item a:active,
    .filter_item_content .filter_item.active a {
      // background: #eee;
      color: rgba(255, 126, 40, 1);
    }

    .space_border {
      margin: r(20) 0;
      height: 1px;
      width: 100%;
      background: #ccc;
    }
  }

</style>
