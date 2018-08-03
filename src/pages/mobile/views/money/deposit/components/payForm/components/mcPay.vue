<template>
  <div class="mcpay">
    <div v-if="active==0">
      <input-inline label="存款姓名">
        <input v-model="submitData.accountName" placeholder="请输入存款人姓名" type="text">
      </input-inline>
      <input-inline label="存款金额">
        <input type="text" :placeholder="placeholder" v-model="submitData.amount" name="amount">
        <span slot="right">元</span>
      </input-inline>
      <v-button @click="depositPost">提交</v-button>
    </div>
    <div v-if="active==1">
      <div class="mc_wx_tips inputbox">
        <p class="m_w_t_title">请您在
          <span class="m_w_t_money">
            <span class="m_w_t_time">{{help_time.min}}</span>：
            <span class="m_w_t_time">{{help_time.sec}}</span>
          </span>时间内按下【确认】
        </p>
        <p>
          确认金额：
          <span class="m_w_t_money">{{submitData.amount}}元</span>
        </p>
        <p class="m_w_t_tips">温馨提示:按下【确认】，方可产生订单
          <br/>否则无法自动到账</p>
      </div>

      <div class="agrees">
        <p class="mc_wx_tips_agree">
          <label>
            <input type="checkbox" id="mc_wx_2" v-model="agree_1"> 本人已同意，如未转账
            <span class="red">{{submitData.amount}}</span>元，导致系统无法匹配存款，本网站概不负责。
          </label>
        </p>
      </div>

      <v-button @click="wxSecCheck">确认</v-button>
    </div>
    <div v-if="active==2" class="mc-order">
      <div class="form_field_warp">
        <h3 class="order-title mb20">我们的收款账户</h3>
        <input-inline label="银行类别：">
          <input type="text" :value="orderData.bank" readonly="readonly" >
          <strong slot="right" class="btn-copy" v-clipboard:copy="orderData.bank" v-clipboard:success="onCopy">复制</strong>
        </input-inline>
        <input-inline label="开户地址：">
          <input type="text" :value="orderData.accountOpenAddr" readonly="readonly" >
          <strong slot="right" class="btn-copy" v-clipboard:copy="orderData.accountOpenAddr" v-clipboard:success="onCopy">复制</strong>
        </input-inline>
        <input-inline label="开户人：">
          <input type="text" :value="orderData.accountname" readonly="readonly">
          <strong slot="right" class="btn-copy" v-clipboard:copy="orderData.accountname" v-clipboard:success="onCopy">复制</strong>
        </input-inline>
        <input-inline label="银行卡号：">
          <input type="text" :value="orderData.bankno" readonly="readonly">
          <strong slot="right" v-clipboard:copy="orderData.bankno" v-clipboard:success="onCopy">复制</strong>
        </input-inline>
      </div>
      <div class="form_field_warp">
        <h3 class="order-title mb20">您的存款信息</h3>
        <input-inline label="存款姓名：">
          <div class="input">
            {{orderData.uaccountname}}
          </div>
          <strong slot="right" v-clipboard:copy="orderData.uaccountname" v-clipboard:success="onCopy">复制</strong>
          
        </input-inline>
        <input-inline label="存款金额：">
          <div class="input">{{orderData.amount}}</div>
          <strong slot="right" class="btn-copy" v-clipboard:copy="orderData.amount" v-clipboard:success="onCopy">复制</strong>
          
        </input-inline>
        <input-inline label="存款方式：" v-if="orderData.payBy">
          <div class="input">{{mcTypech[orderData.payBy].label}}</div>
        </input-inline>
      </div>
      <v-button @click="dialogVisible=true" v-if="orderData.payBy=='wechat'">微信转账教程</v-button>
      <v-button @click="active=0">我已成功付款</v-button>
    </div>
    <tips-mcpay v-model="dialogVisible"></tips-mcpay>
  </div>
