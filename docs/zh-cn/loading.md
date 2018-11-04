# Loading

## 用法

```html
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
```

`$Loading`是定义在`Vue.prototype`上的全局方法，start方法表示开始加载，end方法表示结束加载

## 配置项

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| text | 提示内容| String | 加载中...   |  |