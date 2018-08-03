import { AUTH_NAME } from '@/store/types'

const slotgame = () => import(/* webpackChunkName: "appxslot" */'mobile/views/show/slotgame/index')
const deposit = () => import(/* webpackChunkName: "appxdeposit" */'mobile/views/money/deposit/index')
// let cooperation = () => import(/* webpackChunkName: "appxcooperation" */'mobile/views/show/cooperation/index/index');
let toapp=(resolve) => resolve(require('mobile/views/error/toapp.vue'))

export default [
  {
    path: '/app',
    name: 'app',
    redirect: 'user/deposit',
    children: [
      {
        path: 'slotgame',
        name: 'app_slotgame',
        component: slotgame,
        meta: {
          headName: '游戏中心'
        }
      },
      {
        path: 'deposit',
        name: 'app_deposit',
        component: deposit,
        meta: {
          headName: '存款'
        }
      },
      {
        path: 'toapp',
        name: 'app_toappt',
        component: toapp,
        meta: {
          headName: '返回APP'
        }
      }
      //      {
      //        path: "cooperation",
      //        name: "app_cooperation",
      //        component: cooperation,
      //        meta: {
      //          headName: "代理加盟"
      //        }
      //      }
    ]
  }
]
