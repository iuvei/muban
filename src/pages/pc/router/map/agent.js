// 代理 路由
import {
  AUTH_NAME
} from '@/store/types' // 权限名称
import Layout from 'pc/master/agent'
const summary = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/summary') // 数据汇总
const ptcommission = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/ptcommission') // 佣金报表
const memberlist = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/member-list') // 会员列表
const creditlog = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/credit-log') // 额度记录
const memberbill = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/member-bill') // 会员账务
const agentDetail = () =>
  import(/* webpackChunkName: "agentpc" */ 'pc/views/agent/agent-detail') // 代理个人中心

export default [
  {
    path: '/agent',
    name: 'agentHome',
    component: Layout,
    children: [{
      path: 'summary',
      name: 'agent_summary',
      component: summary
    }]
  },
  {
    path: 'summary',
    name: 'agent_summary',
    component: summary,
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },
  {
    path: 'ptcommission',
    name: 'agent_ptcommission',
    component: ptcommission,
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },
  {
    path: 'memberList',
    name: 'agent_memberlist',
    component: memberlist,
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },
  {
    path: 'creditlog',
    name: 'agent_creditlog',
    component: creditlog,
    meta: {
      auth: [AUTH_NAME.AGENT]
    }
  },
  {
    path: 'agentDetail',
    name: 'agentDetail',
    component: agentDetail,
    redirect: 'agentDetail/setting',
    meta: {
      auth: [AUTH_NAME.AGENT]
    },
    children: [
      {
        path: 'setting',
        component() {
          return import(/* webpackChunkName: "settingpcsetting" */ 'pc/views/user/setting') // 用户设置
        },
        name: 'agent_setting',
        redirect: 'setting/datum',
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
        },
        children: [
          {
            path: 'datum',
            component() {
              return import(/* webpackChunkName: "userpcinfo" */ 'pc/views/user/datum') // 个人资料
            },
            name: 'agent_datum',
            meta: {
              auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
            }
          }
        ]
      },
      {
        path: 'banks',
        component() {
          return import(/* webpackChunkName: "bankspcbank" */ 'pc/views/user/banks') // banks设置
        },
        name: 'agent_banks',
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
        }
      },
      {
        path: 'passowrd',
        component() {
          return import(/* webpackChunkName: "passwordpcpwd" */ 'pc/views/user/pwd/password') // password
        },
        name: 'agent_password',
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
        }
      },
      {
        path: 'payword',
        component() {
          return import(/* webpackChunkName: "passwordpcpaypwd" */ 'pc/views/user/pwd/payword') // payword
        },
        name: 'agent_payword',
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT]
        }
      }
    ]
  },
  {
    path: 'memberbill',
    name: 'agent_memberbill',
    component: memberbill,
    redirect: 'memberbill/deposit',
    meta: {
      auth: [AUTH_NAME.AGENT]
    },
    children: [{
      path: 'deposit',
      name: 'agent_deposit',
      component() {
        return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/deposit')
      },
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    },
    {
      path: 'withdraw',
      name: 'agent_withdraw',
      component() {
        return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/withdraw')
      },
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    },
    {
      path: 'feedback',
      name: 'agent_feedback',
      component() {
        return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/feedback')
      },
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    },
    {
      path: 'promo',
      name: 'agent_promo',
      component() {
        return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/promo')
      },
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    },
    {
      path: 'winlost',
      name: 'agent_winlose',
      component() {
        return import(/* webpackChunkName: "discountpcsavesend" */ 'pc/views/agent/member-bill/components/winlose')
      },
      meta: {
        auth: [AUTH_NAME.AGENT]
      }
    }]
  }
]
