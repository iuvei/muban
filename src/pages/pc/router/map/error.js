/**
 * 说明，这里是错误页面
 */
// 首页
// 404 找不到页面
import error404 from 'pc/views/error/404'
// 403 权限错误
import error403 from 'pc/views/error/403'
// 500 服务器维护
import error500 from 'pc/views/error/500'

export default [{
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
]
