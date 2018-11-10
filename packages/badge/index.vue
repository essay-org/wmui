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

