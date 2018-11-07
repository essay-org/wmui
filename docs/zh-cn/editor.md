## Editor

### 编辑器

```html
<template>
  <div>
    <wmui-edit 
    v-model="content" 
    :options="options" 
    :zIndex="999" 
    :upload="uploadImg" 
    @save="save"/>
  </div>
</template>
<script>
// 代码高亮
import hljs from 'highlight.js'
export default {
  data () {
    return {
      content: ' ## hello ',
      options: {
        linkify: true,
        highlight (str, lang = 'javascript') {
          if (hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) { }
          }
          return ''
        },
      },
      uploadImg: {
        url: 'http://localhost:8080/v1/upload',
        headers: {
          token: ''
        }
      }
    }
  },
  methods: {
    save (val) {
      console.log(val)
    }
  }
}
</script>
<style>
/* 代码高亮风格 */
@import "~highlight.js/styles/github.css";
</style>
```

### 内容展示

```html
<template>
  <wmui-preview :content="content" :options="options"/>
</template>
<script>
  export default {
    data() {
      return {
        content: '## hello',
        options: {}
      }
    },
    mounted() {
      if (process.browser) {
        this.options = {
          linkify: true,
          highlight(str, lang = 'javascript') {
            if (require('highlight.js').getLanguage(lang)) {
              try {
                return require('highlight.js').highlight(lang, str).value
              } catch (__) {}
            }
            return ''
          }
        }
      }
    }
  }
</script>
```

`wmui-preview`组件用于渲染markdown内容

### 配置项

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| preview | 是否开启预览模式 | Boolean  | true | | |
| v-model | 编辑的内容 | String |  |
| options | markdown-it的配置项 | Object | 参考[官方文档](https://github.com/markdown-it/markdown-it) |
| zIndex  | 编辑器的层级 | number | 99 |
| height  | 编辑器的高度 | String | 70vh |
| upload  | 图片上传配置 | Object | | | 参考upload配置项说明 |
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