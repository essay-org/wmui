import Vue from 'vue'
/**
 * 节流函数
 * @param {function} fn 要执行的函数
 * @param {number} time 节流时间
 */
export const throttle = (method, context) => {
  clearTimeout(method.tId)
  method.tId = setTimeout(function () {
    method.call(context)
  }, 300)
}

/**
 * 获取元素距离屏幕的绝对距离
 * @param {dom} el dom元素
 */
export const offset = (el) => {
  let top = el.offsetTop
  let left = el.offsetLeft
  while (el.offsetParent) {
    el = el.offsetParent
    top += el.offsetTop
    left += el.offsetLeft
  }
  return {
    left: left,
    top: top
  }
}

export const isServer = Vue.prototype.$isServer || process.server
