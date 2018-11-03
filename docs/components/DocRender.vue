<template>
  <div :class="`${componentName} markdown-body`" v-html="content"></div>
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
@import "../assets/styles/markdown-github.css";
</style>
