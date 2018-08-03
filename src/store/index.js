import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vue
import {
  ajaxGetSessionPersonalData
} from '@/api/user' // mutations
import {
  getMessageByUser
} from '@/api/show'
import {
  checkWithdrawPwd
} from '@/api/payment' // mutations
import {
  logOut,
  getAuthImg
} from '@/api/authService' // mutations
import * as types from './types' // 引入vue
import {
  $localStorage,
  $sessionStorage
} from '@/util/storage'
import util from '@/util/util'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 不要直接访问state
    showFooter: true, // 好像可以删除
    authList: [], // 权限列表
    isSetPayPwd: null, // 是否设置支付密码
    showLogin: false, // 登录弹窗
    unread: null, // 未读站内信
    validateImage: null, // 验证码
    userData: {
      wechat: '', // 微信
      qq: '', // true string
      loginname: '', // true string
      accountName: '', // t true string 姓名，通过该字段是否有值可判断是否已设置过用户信息
      phone: '', // true string//手机号码
      level: 0, // true string 用户等级
      email: '', // false string 邮件
      accountMoney: 0, // true string 主账户余额
      role: '', // true string 角色
      birthday: '', // false string 生日
      levelNumber: '', // true number 等级（数字）
      deputyCredit: '', // true number 副账户余额
      phoneValidStatus: '', // true string 手机号是否验证
      mobileNum: '', // true string 手机号
      referWebsite: '', //
      liveAccount: 0, // 对应其他佣金
      slotAccount: 0 // 对应老虎机佣金
    }
  },
  getters: {
    showFooter(state, getters) {
      return state.showFooter
    },
    showLogin(state, getters) {
      return state.showLogin
    },
    isSetPayPwd(state, getters) {
      if (state.isSetPayPwd == null) { // 异步的一种获取
        checkWithdrawPwd().then(res => {
          if (res.success) {
            state.isSetPayPwd = res.data == '1'
          }
        })
      }
      return state.isSetPayPwd
    },
    userData(state, getters) { // 其有可能进行过滤
      return state.userData
    },
    authList(state, getters) { // 权限集合
      return state.authList
    },
    isAgent(state, getters) { // 没有权限表示没有登录
      return state.authList.includes(types.AUTH_NAME.AGENT)
    },
    isUser(state, getters) { // 没有权限表示没有登录
      return state.authList.includes(types.AUTH_NAME.USER)
    },
    islogin(state, getters) { // 没有权限 表示没有登录 //或者值中又一个===true表示已经登录了
      if ($sessionStorage && $sessionStorage.get(types.IS_LOGIN) === 'true') { // 先查sessionStorage
        if (state.authList.length == 0) { // 浏览器刷新 authList肯定没有 没有就查一次后台
          return false
        }
        return true
      }
      if (state.authList.length > 0) { // sessionStorage
        $sessionStorage && $sessionStorage.set(types.IS_LOGIN, true)
        return true
      }
      return false
    },
    unread(state, getters) {
      if (state.unread == null) {
        // 异步的一种获取
        getMessageByUser({
          size: 1,
          pageIndex: 1
        }).then(res => {
          if (res.success) {
            state.unread = res.data.unreadCount ? res.data.unreadCount : 0
          }
        })
      }
      return state.unread
    },
    validateImage(state, getters) {
      if (state.validateImage == null) {
        util.ImgToBase64(getAuthImg()).then(res => {
          state.validateImage = res
        })
      }
      return state.validateImage
    }
  },
  mutations: {
    // 初始化未读站内信
    [types.SET_UNREAD](state, val) {
      state.unread = val
    },
    // 更新验证码
    [types.GET_VALIDATE](state) {
      util.ImgToBase64(getAuthImg()).then(res => {
        state.validateImage = res
      })
    },
    // 读取一条站内信
    [types.READ_MESSAGE](state) {
      if (state.unread > 0) {
        state.unread--
      } else {
        state.unread = 0
      }
    },
    // 设置底部
    [types.SET_FOOTER](state, val) {
      state.showFooter = val
    },
    // 设置密码
    [types.SET_PAYPWD](state, val) {
      state.isSetPayPwd = val
    },
    // 设置用户信息
    [types.SET_USERDATA](state, val = {}) {
      Object.assign(state.userData, val || {})
    },
    // 是否显示登陆，已废弃
    [types.SHOW_LOGIN](state, val) {
      state.showLogin = val
    },
    // 设置权限
    [types.SET_AUTH](state, val) {
      // 设置权限
      if (typeof val === 'string') {
        state.authList = [val]
      } else if (Array.isArray(val)) {
        state.authList = val
      } else {
        state.authList = []
      }
    },
    // 添加权限
    [types.ADD_AUTH](state, val) {
      state.authList.push(val)
    },
    // 删除权限
    [types.REMOVE_AUTH](state, val) {
      if (val === undefined) { // 如果不传清空所有权限
        $sessionStorage && $sessionStorage.remove(types.IS_LOGIN)
        state.authList = []
      } else {
        const index = state.authList.indexOf(val)
        if (index > -1) {
          state.authList.splice(index, 1)
        }
      }
    }

  },
  actions: {
    [types.INIT_INFO]({
      commit
    }, val) { // 初始化所有信息 相当于推出
      commit(types.REMOVE_AUTH)
      commit(types.SET_PAYPWD, null)
      commit(types.SET_USERDATA, {
        qq: '', // true string
        loginname: '', // true string
        accountName: '', // t true string 姓名，通过该字段是否有值可判断是否已设置过用户信息
        phone: '', // true string
        wechat: '', // 微信
        level: 0, // true string 用户等级
        email: '', // false string
        accountMoney: 0, // true string
        role: '', // true string 角色
        birthday: '', // false string 生日
        levelNumber: '', // true number 等级（数字）
        deputyCredit: '', // true number 副账户余额
        phoneValidStatus: '0', // true string 手机号是否验证
        mobileNum: '', // true string 手机号
        referWebsite: '', //
        liveAccount: 0, // 对应其他佣金
        slotAccount: 0 // 对应老虎机佣金
      })
    },
    [types.LOGIN_OUT]({
      commit,
      dispatch
    }, val) { // 退出登录
      logOut().then(res => {
        // 退出成功后，清除store
        dispatch(types.INIT_INFO)
        window.location.reload()
      }).catch(res => {
        toast('请重试')
      })
    },
    [types.GET_PAYPWD]({
      commit
    }, val) {
      // 获取是否已设置支付密码
      return new Promise((resolve, reject) => {
        checkWithdrawPwd().then(res => {
          if (res.success) {
            commit(types.SET_PAYPWD, res.data == '1')
          }
          return resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    [types.UPDATE_USERDATA]({
      commit
    }, val) { // 获取 初始化信息
      return ajaxGetSessionPersonalData().then(res => {
        if (res.success) {
          commit(types.SET_USERDATA, res.data)
          commit(types.SET_AUTH, res.data.role)
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
    }
  }
})
