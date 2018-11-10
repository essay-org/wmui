<template>
<transition name="wmui-animation-fade">
  <div v-show="show" :class="`wmui-toast-${position}`" class="wmui-toast">{{text}}</div>
</transition>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top'
    },
    duration: {
      type: Number,
      default: 2000
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
