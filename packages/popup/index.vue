<template>
  <transition :name="`wmui-animation-${position}`">
    <div class="wmui-popup" v-show="open" :style="modeStyle">
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
        zIndex: this.zIndex // mask mixin
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
  }
}
</script>
