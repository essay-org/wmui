<template>
  <div class="wmui-swipe"
  @touchstart="touchStart"
  @touchmove="touchMove"
  @touchend="touchEnd"
  >
    <div class="wmui-swipe-items-container" ref="container">
      <slot></slot>
    </div>
    <div :class="['wmui-swipe-indicator-container', {'wmui-swipe-indicator-container-background': showTitle}]" v-if="showIndicators">
      <div v-if="showTitle" class="wmui-swipe-item-title">{{title}}</div>
      <ul :class="['wmui-swipe-indicators', {'wmui-swipe-indicators-right':
         indicatorsPosition === 'right'}]" v-if="indicatorsType === 'dot'">
        <li v-for="(page, pageIndex) in pages" :class="['wmui-swipe-indicator', {'current':pageIndex === index}]" :key="pageIndex"></li>
      </ul>
      <div v-if="indicatorsType === 'number'" class="wmui-swipe-number-indicator">{{index+1}} / {{pages.length}}</div>
    </div>
  </div>
</template>

<script>
import {once, addClass, removeClass} from '../_utils/dom.js'
export default {
  name: 'WmuiSwipe',
  data () {
    return {
      isReady: false,
      isDragging: false,
      isUserScrolling: false,
      isAnimating: false,
      index: 0,
      pages: [],
      titles: [],
      timer: null,
      reInitTimer: null,
      isNoDrag: false,
      isDone: false,
      dragState: {}
    }
  },
  props: {
    // 动画过渡时长
    speed: {
      type: Number,
      default: 300
    },
    // 过渡函数
    timingFunction: {
      type: String,
      default: 'ease-out'
    },
    // 设置默认项
    defaultIndex: {
      type: Number,
      default: 0
    },
    // 滚动间隔时间
    auto: {
      type: Number,
      default: 3000
    },
    // 是否循环
    loop: {
      type: Boolean,
      default: true
    },
    // 显示指示器
    showIndicators: {
      type: Boolean,
      default: true
    },
    // 显示标题
    showTitle: {
      type: Boolean,
      default: false
    },
    // 指示器类型
    indicatorsType: {
      type: String,
      default: 'dot'
    },
    // 指示器位置
    indicatorsPosition: {
      type: String,
      default: 'center'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  created () {
    this.dragState = {}
  },
  mounted () {
    this.isReady = true

    if (this.auto > 0) {
      this.timer = setInterval(() => {
        if (!this.loop && (this.index >= this.pages.length - 1)) {
          return this.clearTimer()
        }
        // 没有在拖动中，且不再运动中，在停留中
        if (!this.isDragging && !this.isAnimating) {
          this.next()
        }
      }, this.auto)
    }

    this.reInitPages()
  },
  destroyed () {
    if (this.timer) {
      this.clearTimer()
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer)
      this.reInitTimer = null
    }
  },
  computed: {
    title () {
      return this.titles[this.index]
    }
  },
  watch: {
    index (newIndex) {
      this.$emit('change', newIndex)
    }
  },
  methods: {
    touchStart (event) {
      if (this.isAnimating || this.isNoDrag) return
      this.isDragging = true
      this.isUserScrolling = false
      let element = this.$el
      let dragState = this.dragState
      let touch = event.touches[0]

      dragState.startTime = new Date()
      dragState.startLeft = touch.pageX
      dragState.startTop = touch.pageY
      dragState.startTopAbsolute = touch.clientY
      dragState.pageWidth = element.offsetWidth
      dragState.pageHeight = element.offsetHeight

      let prevPage = this.$children[this.index - 1]
      let dragPage = this.$children[this.index]
      let nextPage = this.$children[this.index + 1]

      if (this.loop && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1]
        }
        if (!nextPage) {
          nextPage = this.$children[0]
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null
      dragState.dragPage = dragPage ? dragPage.$el : null
      dragState.nextPage = nextPage ? nextPage.$el : null
      // console.log(dragState)
      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block'
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block'
      }
    },
    touchMove (event) {
      if (!this.isDragging || this.isNoDrag) return

      let dragState = this.dragState
      let touch = event.touches[0]

      dragState.currentLeft = touch.pageX
      dragState.currentTop = touch.pageY
      dragState.currentTopAbsolute = touch.clientY

      let offsetLeft = dragState.currentLeft - dragState.startLeft
      let offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute

      let distanceX = Math.abs(offsetLeft)
      let distanceY = Math.abs(offsetTop)
      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
        this.isUserScrolling = true
        return
      } else {
        this.isUserScrolling = false
        event.preventDefault()
      }
      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1)

      let towards = offsetLeft < 0 ? 'next' : 'prev'

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth)
      }
      this.translate(dragState.dragPage, offsetLeft)
      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth)
      }
    },
    touchEnd () {
      if (this.isUserScrolling) {
        this.isDragging = false
        this.dragState = {}
        return
      }
      if (!this.isDragging || this.isNoDrag) return

      let dragState = this.dragState

      let dragDuration = new Date() - dragState.startTime
      let towards = null

      let offsetLeft = dragState.currentLeft - dragState.startLeft
      let offsetTop = dragState.currentTop - dragState.startTop
      let pageWidth = dragState.pageWidth
      let index = this.index
      let pageCount = this.pages.length

      if (dragDuration < 300) {
        let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap')
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev'
      }

      if (!this.loop) {
        if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
          towards = null
        }
      }

      if (this.$children.length < 2) {
        towards = null
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage
      })

      this.dragState = {}
      this.isDragging = false
    },
    doAnimate (towards, options) {
      if (this.$children.length === 0) return
      if (!options && this.$children.length < 2) return

      let prevPage, currentPage, nextPage, offset, offsetLeft
      let speed = this.speed
      let index = this.index
      let pages = this.pages
      let pageCount = pages.length

      if (!options) {
        offset = this.$el.clientWidth
        currentPage = pages[index]
        prevPage = pages[index - 1]
        nextPage = pages[index + 1]

        if (this.loop && pageCount > 1) {
          if (!prevPage) {
            prevPage = pages[pageCount - 1]
          }
          if (!nextPage) {
            nextPage = pages[0]
          }
        }

        if (prevPage) {
          prevPage.style.display = 'block'
          this.translate(prevPage, -offset)
        }

        if (nextPage) {
          nextPage.style.display = 'block'
          this.translate(nextPage, offset)
        }
      } else {
        prevPage = options.prevPage
        currentPage = options.currentPage
        nextPage = options.nextPage
        offset = options.pageWidth
        offsetLeft = options.offsetLeft
      }

      let newIndex

      let oldPage = this.$children[index].$el

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1
        }
        if (this.loop && index === 0) {
          newIndex = pageCount - 1
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1
        }
        if (this.loop && index === pageCount - 1) {
          newIndex = 0
        }
      }

      let callback = () => {
        if (newIndex !== undefined) {
          let newPage = this.$children[newIndex].$el
          removeClass(oldPage, 'current')
          addClass(newPage, 'current')

          this.index = newIndex
        }
        if (this.isDone) {
          this.end()
        }

        if (prevPage) {
          prevPage.style.display = ''
        }

        if (nextPage) {
          nextPage.style.display = ''
        }
      }

      setTimeout(() => {
        if (towards === 'next') {
          this.isDone = true
          this.before(currentPage)
          this.translate(currentPage, -offset, speed, callback)
          if (nextPage) {
            this.translate(nextPage, 0, speed)
          }
        } else if (towards === 'prev') {
          this.isDone = true
          this.before(currentPage)
          this.translate(currentPage, offset, speed, callback)
          if (prevPage) {
            this.translate(prevPage, 0, speed)
          }
        } else {
          this.isDone = false
          this.translate(currentPage, 0, speed, callback)
          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              this.translate(prevPage, -offset, speed)
            }
            if (nextPage && offsetLeft < 0) {
              this.translate(nextPage, offset, speed)
            }
          } else {
            if (prevPage) {
              this.translate(prevPage, -offset, speed)
            }
            if (nextPage) {
              this.translate(nextPage, offset, speed)
            }
          }
        }
      }, 10)
    },
    swipeItemCreated () {
      if (!this.isReady) return
      clearTimeout(this.reInitTimer)
      this.reInitTimer = setTimeout(() => {
        this.reInitPages()
      }, 100)
    },
    swipeItemDestroyed () {
      if (!this.isReady) return
      clearTimeout(this.reInitTimer)
      this.reInitTimer = setTimeout(() => {
        this.reInitPages()
      }, 100)
    },
    translate (element, offset, speed, callback) {
      if (speed) {
        this.isAnimating = true
        element.style.webkitTransition = `-webkit-transform ${speed}ms ${this.timingFunction}`
        setTimeout(() => {
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
        }, 50)

        let called = false

        let transitionEndCallback = () => {
          if (called) {
            return
          }
          called = true
          this.isAnimating = false
          element.style.webkitTransition = ''
          element.style.webkitTransform = ''
          callback && callback.apply(this, arguments)
        }

        once(element, 'webkitTransitionEnd', transitionEndCallback)
        setTimeout(transitionEndCallback, speed + 100)
      } else {
        element.style.webkitTransition = ''
        element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
      }
    },
    reInitPages () {
      let children = this.$children
      // 只有一项禁止拖动
      this.isNoDrag = children.length === 1

      // 索引重置
      this.index = (this.defaultIndex >= 0 && this.defaultIndex < children.length) ? this.defaultIndex : 0

      children.forEach((child, index) => {
        this.pages.push(child.$el)
        this.titles.push(child.title)

        removeClass(child.$el, 'current')

        if (index === this.index) {
          addClass(child.$el, 'current')
        }
      })
    },
    next () {
      this.doAnimate('next')
    },
    prev () {
      this.doAnimate('prev')
    },
    before () {
      this.$emit('before', this.index)
    },
    end () {
      this.$emit('end', this.index)
    },
    clearTimer () {
      clearInterval(this.timer)
      this.timer = null
    },
    throttle (method, scope, time) {
      time = time || 100
      clearTimeout(method.tId)
      method.tId = setTimeout(function () {
        method.call(scope)
      }, time)
    }
  }
}
</script>

