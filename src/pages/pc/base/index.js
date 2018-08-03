
import toast from './toast/toast.js'
import { $alert, $confirm } from './msgbox/msgbox.js'
import * as $loads from './ajax-load/index.js'
import { Message, Alert } from 'element-ui'
window.$alert = Message.warning
window.$confirm = $confirm
window.toast = Message.warning
window.$load = $loads
// window.Toast=Message.warning // 弹窗配置
// Message.warning({
//   customClass: 'toastPos',
//   duration: 0
// })
