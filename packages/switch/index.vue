<template>
  <label class="wmui-switch">
    <input type="checkbox" 
    :checked="value" 
    @change="changeValue" 
    class="wmui-switch-input">
    <span class="wmui-switch-button"></span>
  </label>
</template>
<script>
  export default {
    name: 'wmui-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeValue () {
        // 该事件直接改变wmui-checkbox中的value值，组件可通过计算属性得到变化后的值。
        // 值变化进而影响props中的值
        this.$emit('input', !this.value)
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-switch {
  position: relative;
}

.wmui-switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.wmui-switch-button {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 44px;
  height: 22px;
  border: 1px solid $gray-light;
  border-radius: 11px;
  background-color: $gray-light;
}
.wmui-switch-button::after {
  content: "";
  position: absolute;
  left: 1px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: $white;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  transform: translateX(0);
  transition:transform .3s;
}

.wmui-switch-input:checked + .wmui-switch-button {
  background-color: $primary;
  border: 1px solid $primary;
  display: inline-block;
  position: relative;
  border-radius: 20px;
}
.wmui-switch-input:checked + .wmui-switch-button::after {
  transform: translateX(20px);
}
</style>
