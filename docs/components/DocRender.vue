<template>
  <div :class="`${componentName} markdown`" v-html="content"></div>
</template>
<script>
import docs from '../zh-cn/config.js'
import { highlightInit, md } from '../util/utils.js'
export default {
  props: {
    componentName: {
      type: String
    },
  },
  data () {
    return {
      content: '',
      mdList: {}
    }
  },
  mounted () {
    for (const key in docs) {
      const element = docs[key];
        element.forEach((item) => {
          this.mdList[item.en] = require(`../zh-cn/${item.en}.md`)
        })
    }
    this.render()
  },
  watch: {
    componentName () {
      this.render()
    }
  },
  methods: {
    render () {
      this.content = md.render(this.mdList[this.componentName])
      this.$nextTick(() => {
        // 给code和pre加高亮
        highlightInit()
      })
    }
  }
}

</script>
<style lang="scss">
@import "~highlight.js/styles/github.css";
.markdown {
  h1 {
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: #222;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    color: #737373;
    & + p {
      margin-top: 5px;
    }
  }

  ul,
  ol {
    margin-top: 10px;
  }

  li {
    a {
      color: #737373;
    }
  }
  pre,
  code {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: sfmono-regular, Consolas, "liberation mono";
  }
  table {
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    color: #656b78;
    th,
    td {
      border: 1px solid #e8e8e8;
      padding: 10px 12px;
      text-align: left;
    }
  }
}
</style>
