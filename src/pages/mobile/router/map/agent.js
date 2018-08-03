// 代理 路由
import { AUTH_NAME } from '@/store/types' // 权限名称
import master from 'mobile/components/master' // 二级路由模板页

const cooperation = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/index')// 代理加盟
const advantage = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/advantage')// 代理加盟
const proce = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/proce')// 代理加盟
const question = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/question')// 代理加盟
const contact = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/contact')// 代理加盟

const index = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/index/index') // 代理管理中心首页
const agent_register = () => import(/* webpackChunkName: "show" */'mobile/views/auth/register-agent') // 代理注册
const ptcommission = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/ptcommission') // 管理中心佣金报表

const memberlist = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/member-list')// 管理中心会员列表
const memberbill = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/member-bill')// 管理中心会员账务

const creditlog = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/credit-log')// 管理中心额度记录
// const personal = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/personal')// 管理中心个人中心
// const bindbank = () => import(/* webpackChunkName: "agent" */'mobile/views/agent/bind-bank')// 管理中心绑定银行卡

export default [
  {
    path: '/agent/index',
    name: 'agent_index',
    component: index,
    meta: {
      auth: [AUTH_NAME.AGENT], // 需要是会员
      title: '代理中心'
    }
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    redirect: '/cooperation/advantage',
    // component: { template: '<router-view></router-view>' }, // 一级路由版
    component: cooperation,
    children: [
      // { path: '', component: cooperation },

      // {
      //   path: 'index',
      //   name: 'cooperation_index',
      //   component: cooperation,
      //   meta: {
      //     headName: '代理'
      //   }
      // },
      {
        path: 'advantage',
        name: 'agent_advantage',
        component: advantage,
        meta: {
          headName: '品牌介绍'
        }
      },
      {
        path: 'proce',
        name: 'agent_proce',
        component: proce,
        meta: {
          headName: '代理制度'
        }
      },
      {
        path: 'question',
        name: 'agent_question',
        component: question,
        meta: {
          headName: '常见问题'
        }
      },
      {
        path: 'contact',
        name: 'agent_contact',
        component: contact,
        meta: {
          headName: '联系我们'
        }
      },
      {
        path: 'register',
        name: 'agentregister',
        component: agent_register,
        meta: {
          title: '代理注册'
        }
      }
    ]
  },
  {
    path: '/agent',
    name: 'agent',
    redirect: '/agent/index',
    component: master, // 一级路由版
    meta: {
      auth: [AUTH_NAME.AGENT]// 需要是代理
    },
    children: [
      { path: '', component: index },
      { path: 'index', name: 'agent_index', component: index },
      {
        path: 'ptcommission',
        name: 'agent_ptcommission',
        component: ptcommission,
        meta: {
          headName: '佣金报表'
        }
      },
      {
        path: 'memberlist',
        name: 'agent_memberlist',
        component: memberlist,
        meta: {
          headName: '会员列表'
        }
      },
      {
        path: 'memberbill',
        name: 'agent_memberbill',
        component: memberbill,
        meta: {
          headName: '会员账务'
        }
      },
      {
        path: 'creditlog',
        name: 'agent_creditlog',
        component: creditlog,
        meta: {
          headName: '额度记录'
        }
      },
      // {
      //   path: 'personal',
      //   name: 'agent_personal',
      //   component: personal,
      //   meta: {
      //     headName: '个人中心'
      //   }
      // },
      // {
      //   path: 'bindbank',
      //   name: 'agent_bindbank',
      //   component: bindbank,
      //   meta: {
      //     headName: '绑定银行卡/折号'
      //   }
      // }
    ]
  }
]
