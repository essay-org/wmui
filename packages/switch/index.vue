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
