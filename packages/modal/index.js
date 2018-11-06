import Vue from 'vue'
import ModalComponent from './Modal.vue'
import {isServer} from '../_utils/util.js'
const ModalConstructor = Vue.extend(ModalComponent)

const init = (propsData) => {
  if (isServer) return false
  return new ModalConstructor({
    propsData
  }).$mount(document.createElement('div'))
}

const Modal = {
  alert (options = {}) {
    if (isServer) return false
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'alert',
      isShowCancelButton: false,
      confirmText: options.confirmText,
      maskOpacity: options.maskOpacity
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : () => {}
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : () => {
      instance.open = false
    }
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : () => {}
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : () => {}
    document.body.appendChild(instance.$el)
    return instance
  },
  confirm (options = {}) {
    if (isServer) return false
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'confirm',
      isShowCancelButton: true,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      maskOpacity: options.maskOpacity
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : () => {}
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : () => {
      instance.open = false
    }
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : () => {
      instance.open = false
    }
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : () => {}
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : () => {}
    document.body.appendChild(instance.$el)
    return instance
  },
  prompt (options = {}) {
    if (isServer) return false
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'prompt',
      isShowCancelButton: true,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      isShowInput: true,
      validate: options.validate,
      maskOpacity: options.maskOpacity
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : () => {}
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : () => {
      instance.open = false
    }
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : () => {
      instance.open = false
    }
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : () => {}
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : () => {}
    document.body.appendChild(instance.$el)
    return instance
  }
}

export default Modal
