<template>
  <div class="demo">
    <wmui-button @click.native="toast">toast</wmui-button>
  </div>
</template>
<script>
export default {
  methods: {
    toast () {
      this.$Toast({
        position: 'center',
        text: 'hello',
        duration: 1000
      })
    }
  }
}
</script>