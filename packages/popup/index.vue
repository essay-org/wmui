<template>
  <transition :name="`wmui-popup-${position}`">
    <div class="wmui-popup" ref="popup" v-show="value" :style="modeStyle"><slot></slot></div>
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
    // 点击popup关闭
    closeWhenClicked: {
      type: Boolean,
      default: false
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
        backgroundColor: '#FFF',
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
  // 初始化popup状态
  mounted () {
    if (this.value) {
      this.open = true
    }
  },
  methods: {
    handleClick () {
      if (this.closeWhenClicked) {
        // 把v-model的值置为false
        this.$emit('input', false)
      }
    },
    popupClick (e) {
      this.$emit('popupClick', e)
    }
  }
}
</script>
<style lang="scss">
.wmui-popup-bottom-enter-active,
.wmui-popup-bottom-leave-active,
.wmui-popup-top-enter-active,
.wmui-popup-top-leave-active,
.wmui-popup-left-enter-active,
.wmui-popup-left-leave-active,
.wmui-popup-right-enter-active,
.wmui-popup-right-leave-active {
  transition: all .3s ease-out;
}

.wmui-popup-bottom-enter,
.wmui-popup-bottom-leave-to {
  transform: translate3d(0, 100%, 0);
}

.wmui-popup-top-enter,
.wmui-popup-top-leave-to {
  transform: translate3d(0, -100%, 0);
}

.wmui-popup-left-enter,
.wmui-popup-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.wmui-popup-right-enter,
.wmui-popup-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
