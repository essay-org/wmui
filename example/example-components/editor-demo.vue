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