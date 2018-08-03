/**
 * 说明，这里可以放特殊的专题页
 */
import Layout from 'pc/master/show'
// 以下页面为专题页，可有可无，看需求
// 捕鱼入口
const fish = () =>
  import(/* webpackChunkName: "fish" */ 'pc/views/show/fish')
// 真人入口页
const real = () =>
  import(/* webpackChunkName: "real" */ 'pc/views/show/real')
// 体育入口页
const sport = () =>
  import(/* webpackChunkName: "sport" */ 'pc/views/show/sport')

export default [
  // 捕鱼专题页
  {
    path: '/fish',
    component: Layout,
    children: [{
      path: '/',
      name: 'fishindex',
      redirect: '/fish/index'
    },
    {
      path: 'index',
      component: fish,
      name: 'fish'
    }
    ]
  },
  // 真人专题页
  {
    path: '/real',
    component: Layout,
    children: [{
      path: '/',
      name: 'realindex',
      redirect: '/real/index'
    },
    {
      path: 'index',
      component: real,
      name: 'real'
    }
    ]
  },
  // 体育专题页
  {
    path: '/sport',
    component: Layout,
    children: [{
      path: '/',
      name: 'sportindex',
      redirect: '/sport/index'
    },
    {
      path: 'index',
      component: sport,
      name: 'sport'
    }
    ]
  }
]
