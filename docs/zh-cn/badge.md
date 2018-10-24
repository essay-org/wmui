# Badge

## 用法

使用 Badge 组件可以快速创建提醒用的小红点。

传入 `value` 参数，定义内容。不传时不显示。

```html
<wmui-badge value="NEW"></wmui-badge>
```

传入 `limit` 参数，则当 `value` 值大于 `limit` 时，展示为 `limit+`，用来实现 “99+” 收纳效果。当value值为0时默认不显示

```html
<wmui-badge :value="190" :limit="99"></wmui-badge>
```

off属性可以关闭数量显示，只显示一个小红点

```html
<wmui-badge :value="190" :limit="99" off></wmui-badge>
```

## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 |
|------|-----|------|--------|-------|
| value  | 显示内容 | String / Number | 0 | 无 |
| limit  | 收纳数值 | Number | 99 | 无 |
| off | 是否显示数量 | Boolean | true | false |
