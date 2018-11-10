<template>
  <div class="wmui-preview markdown-body" v-html="html"></div>
</template>
<script>
import markdownIt from 'markdown-it'
import { isServer } from '../_utils/util.js'

export default {
  name: 'wmui-preview',
  props: {
    content: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      html: ''
    }
  },
  watch: {
    content() {
      this.renderIt()
    }
  },
  methods: {
    renderIt() {
      this.html = this.markdownit.render(this.content)
      if(!isServer) {    
        this.$nextTick(() => {
          if (this.$el.querySelectorAll('a')) {
            this.$el.querySelectorAll('a').forEach((a) => {
              a.setAttribute('target', '_blank')
            })
          }
        })
      }
    }
  },
  created() {
    const hljs = require('highlight.js/lib/highlight.js')
    const hl_html = require('highlight.js/lib/languages/xml.js')
    const hl_css = require('highlight.js/lib/languages/css.js')
    const hl_javascript = require('highlight.js/lib/languages/javascript.js')
    const hl_json = require('highlight.js/lib/languages/json.js')
    const hl_bash = require('highlight.js/lib/languages/bash.js')
    hljs.registerLanguage('html', hl_html)
    hljs.registerLanguage('css', hl_css)
    hljs.registerLanguage('javascript', hl_javascript)
    hljs.registerLanguage('json', hl_json)
    hljs.registerLanguage('bash', hl_bash)
    let options = {
      html: true,
      breaks: true,
      linkify: true,
      highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, str).value
        }
        return ''
      },
      ...this.options
    }
    this.markdownit = markdownIt(options)
    this.renderIt()
  }
}
</script>
