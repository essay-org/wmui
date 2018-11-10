## Pagination

Pagination 分页组件

## 用法

```html
<template>
  <div class="demo">
    <wmui-pagination 
      :total="total" 
      :limit="limit" 
      :itemCount="itemCount" 
      :currentPage="currentPage" 
      @pageClick="pageClick"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 99,
      limit: 10,
      itemCount: 5,
      currentPage: 1
    }
  },
  methods: {
    pageClick(i) {
      this.currentPage = i
      // router jump
    }
  }
}
</script>
```

## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| total | 数据的总条数 | Number | 0 | | 必选 |
| limit | 每页显示多少条 | Number | 10 |
| itemCount | 分页显示的数量 | Number| 5 |
| currentPage | 当前所在页 | Number | | 用于高亮当前显示页 |
| pageClick | 点击页码时执行的函数 | Function | | 函数返回当前页码值，可在此请求分页数据 |
| showFirstPage | 显示首页按钮 | Boolean | false |
| showLastPage | 显示尾页按钮 | Boolean | false |