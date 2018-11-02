import './toast.css'
let Toast = {}
let showToast = false
let showLoad = false
let toastNode = null
let loadNode = null

Toast.install = function (Vue, options) {
  let opt = {
    position: 'top',
    duration: '1500'
  }

  for (let property in options) {
    opt[property] = options[property]
  }

  Vue.prototype.$toast = function (message, position = opt.position) {
    // toast在显示中，禁止重复显示
    if (showToast) {
      return
    }
    // 首次触发时，创建一个节点并追加到body
    if (!toastNode) {
      let ToastTpl = Vue.extend({
        data: function () {
          return {
            show: showToast,
            tip: message,
            position: 'wmui-toast-' + position
          }
        },
        template: '<div v-show="show" :class="position" class="wmui-toast">{{tip}}</div>'
      })
      toastNode = new ToastTpl()
      let tpl = toastNode.$mount().$el
      document.body.appendChild(tpl)
    }
    // 二次触发，节点已存在，只需要改变class和message
    toastNode.position = 'wmui-toast-' + position
    toastNode.tip = message

    // 显示提示框
    toastNode.show = showToast = true

    // 显示结束
    setTimeout(function () {
      toastNode.show = showToast = false
    }, opt.duration)
  };

  // 为toast添加方法 eg:this.$toast.top(message,position)
  ['bottom', 'center', 'top'].forEach(function (position) {
    Vue.prototype.$toast[position] = function (message) {
      return Vue.prototype.$toast(message, position)
    }
  })

  Vue.prototype.$loading = function (message = '', status) {
    if (status === 'end') {
      loadNode.show = showLoad = false
    } else {
      if (showLoad) {
        // 如果loading还在，则不再执行
        return
      }
      let LoadTpl = Vue.extend({
        data: function () {
          return {
            show: showLoad,
            tip: message
          }
        },
        template: '<div v-show="show" class="wmui-load-mark"><div class="wmui-load-box"><div class="wmui-loading"><div class="loading_leaf loading_leaf_0"></div><div class="loading_leaf loading_leaf_1"></div><div class="loading_leaf loading_leaf_2"></div><div class="loading_leaf loading_leaf_3"></div><div class="loading_leaf loading_leaf_4"></div><div class="loading_leaf loading_leaf_5"></div><div class="loading_leaf loading_leaf_6"></div><div class="loading_leaf loading_leaf_7"></div><div class="loading_leaf loading_leaf_8"></div><div class="loading_leaf loading_leaf_9"></div><div class="loading_leaf loading_leaf_10"></div><div class="loading_leaf loading_leaf_11"></div></div><div class="wmui-load-content">{{ tip }}</div></div></div>'
      })
      loadNode = new LoadTpl()
      let tpl = loadNode.$mount().$el

      document.body.appendChild(tpl)
      loadNode.show = showLoad = true
    }
  };

  ['start', 'end'].forEach(function (status) {
    Vue.prototype.$loading[status] = function (message) {
      return Vue.prototype.$loading(message, status)
    }
  })
}
export default Toast
