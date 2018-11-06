<template>
  <div class="wmui-preview markdown-body" v-html="html"></div>
</template>
<script>
import { isServer } from '../_utils/util.js'
export default {
  name: 'wmui-preview',
  props: ['content', 'options'],
  data () {
    return {
      html: ''
    }
  },
  watch: {
    content () {
      this.renderIt()
    },

    // 配置文件变化后重新初始化
    options: {
      deep: true,
      handler () {
        this.initMarkdown()
      }
    }
  },
  methods: {
    // 初始化配置文件
    initMarkdown () {
      if (isServer) return false
      // 可在这里配置默认项
      let options = {
        html: true,
        breaks: true,
        ...this.options
      }
      this.markdownit = require('markdown-it')(options)
      this.renderIt()
    },
    renderIt () {
      if (isServer) return false
      this.html = this.markdownit.render(this.content)
      this.$nextTick(() => {
        if (this.$el.querySelectorAll('a')) {
          this.$el.querySelectorAll('a').forEach((a) => {
            a.setAttribute('target', '_blank')
          })
        }
      })
    }
  },
  mounted () {
    this.initMarkdown()
  }
}
</script>
<style>
@import "./github-markdown.css";
.wmui-preview {
  flex: 1;
  padding: 15px;
}
</style>