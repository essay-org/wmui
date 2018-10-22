<template>
  <div class="switch-demo">
    <ivc-header title="Switch">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <ivc-cell>
      <div slot="left">{{ status1 }}</div>
      <div slot="right">
        <ivc-switch v-model="value1"></ivc-switch>
      </div>
    </ivc-cell>
    <ivc-cell>
      <div slot="left">{{ status2 }}</div>
      <div slot="right">
        <ivc-switch v-model="value2"></ivc-switch>
      </div>
    </ivc-cell>
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
