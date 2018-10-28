<template>
  <div class="container">
    <header style="height: 50px; background-color: #333;">I am header</header>
    <div class="intro">
      <p>使用：必须在data里定义navs,classes,scrollInfo, activeIndex这四个变量。navs定义导航数据。classes定义每个面板特有的类名，scrollInfo用于初始化每个面板的offsetTop。activeIndex定义需要高亮菜单的索引，默认值0可用于定义首页菜单。</p>
    </div>

    <!-- 核心开始 -->
    <section class="w-scroll-navs">
      <ul>
        <!-- 可选项 -->
        <li :class="{'w-scroll-active': activeIndex === 0}" @click="go(0)">首页</li>
        <!-- 必选项 -->
        <li v-for="(item, index) in navs" :key="index" @click="go(index + 1)" :class="{'w-scroll-active': (index + 1) === activeIndex}">{{ item }}</li>
        <!-- 可选项 -->
        <li @click="backTop">顶部</li>
      </ul>
    </section>
    <section class="w-scroll-body">
      <section class="w-scroll-panel one" ref="one">
        <p>one</p>
      </section>
      <section class="w-scroll-panel two" ref="two">
        <p>two</p>
      </section>
      <!-- 如果要增加一个section，复制一个，并在navs和classes添加相应数据即可 -->
      <section class="w-scroll-panel three" ref="three">
        <p>three</p>
      </section>
    </section>
    <!-- 核心结束 -->

    <footer style="height: 200px; background-color: #333">I am footer </footer>
  </div>
</template>
<script>
import animation from '../assets/scripts/animation'
import { offset } from '../assets/scripts/utils'

export default {
  name: 'w-scrollspy',
  data () {
    return {
      navs: ['一楼', '二楼', '三楼'],
      classes: ['one', 'two', 'three'],
      scrollInfo: [],
      activeIndex: 0
    }
  },
  mounted () {
    // 初始化每个w-scroll-panel盒子的高度
    for (let index = 0; index < this.classes.length; index++) {
      const c = this.classes[index]
      const el = this.$refs[c]
      this.scrollInfo.push(offset(el).top)
    }
    window.addEventListener('scroll', () => {
      this.wScrollActive()
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
    wScrollActive () {
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
<style lang="scss">
// 导航
.w-scroll-navs {
  position: fixed;
  bottom: 50px;
  right: 50px;
  ul {
    background-color: grey;
    li {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}

// 高亮
.w-scroll-active {
  background-color: #333;
}

// 自定义，不需要设置高度
.one,
.two,
.three {
  font-size: 60px;
  width: 100%;
  padding-top: 100px;
  text-align: center;
}
.one {
  background: green;
  padding-bottom: 200px;
}
.two {
  padding-bottom: 500px;
  background: teal;
}
.three {
  padding-bottom: 400px;
  background: red;
}
</style>
