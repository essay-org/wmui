# Badge

## 用法

使用 Badge 组件可以快速创建提醒用的小红点。

传入 `value` 参数，定义内容。不传时不显示。

```html
<w-badge></w-badge>
<w-badge :value="3"></w-badge>
<w-badge value="NEW"></w-badge>
```

若传入 `limit` 参数，则当 `value` 值大于 `limit` 时，展示为 `limit+`，用来实现 “99+” 收纳效果。

```html
<w-badge :value="190" :limit="99"></w-badge>
```


## Props

| 参数   | 描述     | 类型             | 默认值 |
|--------|----------|------------------|--------|
| value  | 内容 | String || Number | 无 |
| limit  | 收纳数值 | Number | 无 |
| off | 是否显示数量 | Boolean | true |
