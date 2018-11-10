<template>
  <div v-show="show" class="wmui-loading">
    <div class="loading-box">
      <i class="wmui icon-loading loading"></i>
      <div class="box-content">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>
