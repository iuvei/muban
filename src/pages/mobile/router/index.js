import Vue from 'vue'
import VueRouter from 'vue-router'
import maps from './map'
import { BeforeEach, AfterEach } from '@/util/permission'

Vue.use(VueRouter)

const error404 = (resolve) => resolve(require('mobile/views/error/404'))
const error403 = (resolve) => resolve(require('mobile/views/error/403'))
const error500 = (resolve) => resolve(require('mobile/views/error/500'))

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash', // require service support
  base: '/mobile/',
  'linkActiveClass': 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: maps.concat([
    {
      path: '/404',
      component: error404
    },
    {
      path: '/403',
      component: error403
    },
    {
      path: '/500',
      component: error500
    },
    {
      path: '*',
      component: error404
    }
  ])
})
router.beforeEach(BeforeEach)
router.afterEach(AfterEach)
export default router
