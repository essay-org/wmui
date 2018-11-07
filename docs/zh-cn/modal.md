## Modal

### 用法

Modal 模态框插件

```html
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
```

`$Modal`是定义在`Vue.prototype`上的全局方法，有`alert、confirm、prompt`三个方法可以调用，效果等同于浏览器原生的alert框、confirm框、prompt框

### 配置项

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| title  | 模态框的标题 | String |  |  |  |
| text  | 模态框的次要信息 | String |  |  |  |
| confirmText  | 确认按钮的描述文字 | String | 确定 |  |  |
| concalText  | 取消按钮的描述文字 | String | 取消 |  |  |
| onConfirm  | 点击确认按钮时的回调函数 | Function | |  |  |
| onCancel  | 点击取消按钮时的回调函数 | Function | |  |  |
| onShow  | 窗体出现后的回调函数 | Function | |  |  |
| onHide  | 窗体隐藏后的回调函数 | Function | |  |  |
| inputType  | prompt中的input类型 | String | text | input的type属性可用值 |  |
| validate  | prompt中的input值的验证函数 | Function |  |  | 返回true表示验证通过 |
| maskOpacity  | mask的透明度 | Number | 0.3 | 
