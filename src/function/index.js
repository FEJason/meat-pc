/**
 * 配置全局方法
 */

// 防抖
// import debounce from './debounce'
// 金额过滤(截取保留两位小数)
import filterAmount from './filterAmount'
// 重置message 防止重复点击重复弹出message弹框
// import { message as Message } from "./resetMessage"
import clearAllChildren from "./clearAllChildren"
// 效验
import test from './test'

const $yjl = {
  // debounce,
  test,
  clearAllChildren
}

const install = Vue => {
  Vue.filter('filterAmount', (val) => {
    return filterAmount(val)
  })
  Vue.prototype.$yjl = $yjl
  // Vue.prototype.$message = Message
}

export default {
  install
}