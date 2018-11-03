<template>
  <div class="demo">
    <wmui-button @click.native="top">top</wmui-button>
    <wmui-button @click.native="center">center</wmui-button>
    <wmui-button @click.native="bottom">bottom</wmui-button>
    <wmui-button @click.native="base">base</wmui-button>
    <wmui-button @click.native="loading">loading</wmui-button>
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