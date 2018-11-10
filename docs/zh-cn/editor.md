## Editor

### 编辑器

```html
<template>
  <div>
    <wmui-edit v-model="content" :upload="uploadImg" @save="save" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '## hello',
      uploadImg: {
        url: 'http://localhost:8080/v1/upload',
        headers: {
          token: ''
        }
      }
    }
  },
  methods: {
    save(val) {
      console.log(val)
    }
  }
}
</script>
```

### 内容展示

```html
<template>
  <wmui-preview :content="content"/>
</template>
<script>
  export default {
    data() {
      return {
        content: '## hello'
      }
    }
  }
</script>
```

`wmui-preview`组件用于渲染markdown内容

### 配置项

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| preview | 是否开启预览模式 | Boolean  | true |
| v-model | 编辑的内容 | String |  |
| zIndex  | 编辑器的层级 | number | 99 |
| height  | 编辑器的高度 | String | 70vh |
| upload  | 图片上传配置 | Object | | | 参考upload配置项说明 |
| content | markdown内容 | String | | | 默认采用GitHub风格渲染内容 |
| save | 当按下ctrl+s时执行的函数 | Function | | | 可在函数里执行数据的提交 | 

#### upload配置项

```javascript
{
  // 图片上传api地址，需返回一个图片地址，如'https://test.com/static/a.jpg'
  url: 'http://localhost:8080/v1/upload',
  // 如果需要认证在这里可配置
  headers: {
    token: 'token value'
  }
}
```