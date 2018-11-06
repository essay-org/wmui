import Vue from 'vue'
import LoadingCompontent from './Loading.vue'
import {isServer} from '../_utils/util.js'
const LoadingConstructor = Vue.extend(LoadingCompontent)

let LoadingInstance = null
let showLoading = false
const Loading = {
  start (text) {
    if (isServer) return false
    if (showLoading) return
    if (!LoadingInstance) {
      LoadingInstance = new LoadingConstructor()
        .$mount(document.createElement('div'))
      document.body.appendChild(LoadingInstance.$el)
    }
    LoadingInstance.text = text
    LoadingInstance.show = showLoading = true
  },
  end () {
    LoadingInstance.show = showLoading = false
  }
}

export default Loading
