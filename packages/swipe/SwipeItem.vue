<template>
  <section class="ivc-swipe-item">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ivc-swipe-item',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$parent && this.$parent.swipeItemCreated(this)
  },
  destroyed () {
    this.$parent && this.$parent.swipeItemDestroyed(this)
  }
}
</script>
<style lang="scss">
.ivc-swipe-item {
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
