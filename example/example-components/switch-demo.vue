<template>
  <div class="demo">
    <div>{{ status1 }}</div>
    <wmui-switch v-model="value1"/>
    
    <div>{{ status2 }}</div>
    <wmui-switch v-model="value2"/>
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
      return this.value1 ? '开启状态' : '关闭状态'
    },
    status2 () {
      return this.value2 ? '开启状态' : '关闭状态'
    }
  }
}
</script>
