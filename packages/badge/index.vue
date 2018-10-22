<template>
  <div :class="['wmui-badge', {'wmui-badge-off': off}]" v-show="isShow">{{ content }}</div>
</template>
<script>
  export default {
    name: 'WmuiBadge',
    props: {
      value: {
        type: [String, Number]
      },
      limit: {
        type: Number
      },
      off: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      content () {
        // console.log(this.showCount)
        // 数量超过限制处理
        if (typeof this.value === 'number' && this.limit !== 'undefined' && this.value > this.limit) {
          return `${this.limit}+`
        } else {
          return this.value
        }
      },
      isShow () {
        if (this.value !== '') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.wmui-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  height: 36px;
  line-height: 36px;
  font-size: 24px; /* px */
  background-color: $red;
  color: $white;
  border-radius: 18px;
  &-off {
    text-indent: -9999px;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    min-width: 20px;
  }
}
</style>
