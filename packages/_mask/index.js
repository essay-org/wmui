import Vue from 'vue'
import MaskComponent from './Mask.vue'
const Mask = Vue.extend(MaskComponent)
const maskManager = {
  instances: [],
  mask: false,
  open (instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (this.instances.length === 0) {
      this.showMask(instance)
    }
    this.instances.push(instance)
    this.changeMaskStyle()
  },
  close (instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    Vue.nextTick(() => {
      // 删除一项实例
      this.instances.splice(index, 1)
      if (this.instances.length === 0) {
        this.closeMask()
      }
      this.changeMaskStyle()
    })
  },
  showMask (instance) {
    let mask = this.mask = new Mask({
      el: document.createElement('div')
    })

    // 遮罩层属性值初始化
    mask.fixed = true
    // this中可能包含父组件传递的的color和opacity
    mask.color = instance.maskColor || '#000'
    mask.opacity = instance.maskOpacity || 0.4
    mask.zIndex = instance.maskZIndex
    mask.onClick = this.handleMaskClick.bind(this)
    document.body.appendChild(mask.$el)
    Vue.nextTick(() => {
      mask.show = true
    })
  },
  closeMask () {
    if (!this.mask) return
    let mask = this.mask
    mask.show = false
    this.mask = null
    setTimeout(() => {
      // 移除dom并销毁实例
      mask.$el.remove()
      mask.$destroy()
    }, 450)
  },
  changeMaskStyle () {
    if (!this.mask || this.instances.length === 0) return
    let instance = this.instances[this.instances.length - 1]
    this.mask.color = instance.maskColor || '#000'
    this.mask.opacity = instance.maskOpacity || 0.4
    this.mask.zIndex = instance.maskZIndex
    this.mask.onClick = this.handleMaskClick.bind(this)
  },
  handleMaskClick () {
    if (this.instances.length === 0) return
    let instance = this.instances[this.instances.length - 1]
    if (instance.maskClick) {
      // mask被点击后会emit一个自定义事件
      instance.maskClick()
    }
  }
}

let zIndex = 10000
const getZIndex = () => {
  return zIndex++
}

// mixins 混合
export default {
  props: {
    // 开启mask
    mask: {
      type: Boolean,
      default: true
    },
    // mask的可配置属性
    maskOpacity: {
      type: Number,
      default: 0.4
    },
    maskColor: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      zIndex: getZIndex(),
      open: false,
      maskZIndex: getZIndex()
    }
  },
  methods: {
    maskClick () {
      this.$emit('maskClick')
    },
    setZIndex () {
      const dom = this.$el
      if (!this.zIndex) {
        this.zIndex = getZIndex()
      }
      if (dom) {
        dom.style.zIndex = this.zIndex
      }
    },
    resetZIndex () {
      this.maskZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  mounted () {
    // console.log(this)
    if (this.mask && this.open) {
      maskManager.open(this)
    }
  },
  update () {
    // console.log('mask:' + this.mask)
    if (!this.mask) {
      this.setZIndex()
    }
  },
  // 移除节点
  beforeDestroy () {
    maskManager.close(this)
    if (this.$refs.popup) {
      // this.$refs.popup.parentNode.removeChild(this.$refs.popup)
    }
  },
  watch: {
    // val为true说明父组件是打开状态，把mask设置为true
    value (val) {
      this.open = val
    },
    open (val, oldVal) {
      // console.log(`${val} : ${oldVal}`)
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
    mask (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        maskManager.open(this)
      } else {
        maskManager.close(this)
      }
    }
  }
}
