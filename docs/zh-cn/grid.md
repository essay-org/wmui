# 布局

## 用法

grid 布局借鉴了Bootstrap，采用12栅格系统

```html
<template>
  <div class="demo">
    <div class="row">
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3 col-left-3">
        <div class="test">hello</div>
      </div>
    </div>
  </div>
</template>
<style>
.test {
  border: 1px solid green;
  text-align: center;
}
/* 20px gutter */
.row {
  margin: -10px;
}
.col-3 {
  padding: 10px;
}
</style>
```

子列盒子间的距离默认是0，如果要设置间距（即沟槽大小），比如希望有20px的间距，只需要设置对应的子类`.col-*`的padding和`.row`的margin值即可

```css
/* 20px gutter */
.row {
  margin: -10px;
}
.col-3 {
  padding: 10px;
}

/* 10px gutter */
.row {
  margin: -5px;
}
.col-3 {
  padding: 5px;
}
```

## 配置项

| 类名 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| .row  | 包含子列的容器 |  |  | 必需 |
| .col-*  | 子列宽度的大小， 基于父容器宽度自动计算|  |  | *号的取值范围为1到12 |
| .col-left-* | 子列相对自己原位置的左移距离 | | | *号的取值范围为1到12 |
| .col-right-* | 子列相对自己原位置的右移距离 | | | *号的取值范围为1到12 |
| .col-offset-* | 子列相对左边元素的偏移距离 | | | *号的取值范围为1到12 |