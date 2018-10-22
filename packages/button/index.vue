<template>
  <button :type="type" :disabled="disabled" :class="className" class="wmui-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'wmui-button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: String
  }
}
</script>
<style lang="scss">
@import "../../src/theme-default/var.scss";
.wmui-button {
  display: inline-block;
  border: none;
  text-align: center;
  color: #fff;
  background-color: $primary;
  padding: 7px 15px;
  border-radius: 3px;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
}
</style>
