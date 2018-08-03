/**
 * 说明，show文档里的都是展示有关的页面，功能页面不要放这里，例如个人中心
 */
import Layout from 'pc/master/show'
// 首页
const index = () =>
  import(/* webpackChunkName: "index" */ 'pc/views/show/index')
// 游戏大厅
const slotgame = () =>
  import(/* webpackChunkName: "slotgame" */ 'pc/views/show/slotgame')
// 优惠页面
const promo = () =>
  import(/* webpackChunkName: "promo" */ 'pc/views/show/promo')
// 下载页面
const download = () =>
  import(/* webpackChunkName: "download" */ 'pc/views/show/download')
// 公告详情页
const notice = () =>
  import(/* webpackChunkName: "notice" */ 'pc/views/show/notice')
// 代理加盟页
const agentarea = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/agent-area')
// VIP页面
const vipPage = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/vip')
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
export default [
  // 配置根路径重定向
  {
    path: '/',
    redirect: '/home/index'
  },
  // 配置index重定向
  {
    path: '/index',
    name: 'index',
    redirect: '/home/index'
  },
  // 首页
  {
    path: '/home',
    component: Layout,
    children: [{
      path: '/',
      name: 'aindex',
      redirect: '/home/index'
    },
    {
      path: 'index',
      component: index,
      name: 'home',
      meta: {
        test: 'test'
      }
    }
    ]
  },
  // 游戏中心
  {
    path: '/game',
    name: 'game',
    component: Layout,
    children: [{
      path: '/',
      name: 'gIndex',
      redirect: '/game/index'
    },
    {
      path: 'index/:type?',
      component: slotgame,
      name: 'gameIndex'
    }
    ]
  },
  // 优惠中心
  {
    path: '/promos',
    name: 'promos',
    component: Layout,
    children: [{
      path: '/',
      name: 'pIndex',
      redirect: '/promos/index'
    },
    {
      path: 'index',
      component: promo,
      name: 'promosIndex'
    }
    ]
  },
  // 下载中心
  {
    path: '/download',
    name: 'download',
    component: Layout,
    children: [{
      path: '/',
      name: 'dIndex',
      redirect: '/download/index'
    },
    {
      path: 'index',
      component: download,
      name: 'downloadIndex'
    }
    ]
  },
  // 公告中心
  {
    path: '/news',
    name: 'news',
    component: Layout,
    children: [{
      path: '/',
      name: 'nIndex',
      redirect: '/news/index'
    },
    {
      path: 'index',
      component: notice,
      name: 'newsIndex'
    }
    ]
  },
  // VIP中心
  {
    path: '/vip',
    name: 'vip',
    component: Layout,
    children: [{
      path: '/',
      name: 'vIndex',
      redirect: '/vip/index'
    },
    {
      path: 'index',
      component: vipPage,
      name: 'vipIndex'
    }
    ]
  },
  // 网站介绍
  {
    path: '/aboutus',
    name: 'aboutUs',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'aboutIndex',
        redirect: '/aboutus/home/aboutustab1'
      },
      {
        path: 'home',
        name: 'aboutIndex',
        component: aboutUs,
        children: [{
          path: 'aboutustab1',
          name: 'aboutUs_tab1',
          component: aboutUs_tab1
        }, {
          path: 'aboutustab2',
          name: 'aboutUs_tab2',
          component: aboutUs_tab2
        }, {
          path: 'aboutustab3',
          name: 'aboutUs_tab3',
          component: aboutUs_tab3
        }, {
          path: 'aboutustab4',
          name: 'aboutUs_tab4',
          component: aboutUs_tab4
        }, {
          path: 'aboutustab5',
          name: 'aboutUs_tab5',
          component: aboutUs_tab5
        }, {
          path: 'aboutustab6',
          name: 'aboutUs_tab6',
          component: aboutUs_tab6
        },
        {
          path: 'aboutustab7',
          name: 'aboutUs_tab7',
          component: aboutUs_tab7
        }
        ]
      }
    ]
  },
  // 代理加盟
  {
    path: '/cooperation',
    name: 'cooperation',
    component: Layout,
    children: [{
      path: '/',
      name: 'cIndex',
      redirect: '/cooperation/index'
    },
    {
      path: 'index',
      component: agentarea,
      name: 'cooperationIndex'
    }
    ]
  }
]
