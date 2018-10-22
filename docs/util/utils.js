import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/highlight.js'
import hl_html from 'highlight.js/lib/languages/xml.js'
import hl_css from 'highlight.js/lib/languages/css.js'
import hl_javascript from 'highlight.js/lib/languages/javascript.js'
import hl_json from 'highlight.js/lib/languages/json.js'
import hl_bash from 'highlight.js/lib/languages/bash.js'
hljs.registerLanguage('html', hl_html)
hljs.registerLanguage('css', hl_css)
hljs.registerLanguage('javascript', hl_javascript)
hljs.registerLanguage('json', hl_json)
hljs.registerLanguage('bash', hl_bash)

export function highlightInit() {
  document.querySelectorAll('pre code').forEach(e => {
    hljs.highlightBlock(e)
  })
}

export function capitalize(word) {
  return word.replace(/^([a-z])([a-z]+)/, (match, p1, p2) => {
    return `${p1.toUpperCase()}${p2}`
  })
}

export const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value
    }
    return ''
  }
})