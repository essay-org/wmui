<template>
  <div class="wmui-scrollspy">
    <section class="wmui-scrollspy-navs">
      <ul>
        <li 
          :class="{'wmui-scrollspy-active': activeIndex === 0}" 
          @click="go(0)"
          v-if="defaultNav">{{ defaultNav }}</li>
        <li 
          v-for="(item, index) in panelNavs" 
          :key="index" 
          @click="go(index + 1)" 
          :class="{'wmui-scrollspy-active': (index + 1) === activeIndex}">{{ item }}</li>
        <li @click="backTop" v-if="hasBackTop">顶部</li>
      </ul>
    </section>
    <section class="wmui-scrollspy-body">
      <slot></slot>
    </section>
  </div>
</template>
<script>
import animation from '../_utils/animation'
import { offset } from '../_utils/util'
export default {
  name: 'wmui-scrollspy',
  props: {
    panelNavs: {
      type: Array,
      default: () => []
    },
    hasBackTop: {
      type: Boolean,
      default: false
    },
    defaultNav: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scrollInfo: [],
      activeIndex: 0
    }
  },
  mounted () {
    // 初始化每个wmui-scroll-panel盒子的高度
    const els = document.querySelectorAll('.wmui-scrollspy-panel')
    const len = els.length
    for (let index = 0; index < len; index++) {
      this.scrollInfo.push(offset(els[index]).top)
    }
    window.addEventListener('scroll', () => {
      this.scrollActive()
    }, false)
  },
  methods: {
    go (index) {
      let end = this.scrollInfo[index - 1]
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (index === 0) {
        end = 0
      }
      animation(scrollTop, end, 1000, 'Quart.easeOut', function (value) {
        document.body.scrollTop = document.documentElement.scrollTop = value
      })
    },
    backTop () {
      let doc = document.body.scrollTop || document.documentElement.scrollTop
      animation(doc, 0, 300, 'Linear', function (value) {
        document.body.scrollTop = document.documentElement.scrollTop = value
      })
    },
    scrollActive () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      let len = this.scrollInfo.length
      for (let index = 0; index < len; index++) {
        if (this.scrollInfo[index] <= scrollTop && scrollTop < this.scrollInfo[index + 1]) {
          this.activeIndex = index + 1
          break
        } else if (scrollTop >= this.scrollInfo[len - 1]) {
          this.activeIndex = len
        } else if (scrollTop < this.scrollInfo[0]) {
          this.activeIndex = 0
        }
      }
    }
  }
}
</script>
