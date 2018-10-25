import Button from './button/index.vue'
import Badge from './badge/index.vue'
import Switch from './switch/index.vue'
import Checkbox from './checkbox/index.vue'
import Radio from './radio/index.vue'
import Popup from './popup/index.vue'
import Tooltip from './tooltip/index.vue'
import Swipe from './swipe/index.vue'
import SwipeItem from './swipe/SwipeItem.vue'

const version = '0.0.1'
const components = [
  Button,
  Badge,
  Checkbox,
  Radio,
  Switch,
  Popup,
  Tooltip,
  Swipe,
  SwipeItem
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
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
  Switch,
  Popup,
  Tooltip,
  Swipe,
  SwipeItem
}

// 全部引入
export default {
  install,
  version
}
