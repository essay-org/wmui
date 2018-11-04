import Vue from 'vue'
import ToastCompontent from './Toast.vue'
const ToastConstructor = Vue.extend(ToastCompontent)

let ToastInstance = null
let showToast = false
const Toast = (options = {}) => {
  if (showToast) return
  if (!ToastInstance) {
    ToastInstance = new ToastConstructor()
    .$mount(document.createElement('div'))
    document.body.appendChild(ToastInstance.$el)
  }
  ToastInstance.text = options.text
  ToastInstance.position = options.position
  ToastInstance.show = showToast = true
  setTimeout(() => {
    ToastInstance.show = showToast = false
  }, options.duration)
}

export default Toast
