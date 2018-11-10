import Button from './button/index.vue'
import Badge from './badge/index.vue'
import Switch from './switch/index.vue'
import Checkbox from './checkbox/index.vue'
import Radio from './radio/index.vue'
import Select from './select/index.vue'
import Popup from './popup/index.vue'
import LazyLoad from './lazyload/index.vue'
import Swiper from './swiper/index.vue'
import SwiperItem from './swiper/swiper-item.vue'
import Scrollspy from './scrollspy/index.vue'
import Toast from './toast/index.js'
import Loading from './loading/index.js'
import Edit from './editor/editor-edit.vue'
import Preview from './editor/editor-preview.vue'
import Modal from './modal/index.js'
const version = '0.0.4'
const components = [
  Button,
  Badge,
  Checkbox,
  Radio,
  Select,
  Switch,
  Popup,
  LazyLoad,
  Swiper,
  SwiperItem,
  Scrollspy,
  Edit,
  Preview
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.$Toast = Vue.prototype.$Toast = Toast
  Vue.$Loading = Vue.prototype.$Loading = Loading
  Vue.$Modal = Vue.prototype.$Modal = Modal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 按需引入
export {
  install,
  version,
  Button,
  Badge,
  Checkbox,
  Radio,
  Select,
  Switch,
  Popup,
  LazyLoad,
  Swiper,
  SwiperItem,
  Scrollspy,
  Edit,
  Preview
}

// 全部引入
export default {
  install,
  version
}
