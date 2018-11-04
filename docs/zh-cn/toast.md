# Toast

## 用法

Toast 信息提示插件

```html
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
```

`$Toast` 是定义在`Vue.prototype`的全局方法

## 配置项

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| position  | 显示位置 | String | top | center / bottom   |  |
| text | 显示的文本内容 | String |
| duration | 显示时间（毫秒） | Number | 2000 | 