<style>
.wmui-swipe {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 350px;
}

.wmui-swipe-items-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.wmui-swipe-items-container > .wmui-swipe-item {
  position: absolute;
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}

.wmui-swipe-items-container > .wmui-swipe-item.current {
  display: block;
  transform: none;
}

.wmui-swipe-indicator-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}
.wmui-swipe-indicator-container-background {
  background: rgba(0,0,0,.2)
}

.wmui-swipe-item-title {
  line-height: 70px;
  font-size: 30px;
  text-indent: 1em;
}

.wmui-swipe-indicators {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.wmui-swipe-indicator {
  display: inline-block;
  width: 20px; /* px */
  height: 20px; /* px */
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.5;
  margin: 0 10px;
}
.wmui-swipe-indicator:first-child {
  margin-left: 0;
}
.wmui-swipe-indicator:last-child {
  margin-right: 0;
}
.wmui-swipe-indicator.current {
  opacity: 1;
}

.wmui-swipe-indicators-right {
  position: absolute;
  left: auto;
  right: 20px;
  transform: translateX(0);
}

.wmui-swipe-number-indicator {
  position: absolute;
  width: 100px;
  height: 70px;
  right: 0;
  bottom: 0;
  font-size: 24px;
  text-align: center;
  line-height: 70px;
  color: #FFFFFF;
}

.wmui-swipe-vertical-indicators {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}
.wmui-swipe-vertical-indicator {
  display: block;
  width: 5px;
  height: 5px;
  border: 4px solid rgba(152,153,151,.6);
  background-color: transparent;
  border-radius: 100%;
  margin: 0 0 40px 0;
  cursor: pointer;
  -webkit-transition: all .36s linear;
  transition: all .36s linear;
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box
}
.wmui-swipe-vertical-indicator::after,
.wmui-swipe-vertical-indicator::before {
  content: '';
  display: inline-block;
  width: 31px;
  height: 31px;
  border: 2px solid transparent;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  border-radius: 100%;
  position: absolute;
  top: -15px;
  left: -15px
}
.wmui-swipe-vertical-indicator::before {
  width: 21px;
  height: 21px;
  top: -10px;
  left: -10px;
  opacity: .3
}
.wmui-swipe-vertical-indicator:hover,
.wmui-swipe-vertical-indicator.current {
  border-color: #fff;
  background-color: #258fb8;
}
.wmui-swipe-vertical-indicator.current::before,
.wmui-swipe-vertical-indicator.current::after {
  border-color: #258fb8;
  -webkit-animation: blink 3s linear infinite;
  animation: blink 3s linear infinite
}
@-webkit-keyframes blink {
  0% {
    -webkit-transform: scale(0) translateZ(0);
    transform: scale(0) translateZ(0);
    opacity: 0
  }

  85% {
    opacity: 1
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0)
  }
}
@keyframes blink {
  0% {
    transform: scale(0) translateZ(0);
    opacity: 0
  }

  85% {
    opacity: 1
  }

  100% {
    opacity: 0;
    transform: scale(1) translateZ(0)
  }
}
</style>
