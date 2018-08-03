// import agent from './agent';
import user from './user'
import agent from './agent'
import common from './common'
import app from './app'

import { AUTH_NAME } from '@/store/types'// 权限名称
const index = () => import(/* webpackChunkName: "showh5index" */'mobile/views/show/index')// 首页

const slotgame = () => import(/* webpackChunkName: "showh5slot" */'mobile/views/show/slotgame/index')// 游戏大厅
const preferential = () => import(/* webpackChunkName: "showh5pros" */'mobile/views/show/promo')// 优惠列表

const login_index = () => import(/* webpackChunkName: "showh5login" */'mobile/views/auth/login')// 用户登陆
const login_register = () => import(/* webpackChunkName: "showh5register" */'mobile/views/auth/register-user')// 用户注册
// let agent_login = () => import(/* webpackChunkName: "show" */'mobile/views/auth/login'); //代理登陆
const agent_register = () => import(/* webpackChunkName: "show" */'mobile/views/auth/register-agent') // 代理注册
// let register_success = () => import(/* webpackChunkName: "show" */'mobile/views/auth/register-success')//注册成功提示页面

const notice = () => import(/* webpackChunkName: "showh5notice" */'mobile/views/show/notice')// 网站公告

export default [
  {
    path: '',
    component: index,
    redirect:'/index',
    meta: {
      noCache: true, // 是否不缓存改组件,
      meta: {
        title: '首页'
      }
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      noCache: true, // 是否不缓存改组件,
      meta: {
        title: '首页'
      }
    }
  },
  {
    path: '/preferential',
    name: 'preferential',
    component: preferential,
    meta: {
      title: '优惠活动'
    }
  },
  {
    path: '/slotgame/:type?',
    name: 'slotgame',
    component: slotgame,
    meta: {
      title: '游戏平台',
      headName: '游戏平台',
      noCache: true // 是否不缓存改组件,
    }
  },
  {
    path: '/notice',
    name: 'notice',
    component: notice,
    meta: {
      title: '网站公告',
      headName: '网站公告'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login_index
  },
  {
    path: '/register',
    name: 'register',
    component: login_register
  },
  {
    path: '/agent/register',
    name: 'agentregister',
    component: agent_register,
    meta: {
      title: '代理注册'
    }
  },
  //  {
  //    path: "/login/registersuccess",
  //    name: "registersuccess",
  //    component: register_success
  //  },
  // ...agent,
  ...user,
  ...common,
  ...agent,
  ...app
]
