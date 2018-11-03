# Toast

## 用法

Toast 信息提示插件

```html
<template>
  <div class="demo">
    <wmui-button @click.native="top">top</wmui-button>
    <wmui-button @click.native="center">center</wmui-button>
    <wmui-button @click.native="bottom">bottom</wmui-button>
    <wmui-button @click.native="base">base</wmui-button>
    <wmui-button @click.native="loading">loading</wmui-button>
  </div>
</template>
<script>
export default {
  methods: {
    top () {
      this.$toast.top('top');
    },
    center () {
      this.$toast.center('center');
    },
    bottom () {
      this.$toast.bottom('bottom');
    },
    base () {
      this.$toast('hello world','center') // 参数二可省略 
    },
    loading () {
      this.$loading.start('加载中...');
      setTimeout(() => {
        this.$loading.end()
      }, 1000)
    }
  }
}
</script>
```

`this.$toast(msg[, position])` msg要显示的提示信息；position表示显示位置，可选值`top、center、bottom`，center是默认值。

`this.$toast.top(msg)`可以通过$toast的属性指定显示位置，比如`this.$toast.top(msg)`会在顶部显示msg信息

`this.$loading.start(msg)`用于显示loading效果，常用于数据请求时的状态表示，关闭loading要调用`this.$loading.end()`
