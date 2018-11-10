<template>
  <transition :name="`wmui-popup-${position}`">
    <div class="wmui-popup" ref="popup" v-show="value" :style="modeStyle">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import mask from '../_mask/index.js'
export default {
  name: 'wmui-popup',
  mixins: [mask],
  props: {
    // popup的状态值
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    },
    cover: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    modeStyle () {
      let style = {
        position: 'fixed',
        backgroundColor: '#fff',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: this.zIndex
      }
      switch (this.position) {
        case 'bottom':
          delete style.top
          style.height = this.cover
          break
        case 'top':
          delete style.bottom
          style.height = this.cover
          break
        case 'left':
          delete style.right
          style.width = this.cover
          break
        case 'right':
          delete style.left
          style.width = this.cover
          break
      }
      return style
    }
  },
  // 初始化mask状态
  mounted () {
    if (this.value) {
      this.open = true
    }
  }
}
</script>
