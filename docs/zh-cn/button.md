# Button

## 用法

Button 按钮组件

```html
<template>
  <div class="demo">
    <div class="mb20">
    <wmui-button>默认样式</wmui-button>
    <wmui-button className="wmui-btn-primary">主色样式</wmui-button>
    <wmui-button className="wmui-btn-red">红色样式</wmui-button>
    <wmui-button className="wmui-btn-yellow">黄色样式</wmui-button>
    </div>

    <div class="mb20">
    <wmui-button disabled>禁用状态</wmui-button>
    <wmui-button className="wmui-btn-primary" disabled>禁用状态</wmui-button>
    <wmui-button className="wmui-btn-red" disabled>禁用状态</wmui-button>
    <wmui-button className="wmui-btn-yellow" disabled>禁用状态</wmui-button>
   </div>
  </div>
</template>
```


## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 |
|------|-----|------|--------|-------|
| type  | 按钮类型 | String | button | reset/submit |
| className  | 类名，可自定义 | String | wmui-btn-default | wmui-btn-red / wmui-btn-yellow / wmui-btn-primary / 自定义
| disabled | 是否禁用 | Boolean | false | true |