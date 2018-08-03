import { AUTH_NAME } from '@/store/types'

import master from 'mobile/components/master' // 二级路由模板页
const index = () => import(/* webpackChunkName: "userh5index" */'mobile/views/user/index/index')
const message = () => import(/* webpackChunkName: "userh5message" */'mobile/views/common/message') // 站内消息
const log = () => import(/* webpackChunkName: "userh5log" */'mobile/views/user/log')// 记录消息
const personal = () => import(/* webpackChunkName: "userh5info" */'mobile/views/user/personal') // 会员个人资料
const security = () => import(/* webpackChunkName: "userh5security" */'mobile/views/user/security') // 安全中心

const save_send = () => import(/* webpackChunkName: "userh5savesend" */'mobile/views/user/save-send')
const wash_code = () => import(/* webpackChunkName: "userh5washcode" */'mobile/views/user/wash-code')
const discount_code = () => import(/* webpackChunkName: "userh5discount" */'mobile/views/user/discount-code')
const red_envelope = () => import(/* webpackChunkName: "userh5discount" */'mobile/views/user/red-envelope')
const help_gold = () => import(/* webpackChunkName: "userh5helpgold" */'mobile/views/user/help-gold')
const vip_gold = () => import(/* webpackChunkName: "userh5vip" */'mobile/views/user/vip-gold')
const birthday_gold = () => import(/* webpackChunkName: "userh5birthday" */'mobile/views/user/birthday-gold')
const recommend_firend = () => import(/* webpackChunkName: "userh5recommend" */'mobile/views/user/recommend-firend')
const experience_gold = () => import(/* webpackChunkName: "userh5experience" */'mobile/views/user/experience-gold')

export default [
  {
    path: '/user/index',
    name: 'user_index',
    component: index,
    meta: {
      auth: [AUTH_NAME.USER], // 需要是会员
      title: '个人中心'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: master, // 一级路由版
    meta: {
      auth: [AUTH_NAME.USER]
    },
    children: [
      {
        path: 'personal',
        name: 'user_personal',
        component: personal,
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT],
          headName: '个人资料'
        }
      },
      {
        path: 'security',
        name: 'user_security',
        component: security,
        meta: {
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT],
          headName: '安全中心'
        },
        children: []
      },
      {
        path: 'log',
        name: 'user_log',
        component: log,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '记录查询'
        }
      },
      {
        path: 'message',
        name: 'user_message',
        component: message,
        meta: {
          headName: '站内信',
          auth: [AUTH_NAME.USER, AUTH_NAME.AGENT] // 需要会员和代理
        }
      },
      {
        path: 'experiencegold',
        name: 'user_experiencegold',
        component: experience_gold,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '体验金'
        }
      },
      {
        path: 'savesend',
        name: 'user_savesend',
        component: save_send,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '存送优惠'
        }
      },
      {
        path: 'washcode',
        name: 'user_washcode',
        component: wash_code,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '洗码'
        }
      },
      {
        path: 'helpgold',
        name: 'user_helpgold',
        component: help_gold,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '救援金'
        }
      },
      {
        path: 'vipgold',
        name: 'user_vipgold',
        component: vip_gold,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '自助晋级'
        }
      }, {
        path: 'birthdaygold',
        name: 'user_birthdaygold',
        component: birthday_gold,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '生日礼金'
        }
      },
      {
        path: 'recommendfirend',
        name: 'user_recommendfirend',
        component: recommend_firend,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '推荐好友'
        }
      },
      {
        path: 'discountcode',
        name: 'user_discountcode',
        component: discount_code,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '优惠券'
        }
      },
      {
        path: 'redenvelope',
        name: 'red_envelope',
        component: red_envelope,
        meta: {
          auth: [AUTH_NAME.USER],
          headName: '红包优惠券'
        }
      }

    ]
  }
]
