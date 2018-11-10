<template>
  <transition name="fade">
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
<style lang="scss">
@import '../../src/theme-default/base/var.scss';
.wmui-dialog {
  display: flex;
  .dialog {
    position: fixed;
    background-color: #fff;
    padding: 15px;
    border-radius: 3px;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    .icon-close {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 20px;
      color: $gray;
      cursor: pointer;
      padding: 5px;
    }
    .dialog-content {
      margin-top: 20px;
    }
  }
}
</style>