</template>
<script>
  import {
    createDepositeOrder,
    getWxZzQuota
  } from "@/api/payment"

  import {
    mcTypech
  } from '@/assets/data/deposit.js'
  import check from '@/util/RegExp'
  import tipsMcpay from './tips-mcpay'
  export default {
    data() {
      return {
        mcTypech,
        active: 0,
        dialogVisible: false,
        submitData: {
          accountName: "",
          payBy: '',
          amount: '',
          discard: false
        },
        help_time: {
          Interval: null,
          init: 0, //分钟整数，接口获取
          min: 0, //显示的分钟
          sec: '00', //显示的秒
        },
        agree_1: false,
        orderData: {},
      }
    },
    methods: {
      onCopy() {
        window.toast('复制成功')
      },
      // 检查
      depositCheck() {
        // 需要添加数字为整数
        if (!this.submitData.payBy) {
          window.toast('请选择存款方式');
          return false
        } else if (!this.submitData.accountName) {
          window.toast('请输入存款人姓名');
          return false
        } else if (!this.submitData.amount) {
          window.toast('请输入存款金额');
          return false
        } else if (this.submitData.order_amount <= ~~this.submitData.order_amount && this.submitItem.customParams && this.submitItem.customParams.enterMode) {
          let msg = ''
          if (this.submitData.customParams.depositLimitOfDay) {
            msg = `存款金额请输入带有两位小数点的数字，如${(Math.random() * 100).toFixed(2)}元。<br>每日存款次数限制为：${this.submitData.customParams.depositLimitOfDay}次`
          } else {
            msg = `存款金额请输入带有两位小数点的数字，如${(Math.random() * 100).toFixed(2)}元。`
          }
          // 风控 要加小数点
          $alert(msg,'存款金额提示')
        }else {
          return true;
        }
      },
      // 如果已存在订单
      showExist() {
        $confirm("<p>1. 如果您已经支付且超过10分钟，请联系在线客服处理该笔订单 <br> 2. 如果未支付，请您先支付该笔订单或者选择废弃该订单</p>", "提示：您存在未处理的订单", {
          confirmText: "废弃并生成新订单",
          cancelText: "查看订单"
        }).then(() => {
          // 确认，废弃并生成新订单
          this.mcSubmit(this.submitData, true)
        }, () => {
          // 取消，查看订单
          this.active = 2;
        });
      },
      // 确认按钮
      depositPost() {
        this.submitData.payBy = this.payItem.id
        console.log('af');
        
        // 赋值当前支付的id
        if (this.depositCheck()) {
          // 是否是微信秒存
          if (this.submitData.payBy == 'wechat') {
            this.getWxZzQuota();
          } else {
            this.mcSubmit(this.submitData);
          }
          // 先检查
        }
      },
      //提交订单
      mcSubmit(data, discard) {
        if (discard) {
          data.discard = true;
        } else {
          data.discard = false;
        }
        createDepositeOrder(data).then((res) => {
          if (res.success) {
            let type = res.data.type;
            this.orderData = res.data;
            if ('UNPAID_ORDER' == type) {
              // 到第二步
              this.showExist();
            } else if ('NEW_ORDER' == type) {
              // 到第三步
              this.active = 2;
            } else if ('BANKCARD_NOTAVAILABLE' == type) {
              $alert('通道维护中，请选择其他存款方式');
            }
          } else {
            $alert(res.message);
          }
        });
      },
      // 微信倒计时
      getWxZzQuota() {
        getWxZzQuota({
          amount: this.submitData.amount
        }).then((result) => {
          $load.close();
          if (result.success) {
            this.active = 1;
            this.submitData.amount = result.data.amount;
            this.timer(result.data.min);
          } else {
            window.toast(result.message)
          }
        }).catch((err) => {

        })
      },
      // 计时器
      timer(min) {
        this.help_time.init = min;
        this.help_time.min = min;
        this.help_time.sec = 0;
        window.clearInterval(this.help_time.Interval);
        this.help_time.Interval = window.setInterval(() => {
          if (this.help_time.min == 0 && this.help_time.sec == 0) {
            // 倒计时结束，返回第一个tab
            window.clearInterval(this.help_time.Interval);
            this.active = 0;
          } else {
            if (this.help_time.sec > 0) {
              this.help_time.sec--;
            } else if (this.help_time.sec <= 0) {
              this.help_time.min--;
              this.help_time.sec = 59;
            }
            this.help_time.sec < 10 ? this.help_time.sec = '0' + parseInt(this.help_time.sec) : this.help_time.sec;
            this.help_time.min < 10 ? this.help_time.min = '0' + parseInt(this.help_time.min) : this.help_time.min;
          }
        }, 1000)
      },
      // 微信秒存协议确认
      wxSecCheck() {
        if (this.agree_1) {
          this.mcSubmit(this.submitData);
        } else {
          window.toast("请同意协议")
        }
      },
    },
    props: {
      payItem: {
        type: Object
      }
    },
    computed: {
      placeholder() {
        if (this.payItem && this.payItem.lowerlimit) {
          return "最少" + this.payItem.lowerlimit + "元，最多" + this.payItem.upperlimit + "元";
        } else {
          return "请输入存款金额";
        }
      }
    },
    components: {
      tipsMcpay
    }
  };

</script>
<style lang="scss" scoped>
  @import "~mobile/assets/scss/mixin.scss";
  .mcpay {
    .mc-title {
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
      text-align: center;
      font-size: 16px;
      line-height: 3;
      margin: 30px 0;
    }
    .mc_wx_tips {
      color: #e7091a;
      text-align: left;
      line-height: 1.5;
      padding: 0 r(40);
      @include f(30px);
      .m_w_t_money {
        @include f(40px);
        font-weight: bold;
      }

    }

    .agrees {
      line-height: 2.5;
      margin-top: r(30);
      padding: 0 r(40);
      input {
        background: #fff;
        width: r(40);
        height: r(40);
      }
    }

    .red {
      color: #e7091a;
      font-weight: bold;
    }
    .mc-order {
      .order-title {
        margin: r(30) 0;
        text-align: center;

      }
    }
  }

</style>
