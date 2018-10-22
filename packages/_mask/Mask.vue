<template>
  <transition name="wmui-mask-fade">
    <div class="wmui-mask" v-if="show" @click="handleClick" :style="maskStyle"></div>
  </transition>
</template>
<script>
export default {
  name: 'WmuiMask',
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
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number
    },
    onClick: {
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
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  }
}
</script>
<style lang="scss">
.wmui-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
