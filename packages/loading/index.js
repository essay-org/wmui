import Vue from 'vue'
import LoadingCompontent from './Loading.vue'
const LoadingConstructor = Vue.extend(LoadingCompontent)

let LoadingInstance = null
let showLoading = false
const Loading = {
  start (text) {
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
