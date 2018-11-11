import Vue from 'vue'
import ToastCompontent from './Toast.vue'
import {isServer} from '../_utils/util.js'
const ToastConstructor = Vue.extend(ToastCompontent)

let ToastInstance = null
let showToast = false
const Toast = (options = {}) => {
  if(isServer) return false
  if(showToast) return false
  if (!ToastInstance) {
    ToastInstance = new ToastConstructor()
    .$mount(document.createElement('div'))
    document.body.appendChild(ToastInstance.$el)
  }
  ToastInstance.text = options.text
  ToastInstance.position = options.position || 'top'
  ToastInstance.show = showToast = true
  setTimeout(() => {
    ToastInstance.show = showToast = false
  }, options.duration || 2000)
}

export default Toast
