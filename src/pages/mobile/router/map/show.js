/**
 * 说明，show文档里的都是展示有关的页面，功能页面不要放这里，例如个人中心
 */
// 首页
const index = () =>
  import ( /* webpackChunkName: "showh5index" */ 'mobile/views/show/index')
// 游戏大厅
const slotgame = () =>
  import ( /* webpackChunkName: "showh5slot" */ 'mobile/views/show/slotgame/index')
// 优惠大厅
const preferential = () =>
  import ( /* webpackChunkName: "showh5pros" */ 'mobile/views/show/promo')
// 登陆页面
const login_index = () =>
  import ( /* webpackChunkName: "showh5login" */ 'mobile/views/auth/login')
// 用户注册页面
const login_register = () =>
  import ( /* webpackChunkName: "showh5register" */ 'mobile/views/auth/register-user')
// 代理注册页面
const agent_register = () =>
  import ( /* webpackChunkName: "show" */ 'mobile/views/auth/register-agent') // 代理注册
// 公告页面
const notice = () =>
  import ( /* webpackChunkName: "showh5notice" */ 'mobile/views/show/notice') // 网站公告
// 代理加盟页面
const cooperation = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/index')
const advantage = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/advantage')
const proce = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/proce')
const question = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/question')
const contact = () => import(/* webpackChunkName: "agent" */'mobile/views/show/cooperation/contact')
export default [{
    path: '',
    component: index,
    redirect: '/index',
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
]
