import Vue from 'vue'
import MaskComponent from './Mask.vue'
import {isServer} from '../_utils/util.js'
const Mask = Vue.extend(MaskComponent)
const maskManager = {
  instances: [],
  mask: null,
  open(instance) {
    if (isServer) return {}
    // 实例不存在
    if (instance && this.instances.indexOf(instance) === -1) {
      let mask = this.mask = new Mask({
        el: document.createElement('div')
      })
      // 遮罩层属性值初始化
      mask.fixed = instance.fixed
      mask.opacity = instance.maskOpacity
      mask.zIndex = instance.maskZIndex
      mask.onClick = this.handleMaskClick.bind(this)
      document.body.appendChild(mask.$el)
      // DOM更新后，显示mask
      Vue.nextTick(() => {
        mask.show = true
      })
      this.instances.push(instance)
    }
  },
  close(instance) {
    if (isServer) return {}
    let index = this.instances.indexOf(instance)
    if (index !== -1) {
      Vue.nextTick(() => {
        // 删除一项实例
        this.instances.splice(index, 1)
        if (this.mask && this.instances.length === 0) {
          let mask = this.mask
          mask.show = false
          this.mask = null
          setTimeout(() => {
            // 移除dom并销毁实例
            mask.$el.remove()
            mask.$destroy()
          }, 300)
        }
      })
    }
  },
  handleMaskClick() {
    if (this.instances.length !== 0) {
      let instance = this.instances[this.instances.length - 1]
      // mask被点击后会emit一个自定义事件
      if (instance.maskClick) {
        instance.maskClick()
      }
    }
  }
}

let zIndex = 10000
const getZIndex = () => {
  return zIndex++
}

// mixins 混合，可暴露到最外层组件
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mask: { // 是否显示mask
      type: Boolean,
      default: true
    },
    maskOpacity: { // mask透明度
      type: Number,
      default: 0.4
    },
    fixed: { // mask是否fixed定位，默认absolute
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: this.value, // mask默认状态
      maskZIndex: getZIndex(), // mask层级
      zIndex: getZIndex() // popup、modal、dialog层级
    }
  },
  methods: {
    maskClick() { // 点击mask时触发的事件
      this.$emit('maskClick')
    },
    setZIndex() { // 设置popup和mask的层级
      const dom = this.$el
      if (!this.zIndex) {
        this.zIndex = getZIndex()
      }
      if (dom) {
        dom.style.zIndex = this.zIndex
      }
    },
    resetZIndex() {
      this.maskZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  mounted() {
    if (this.mask && this.open) {
      maskManager.open(this)
    }
  },
  update() {
    if (!this.mask) {
      this.setZIndex()
    }
  },
  // 关闭并移除mask
  beforeDestroy() {
    maskManager.close(this)
  },
  watch: {
    // 监控组件上v-model值，并控制mask的状态
    value(val) {
      this.open = val
    },
    open(val, oldVal) {
      // 当mask发生状态变化，层级进行重置，并打开或关闭mask遮罩层
      if (val === oldVal) return
      if (val) {
        this.resetZIndex()
        if (this.mask) {
          maskManager.open(this)
        }
      } else {
        maskManager.close(this)
      }
    },
    mask(val, oldVal) { // 当mask属性发生状态变化，控制遮罩层打开关闭
      if (val === oldVal) return
      if (val) {
        maskManager.open(this)
      } else {
        maskManager.close(this)
      }
    }
  }
}
