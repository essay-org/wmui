<template>
  <transition name="wmui-animation-fade">
    <div class="wmui-dialog">
      <div class="dialog" v-show="open" :style="{'z-index': zIndex}">
        <i class="wmui icon-close" @click="closeDialog"></i>
        <div class="dialog-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Mask from '../_mask/index.js'
export default {
  name: 'wmui-dialog',
  mixins: [Mask],
  methods: {
    closeDialog() {
      this.$emit('input', false)
    }
  }
}
</script>

