import { AUTH_NAME } from '@/store/types'// 权限名称

import master from 'mobile/components/master' // 二级路由模板页
const deposit = () => import(/* webpackChunkName: "commonh5deposit" */'mobile/views/money/deposit') // q存款
const drawmoney = () => import(/* webpackChunkName: "commonh5draw" */'mobile/views/money/drawmoney')// 取款
const transfer = () => import(/* webpackChunkName: "commonh5trans" */'mobile/views/money/transfer')// 转账
const payupdate = () => import(/* webpackChunkName: "commonh5payupdate" */'mobile/views/password/pay-update')// 支付密码修改
const payset = () => import(/* webpackChunkName: "commonh5payset" */'mobile/views/password/pay-set')// 支付密码设置
const loginupdate = () => import(/* webpackChunkName: "commonh5loginupdate" */'mobile/views/password/login-update')// 支付密码设置
const addBank = () => import(/* webpackChunkName: "commonh5bindbank" */'mobile/views/common/bank-bind') // 银行卡绑定

const backCall = () => import(/* webpackChunkName: "commonh5callback" */'mobile/views/common/back-Call') // 电话回拨

import forgotpwd from 'mobile/views/common/forgot-pwd' // 忘记密码
const forgotpwdPhone = () => import(/* webpackChunkName: "commonh5findpwd" */'mobile/views/common/forgot-pwd/components/find-phone') // 忘记密码
const forgotpwdEmail = () => import(/* webpackChunkName: "commonh5findpwd" */'mobile/views/common/forgot-pwd/components/find-email') // 忘记密码

const forgotPayword = () => import(/* webpackChunkName: "commonh5findpwd" */'mobile/views/common/findback') // 忘记支付密码
const redirect_deposit = (resolve) => resolve(require('mobile/views/common/redirect'))// APP验证跳转

export default [{
  path: '/money',
  component: master, // 二级路由模板页
  meta: {
    auth: [AUTH_NAME.USER] // 需要会员
  },
  children: [
    { path: '', component: deposit },
    {
      path: 'deposit',
      name: 'money_deposit',
      component: deposit,
      meta: {
        auth: [AUTH_NAME.USER],
        headName: '充值',
        noCache: true // 不缓存该组件
      }
    },
    {
      path: 'drawmoney',
      name: 'money_drawmoney',
      component: drawmoney,
      meta: {
        headName: '提现',
        noCache: true, // 不缓存该组件
        auth: [AUTH_NAME.USER, AUTH_NAME.AGENT] // 会员代理
      }
    },
    {
      path: 'transfer',
      name: 'money_transfer',
      component: transfer,
      meta: {
        auth: [AUTH_NAME.USER],
        headName: '转账',
        noCache: true // 不缓存该组件
      }
    }
  ]
},
{
  path: '/pwd',
  name: 'pwd',
  meta: {
    auth: [AUTH_NAME.USER, AUTH_NAME.AGENT] // 需要会员
  },
  component: master, // 一级路由版
  children: [
    {
      path: 'payset',
      name: 'payset',
      component: payset,
      meta: {
        headName: '设置支付密码',
        noCache: true // 是否不缓存组件
      }
    },
    {
      path: 'payupdate',
      name: 'payupdate',
      component: payupdate,
      meta: {
        headName: '修改支付密码',
        noCache: true // 是否不缓存组件
      }
    },
    {
      path: 'forgotPayword',
      name: 'forgotPayword',
      component: forgotPayword,
      meta: {
        headName: '重置支付密码',
        noCache: true // 是否不缓存组件
      }
    },

    {
      path: 'loginupdate',
      name: 'loginupdate',
      component: loginupdate,
      meta: {
        headName: '修改登录密码',
        noCache: true // 是否不缓存组件
      }
    }
  ]
},

{
  path: '/datum',
  name: 'datum',
  component: master, // 一级路由版
  meta: {
    auth: [AUTH_NAME.USER, AUTH_NAME.AGENT] // //会员 -代理
  },
  children: [
    {
      path: 'addbank',
      name: 'addbank',
      component: addBank,
      meta: {
        headName: '绑定银行卡',
        noCache: true // 不缓存该组件
      }
    }
  ]
},
{
  path: '/help',
  name: 'help',
  component: master, // 一级路由版
  children: [
    {
      path: 'backCall',
      name: 'backCall',
      component: backCall,
      meta: {
        headName: '电话回拨'
      }
    }
  ]
},
{
  path: '/forgotpwd',
  name: 'forgotpwd',
  component: forgotpwd,
  redirect: '/forgotpwd/phone',
  meta: {
    headName: '忘记密码'
  },
  children: [
    {
      path: 'phone',
      name: 'forgotpwdPhone',
      component: forgotpwdPhone,
      meta: {
        title: '短信找回'
      }
    },
    {
      path: 'email',
      name: 'forgotpwdEmail',
      component: forgotpwdEmail,
      meta: {
        title: '邮箱找回'
      }
    }
  ]
},
{
  path: "/redirectDeposit",
  name: "redirect_deposit",
  component: redirect_deposit,
  meta:{
    title: "正在跳转"
  }
}
]
