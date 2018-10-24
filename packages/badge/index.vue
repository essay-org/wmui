<template>
  <span :class="['wmui-badge', {'wmui-badge-off': off}]" v-show="isShow">{{ content }}</span>
</template>
<script>
  export default {
    name: 'wmui-badge',
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      limit: {
        type: Number,
        default: 99
      },
      off: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      content () {
        // 数量超过限制处理
        if (typeof this.value === 'number' && this.limit !== 'undefined' && this.value > this.limit) {
          return `${this.limit}+`
        } else {
          return this.value
        }
      },
      isShow () {
        if (this.value !== '' && this.value !== 0) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-badge {
  display: inline-block;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background-color: $red;
  color: $white;
  border-radius: 10px;
  &-off {
    text-indent: -9999px; // 文字隐藏
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    min-width: 10px;
  }
}
</style>
