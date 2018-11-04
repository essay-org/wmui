<template>
  <div class="demo">
    <wmui-button @click.native="loading">loading</wmui-button>
  </div>
</template>
<script>
export default {
  methods: {
    loading () {
      this.$Loading.start('加载中...');
      setTimeout(() => {
        this.$Loading.end()
      }, 3000)
    }
  }
}
</script>