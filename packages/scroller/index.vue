<template>
  <div class="wmui-scroller"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
  >
    <div class="wmui-scroller-container" ref="scrollTarget">
      <!-- 上拉刷新 -->
      <div class="wmui-scroller-refresh" v-if="onRefresh" :class="{'wmui-scroller-refresh-no': isNoRefresh}">
        <!-- 无更多数据 -->
        <template v-if="isNoRefresh">
          <p class="wmui-scroller-text">{{noDataText}}</p>
        </template>
        <template v-else>
          <!-- refresh提示 -->
          <div class="wmui-scroller-refresh-pull" v-show="pullToRefreshState !== 2" :class="{'wmui-scroller-refresh-holding': pullToRefreshState === 1}">
              <i class="wmui-icon-refresh"></i>
              <p class="wmui-scroller-text">{{refreshText}}</p>
          </div>
          <!-- loading中 -->
          <div class="wmui-scroller-refresh-loading" v-show="pullToRefreshState === 2">
            <div class="wmui-scroller-spin">
             <i v-for="(item, index) in 12" :key="index"></i>
            </div>
             <p class="wmui-scroller-text">{{loadingText}}</p>
          </div>
        </template>
      </div>

      <div class="wmui-scroller-slot" ref="slotTarget">
        <slot></slot>
      </div>

      <!-- 无限加载 -->
      <div class="wmui-scroller-infinite" v-if="onLoad && contentOverflow" :class="{'wmui-scroller-infinite-no': isNoLoad}">
        <template v-if="isNoLoad && contentOverflow">
          <p class="wmui-scroller-text">{{noDataText}}</p>
        </template>
        <template v-else-if="showLoadingState">
          <div class="wmui-scroller-infinite-load" v-show="infiniteLoadingState !== 1">
            <p class="wmui-scroller-text">{{loadText}}</p>
          </div>
          <div class="wmui-scroller-infinite-loading" v-show="infiniteLoadingState === 1">
            <div class="wmui-scroller-spin">
             <i v-for="(item, index) in 12" :key="index"></i>
            </div>
            <p class="wmui-scroller-text">{{loadingText}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import translate from '../_utils/translate.js'
import Scroller from '../_utils/Scroller.js'
export default {
  name: 'WmuiScroller',
  props: {
    onRefresh: Function,
    onLoad: Function,
    refreshText: {
      type: String,
      default: '下拉更新数据'
    },
    loadText: {
      type: String,
      default: '加载更多数据'
    },
    loadingText: {
      type: String,
      default: '正在加载'
    },
    noDataText: {
      type: String,
      default: '没有更多数据了'
    },
    noDataLoadLock: {
      type: Boolean,
      default: true
    },
    // 开启动画，必须开启bouncing才有效果
    animating: {
      type: Boolean,
      default: true
    },
    // 动画时长
    animationDuration: {
      type: Number,
      default: 250
    },
    // 滚动方法
    zooming: {
      type: Boolean,
      default: false
    },
    // scroller弹性开启
    bouncing: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isNoRefresh: false,
      isNoLoad: false,
      showLoadingState: true,
      pullToRefreshFlag: false,
      noDataLoadLocker: false,
      mousedown: false,
      $scrollTarget: null,
      $slotTarget: null,
      scroller: null,
      render: null,
      scrollTargetRect: null,
      slotObserver: null,
      pullToRefreshState: 0,
      infiniteLoadingState: 0,
      tipHeight: 0,
      contentHeight: 0,
      containerHeight: 0
    }
  },
  mounted () {
    this.setInitData()
    this.bindEvents()
  },
  computed: {
    contentOverflow () {
      return this.contentHeight >= this.containerHeight
    }
  },
  methods: {
    setInitData () {
      this.$scrollTarget = this.$refs.scrollTarget
      this.$slotTarget = this.$refs.slotTarget
      this.scrollTargetRect = this.$scrollTarget.getBoundingClientRect()
      this.containerHeight = this.$el.getBoundingClientRect().height
      this.contentHeight = this.$slotTarget.getBoundingClientRect().height
      this.render = translate.getRender(this.$scrollTarget)
      if (this.onRefresh) {
        this.tipHeight = this.$el.querySelector('.wmui-scroller-refresh').offsetHeight
      } else if (this.onLoad) {
        this.tipHeight = this.$el.querySelector('.wmui-scroller-infinite').offsetHeight
      }
      // 监视slot变化，更新scroller
      this.slotObserver = new MutationObserver(() => {
        this.updateDOMData()
        this.resetDimensions()
      })

      this.slotObserver.observe(this.$slotTarget, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      })
    },
    updateDOMData () {
      this.contentHeight = this.$slotTarget.getBoundingClientRect().height
    },
    resetDimensions () {
      let ww = this.$el.clientWidth
      let wh = this.$el.clientHeight
      let ew = this.$slotTarget.offsetWidth
      let eh = this.$slotTarget.offsetHeight
      if (this.isNoRefresh) {
        eh += this.tipHeight
      }
      if (this.isNoLoad) {
        eh += this.tipHeight
      }
      this.scroller.setDimensions(ww, wh, ew, eh)
    },
    bindEvents () {
      this.scroller = new Scroller(this.render, {
        scrollingX: false,
        zooming: this.zooming,
        animating: this.animating,
        animationDuration: this.animationDuration,
        bouncing: this.bouncing
      })
      let left = this.scrollTargetRect.left + this.$scrollTarget.clientLeft
      let top = this.scrollTargetRect.top + this.$scrollTarget.clientTop
      this.scroller.setPosition(left, top)
      this.resetDimensions()
      if (this.onRefresh) {
        this.scroller.activatePullToRefresh(this.tipHeight, () => {
          // 触发下拉
          this.isNoRefresh = false
          this.pullToRefreshFlag = false
          this.pullToRefreshState = 1
        }, () => {
          // 加载完毕状态为0，终止加载状态仍然是1
          if (this.pullToRefreshState === 1) {
            this.pullToRefreshFlag = true
          }
          this.pullToRefreshState = 0
        }, () => {
          // 防止快速下拉多次导致重复请求
          if (this.pullToRefreshState === 2) return
          // 数据加载中
          this.pullToRefreshState = 2
          this.onRefresh()
        })
      }
    },
    touchStart (e) {
      if (e.target.tagName.match(/input|textarea|select/i)) return
      this.scroller.doTouchStart(e.touches, e.timeStamp)
    },
    touchMove (e) {
      e.preventDefault()
      this.scroller.doTouchMove(e.touches, e.timeStamp)

      if (this.onLoad && this.contentOverflow) {
        let top = this.scroller.getValues().top
        let ww = this.$el.clientWidth
        let wh = this.$el.clientHeight
        let ew = this.$slotTarget.offsetWidth
        let eh = this.$slotTarget.offsetHeight + this.tipHeight
        // 上拉刷新是无数据状态，高度重新计算
        if (this.isNoRefresh) {
          eh += this.tipHeight
        }

        if (top + this.$el.clientHeight > this.$slotTarget.offsetHeight + this.tipHeight) {
          this.scroller.setDimensions(ww, wh, ew, eh)
        } else if (top + this.$el.clientHeight === this.$slotTarget.offsetHeight + this.tipHeight) {
          this.resetDimensions()
        }
      }
    },
    touchEnd (e) {
      this.scroller.doTouchEnd(e.timeStamp)

      if (this.onLoad && this.contentOverflow) {
        let top = this.scroller.getValues().top
        /*
         *console.log(top)
         *console.log(this.$el.clientHeight)
         *console.log(this.$slotTarget.offsetHeight)
         *console.log(this.tipHeight)
        */
        if (top + this.$el.clientHeight > this.$slotTarget.offsetHeight + this.tipHeight) {
          // 加载过程中多次下拉，避免重复请求数据
          if (this.infiniteLoadingState) return
          // 没更多数据时继续下拉，不在执行请求操作
          if (this.noDataLoadLocker) return
          this.isNoLoad = false
          this.infiniteLoadingState = 1
          setTimeout(() => {
            this.onLoad()
          }, 200)
        }
      }

      if (this.pullToRefreshFlag) {
        this.scroller.scrollTo(0, this.tipHeight, true)
        setTimeout(() => {
          this.pullToRefreshFlag = false
          this.isNoRefresh = false
          this.scroller.scrollTo(0, 0, false)
          this.resetDimensions()
        }, this.animationDuration)
      }
    },
    mouseDown (e) {
      if (e.target.tagName.match(/input|textarea|select/i)) return
      this.scroller.doTouchStart([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseMove (e) {
      if (!this.mousedown) return
      this.scroller.doTouchMove([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseUp (e) {
      if (!this.mousedown) return
      this.scroller.doTouchEnd(e.timeStamp)
      this.mousedown = false
    },
    finishPullToRefresh () {
      this.scroller.finishPullToRefresh()
    },
    noMoreRefresh () {
      this.isNoRefresh = true
      this.scroller.scrollTo(0, 0, false)
      this.scroller.finishPullToRefresh()
      this.scroller.setDimensions(this.$el.clientWidth, this.$el.clientHeight, this.$slotTarget.offsetWidth, this.$slotTarget.offsetHeight + this.tipHeight)
    },
    noMoreInfiniteLoading () {
      this.finishInfiniteLoading()
      this.isNoLoad = true
      this.noDataLoadLocker = true
    },
    finishInfiniteLoading () {
      this.infiniteLoadingState = 0

      // 如果未拉来数据，或者新 DOM 高度过低，调整 scroll 位置避免露出底部提示文字

      let transformY = -(translate.getElementTranslate(this.$scrollTarget).top)
      let contentHeight = this.$slotTarget.getBoundingClientRect().height

      if (this.containerHeight + transformY > contentHeight) {
        this.showLoadingState = false
        this.scroller.scrollTo(0, contentHeight - this.containerHeight + this.tipHeight, true)
        setTimeout(() => {
          this.showLoadingState = true
        }, this.animationDuration)
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.wmui-scroller {
  width: 100%;
  height: 100%;
  user-select: none;
  overflow: hidden;
  &-refresh {
    margin-top: -104px;
    height: 104px;
    font-size: 24px; /* px */
    color: $black-light;
    &-no {
      margin-top: 0;
    }
    &-pull,
    &-loading,
    &-no {
      display: flex;
      height: 104px;
      align-items: center;
      justify-content: center;
    }
    .wmui-icon-refresh {
      vertical-align: middle;
      display: inline-block;
      font-size: 40px;
      margin-right: 20px;
      transform-origin: center center;
      transition: all 0.5s;
    }
    &-holding {
      .wmui-icon-refresh {
      transform: rotate(360deg);
      }
    }
  }
  &-infinite {
    height: 104px;
    font-size: 24px; /* px */
    color: $black-light;
    &-load,
    &-loading,
    &-no {
      display: flex;
      height: 104px;
      align-items: center;
      justify-content: center;
    }
  }
  /* common */
  &-text {
    vertical-align: middle;
  }

  &-spin {
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
  }
  @for $i from 1 through 12 {
    &-spin > i:nth-child(#{$i}) {
      transform: rotate((30deg *($i - 1)));
      animation: wmui-spin 1.2s (-0.1*$i) * 1s infinite ease-in-out;
    }
  }
  &-spin > i {
    background-color: $black;
    display: block;
    width: 4px;
    height: 11px;
    border-radius: 4px;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    position: absolute;
    transform-origin: center 20px;
  }

  @keyframes wmui-spin {
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
