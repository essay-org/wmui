<template>
  <div class="demo">
    <wmui-button @click.native="alert">alert</wmui-button>
    <wmui-button @click.native="confirm">confirm</wmui-button>
    <wmui-button @click.native="prompt">prompt</wmui-button>
  </div>
</template>
<script>
export default {
  methods: {
    alert () {
      this.$Modal.alert({
        title: '测试标题',
        text: '测试文字'
      })
    },
    confirm () {
      this.$Modal.confirm({
        title: '测试标题',
        text: '测试文字',
        confirmText: '确认删除',
        cancelText: '关闭',
        onConfirm (instance) {
          console.log('确定！')
          instance.open = false
        },
        onCancel (instance) {
          console.log('取消！')
          instance.open = false
        }
      })
    },
    prompt () {
      this.$Modal.prompt({
        title: '测试标题',
        text: '测试文字',
        onConfirm (instance) {
          console.log(`输入值为：${instance.inputValue}`)
          instance.open = false
        },
        validate (val) {
          return !!val
        }
      })
    }
  }
}
</script>