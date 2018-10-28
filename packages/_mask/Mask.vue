<template>
  <transition name="wmui-mask-fade">
    <div class="wmui-mask" v-if="show" @click="handleClick" :style="maskStyle"></div>
  </transition>
</template>
<script>
export default {
  name: 'wmui-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    zIndex: { // mask层级
      type: Number
    },
    onClick: { // 点击mask
      type: Function
    }
  },
  methods: {
    handleClick () {
      if (this.onClick) {
        this.onClick()
      }
    }
  },
  computed: {
    maskStyle () {
      return {
        'opacity': this.opacity,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  }
}
</script>
<style lang="scss">
.wmui-mask {
  position: absolute; // mask默认定位
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
}
.wmui-mask-fade-enter-active,
.wmui-mask-fade-leave-active {
  transition: opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
}
.wmui-mask-fade-enter,
.wmui-mask-fade-leave-to {
  opacity: 0 !important;
}
</style>
