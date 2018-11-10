## Dialog

Dialog 对话框组件

### 用法

```html
<template>
  <div>
    <wmui-button @click.native="dialog = true">对话框</wmui-button>
    <wmui-dialog v-model="dialog" @maskClick="maskClick">
      <input type="text">
    </wmui-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    maskClick() {
      this.dialog = false
    }
  }
}
</script>
```

### Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model  | 指定dialog的初始化状态 | Boolean | false |
| mask | 是否显示mask | Boolean | true | false | 关闭后不会出现遮罩层 |
| maskOpacity | mask的透明度 | Number | 0.4 | 0到1 |
| fixed | mask是否fixed | Boolean | false | | mask默认是absolute定位 |
| maskClick | 点击mask时触发的自定义事件 | Function |