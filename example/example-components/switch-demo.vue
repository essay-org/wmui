<template>
  <div class="switch-demo">
    <div>{{ status1 }}</div>
    <wmui-switch v-model="value1"></wmui-switch>
    
    <div>{{ status2 }}</div>
    <wmui-switch v-model="value2"></wmui-switch>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: false,
      value2: true
    }
  },
  computed: {
    status1 () {
      // console.log(this.value1)
      return this.value1 ? '开启状态' : '关闭状态'
    },
    status2 () {
      return this.value2 ? '开启状态' : '关闭状态'
    },
  }
}
</script>
<style lang="scss">
</style>
