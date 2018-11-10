<template>
  <div class="wmui-swiper" @mouseenter="enter" @mouseleave="leave">
    <div class="wmui-swiper-main" ref="sliderMain">
      <slot></slot>
    </div>
    <!-- 控制按钮，可选项 -->
    <div class="wmui-swiper-arrow" v-show="arrow && showArrow">
      <span class="wmui-swiper-ctrl-prev" @click="prev">
        <i class="wmui icon-arrow-left"></i>
      </span>
      <span class="wmui-swiper-ctrl-next" @click="next">
        <i class="wmui icon-arrow-right"></i>
      </span>
    </div>

    <!-- 小圆点 -->
    <div class="wmui-swiper-ctrl">
      <span v-for="(item, index) in pages" :key="index" :class="{'current': currentPage == index}" class="wmui-swiper-ctrl-icon" @click="changePage(index)">{{ item }}</span>
    </div>
  </div>
</template>
<script>
/**
 * obj 执行动画的dom元素
 * json 要运动的属性和值 如{left: 200}
 * fn 动画完成后的回掉
 */
function animate(obj, json, fn) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    let flag = true
    for (let attr in json) {
      let current = 0
      // 基于opacity的渐变动画
      if (attr === 'opacity') {
        current = Math.round(parseInt(getStyle(obj, attr) * 100)) || 0
      } else {
        current = parseInt(getStyle(obj, attr))
      }

      // 步长计算
      let step = (json[attr] - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)

      if (attr === 'opacity') {
        if ('opacity' in obj.style) {
          obj.style.opacity = (current + step) / 100
        } else {
          obj.style.filter = 'alpha(opacity = ' + (current + step) * 10 + ')'
        }
      } else if (attr === 'zIndex') {
        // 基于z-index的层级动画
        obj.style.zIndex = json[attr]
      } else {
        // 默认是基于定位的滚动动画
        obj.style[attr] = current + step + 'px'
      }

      // 没有到达终点
      if (current !== json[attr]) {
        flag = false
      }
    }
    if (flag) {
      clearInterval(obj.timer)
      if (fn) {
        fn()
      }
    }
  }, 10)
}

/**
 * 获取dom元素的属性值
 */
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return window.getComputedStyle(obj, null)[attr]
  }
}

export default {
  name: 'wmui-swiper',
  data() {
    return {
      pages: 0,
      currentPage: 0,
      key: 0,
      timer: null,
      scrollWidth: 0,
      els: [],
      showArrow: false
    }
  },
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    }
  },

  mounted() {
    this.pages = this.$children.length
    this.scrollWidth = this.$children[0].$el.clientWidth
    for (let index = 0; index < this.pages; index++) {
      let el = this.$children[index].$el
      if (index !== 0) {
        el.style.left = -this.scrollWidth + 'px'
      }
      this.els.push(el)
    }

    this.timer = setInterval(this.autoPlay, this.duration)
  },

  methods: {
    changePage(index) {
      // let dom = this.els[this.currentPage]
      if (index > this.currentPage) {
        animate(this.els[this.currentPage], { left: -this.scrollWidth })
        this.els[index].style.left = this.scrollWidth + 'px'
      } else if (index < this.currentPage) {
        animate(this.els[this.currentPage], { left: this.scrollWidth })
        this.els[index].style.left = -this.scrollWidth + 'px'
      }
      this.currentPage = index
      animate(this.els[this.currentPage], { left: 0 })
      this.currentPage = index
    },
    autoPlay() {
      let dom = this.els[this.currentPage]
      animate(dom, { left: -this.scrollWidth })
      this.currentPage++
      this.currentPage > (this.els.length - 1) ? this.currentPage = 0 : this.currentPage
      dom = this.els[this.currentPage]
      dom.style.left = this.scrollWidth + 'px'
      animate(dom, { left: 0 })
    },
    prev() {
      animate(this.els[this.currentPage], { left: this.scrollWidth })
      this.currentPage--
      this.currentPage < 0 ? this.currentPage = this.els.length - 1 : this.currentPage
      this.els[this.currentPage].style.left = -this.scrollWidth + 'px'
      animate(this.els[this.currentPage], { left: 0 })
    },
    next() {
      animate(this.els[this.currentPage], { left: -this.scrollWidth })
      this.currentPage++
      this.currentPage > this.els.length - 1 ? this.currentPage = 0 : this.currentPage
      this.els[this.currentPage].style.left = this.scrollWidth + 'px'
      animate(this.els[this.currentPage], { left: 0 })
    },
    enter() {
      this.showArrow = true
      clearInterval(this.timer)
    },
    leave() {
      this.showArrow = false
      clearInterval(this.timer) // 开启定时器先清除定时器
      this.timer = setInterval(this.autoPlay, this.duration)
    }
  }
}
</script>
