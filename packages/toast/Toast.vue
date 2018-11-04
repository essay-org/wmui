<template>
  <div v-show="show" :class="`wmui-toast-${position}`" class="wmui-toast">{{text}}</div>
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
<style>
.wmui-toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  box-sizing: border-box;
  max-width: 80%;
  height: 40px;
  line-height: 20px;
  padding: 10px 20px;
  transform: translateX(-50%);
  text-align: center;
  z-index: 9999;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  animation: show-toast 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wmui-toast.wmui-word-wrap {
  width: 80%;
  white-space: inherit;
  height: auto;
}

.wmui-toast.wmui-toast-top {
  top: 50px;
  bottom: inherit;
}

.wmui-toast.wmui-toast-center {
  top: 50%;
  margin-top: -20px;
  bottom: inherit;
}

@keyframes show-toast {
  from {
    opacity: 0;
    transform: translate(-50%, -10px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>