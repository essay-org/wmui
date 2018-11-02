<template>
  <div class="demo">
    <button @click="top">top</button>
    <button @click="center">center</button>
    <button @click="bottom">bottom</button>
    <button @click="base">base</button>
    <button @click="loading">loading</button>
  </div>
</template>
<script>
export default {
  methods: {
    top () {
      this.$toast.top('top');
    },
    center () {
      this.$toast.center('center');
    },
    bottom () {
      this.$toast.bottom('bottom');
    },
    base () {
      this.$toast('hello world','center') // 参数二可省略 
    },
    loading () {
      this.$loading.start('加载中...');
      setTimeout(() => {
        this.$loading.end()
      }, 1000)
    }
  }
}
</script>