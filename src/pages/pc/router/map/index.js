// import agent from './agent'
import user from './user'

const index = () =>
  import(/* webpackChunkName: "index" */ 'pc/views/show/index') // 首页
const slotgame = () =>
  import(/* webpackChunkName: "slotgame" */ 'pc/views/show/slotgame')
const promo = () =>
  import(/* webpackChunkName: "promo" */ 'pc/views/show/promo')
const download = () =>
  import(/* webpackChunkName: "download" */ 'pc/views/show/download')
const notice = () =>
  import(/* webpackChunkName: "notice" */ 'pc/views/show/notice')
const fish = () =>
  import(/* webpackChunkName: "fish" */ 'pc/views/show/fish')
const real = () =>
  import(/* webpackChunkName: "real" */ 'pc/views/show/real')
const sport = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/sport')
const agentarea = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/agent-area')
const vipPage = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/vip')
// const agentarea = () =>
//  import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-area')
// const agentarea_joinplan = () =>
//  import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-area/components/join-plan')
// const agentarea_applicationprocess = () =>
//  import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-area/components/application-process')
// const agentarea_brandadvantage = () =>
//  import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-area/components/brand-advantage')
// const agentarea_commonproblems = () =>
//  import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-area/components/common-problems')
// const agentjoin = () =>
//   import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-join')
// const agentjoin_index = () =>
//   import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-join/components/index')
// const agentjoin_system = () =>
//   import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-join/components/system')
// const agentjoin_question = () =>
//   import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-join/components/question')
// const agentjoin_join = () =>
//   import(/* webpackChunkName: "agentjoin" */ 'pc/views/show/agent-join/components/join')

// 关于我们路由
const aboutUs = () =>
  import(/* webpackChunkName: "about" */ 'pc/views/show/about')
const aboutUs_tab1 = () =>
  import(/* webpackChunkName: "aboutpc1" */ 'pc/views/show/about/pages/aboutus-tab1')
const aboutUs_tab2 = () =>
  import(/* webpackChunkName: "aboutpc2" */ 'pc/views/show/about/pages/aboutus-tab2')
const aboutUs_tab3 = () =>
  import(/* webpackChunkName: "aboutpc3" */ 'pc/views/show/about/pages/aboutus-tab3')
const aboutUs_tab4 = () =>
  import(/* webpackChunkName: "aboutpc4" */ 'pc/views/show/about/pages/aboutus-tab4')
const aboutUs_tab5 = () =>
  import(/* webpackChunkName: "aboutpc5" */ 'pc/views/show/about/pages/aboutus-tab5')
const aboutUs_tab6 = () =>
  import(/* webpackChunkName: "aboutpc6" */ 'pc/views/show/about/pages/aboutus-tab6')
const aboutUs_tab7 = () =>
  import(/* webpackChunkName: "aboutpc7" */ 'pc/views/show/about/pages/aboutus-tab7')

export default [{
  path: '/index',
  name: 'index',
  component: index,
  meta: {
    test: 'test',
    title: 'index',
    description: 'description',
    keywords: 'keywords'
  }
},
{
  path: '/',
  name: 'aindex',
  redirect: '/index'
},
{
  path: '/notice/:id?',
  name: 'notice',
  component: notice
},
{
  path: '/promo',
  name: 'promo',
  component: promo
}, {
  path: '/download',
  name: 'download',
  component: download
},
{
  path: '/slotgame/:type?',
  name: 'slotgame',
  component: slotgame
},
{
  path: '/fish',
  name: 'fish',
  component: fish
},
{
  path: '/real',
  name: 'real',
  component: real
},
{
  path: '/sport',
  name: 'sport',
  component: sport
},
// {
//   path: '/agentarea', // 代理专区
//   name: 'agentarea',
//   component: agentarea,
//   // redirect: '/agentarea/joinplan',
//   children: [{
//     path: 'joinplan', // 加盟计划
//     name: 'agentarea_joinplan',
//     component: agentarea_joinplan
//   },
//   {
//     path: 'brandadvantage', // 品牌优势
//     name: 'agentarea_brandadvantage',
//     component: agentarea_brandadvantage
//   },
//   {
//     path: 'commonproblems', // 常见问题
//     name: 'agentarea_commonproblems',
//     component: agentarea_commonproblems
//   },
//   {
//     path: 'applicationprocess', // 申请流程
//     name: 'agentarea_applicationprocess',
//     component: agentarea_applicationprocess
//   }
//   ]
// },
// {
//   path: '/agentjoin', // 代理专区
//   name: 'agentjoin',
//   component: agentjoin,
//   redirect: '/agentjoin/agentjoin_index',
//   children: [{
//     path: 'agentjoin_index', // 加盟计划
//     name: 'agentjoin_index',
//     component: agentjoin_index
//   },
//   {
//     path: 'agentjoin_system', // 品牌优势
//     name: 'agentjoin_system',
//     component: agentjoin_system
//   },
//   {
//     path: 'agentjoin_question', // 常见问题
//     name: 'agentjoin_question',
//     component: agentjoin_question
//   },
//   {
//     path: 'agentjoin_join', // 申请流程
//     name: 'agentjoin_join',
//     component: agentjoin_join
//   }
//   ]
// },
{
  path: '/agentarea',
  name: 'agentarea',
  component: agentarea
},
{
  path: '/vipPage',
  name: 'vipPage',
  component: vipPage
},
{
  path: '/aboutus',
  name: 'aboutus',
  component: aboutUs,
  redirect: '/aboutus/aboutustab1',
  children: [{
    path: 'aboutustab1',
    component: aboutUs_tab1
  }, {
    path: 'aboutustab2',
    component: aboutUs_tab2
  }, {
    path: 'aboutustab3',
    component: aboutUs_tab3
  }, {
    path: 'aboutustab4',
    component: aboutUs_tab4
  }, {
    path: 'aboutustab5',
    component: aboutUs_tab5
  }, {
    path: 'aboutustab6',
    component: aboutUs_tab6
  },
  {
    path: 'aboutustab7',
    component: aboutUs_tab7
  }
  ]
},
// ...agent,
...user

]
