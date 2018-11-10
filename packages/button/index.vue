<template>
  <button :disabled="disabled" :class="className" class="wmui-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'wmui-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: 'wmui-btn-default'
    }
  }
}
</script>
