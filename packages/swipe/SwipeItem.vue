<template>
  <section class="wmui-swipe-item">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'wmui-swipe-item',
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
.wmui-swipe-item {
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
