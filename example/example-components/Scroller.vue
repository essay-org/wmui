<template>
  <div class="scroller-demo">
    <ivc-header title="Scroller">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <!-- 上拉刷新 -->
    <div class="scroller-demo-wrap">

    <ivc-scroller
    :onRefresh="updateData"
    :onLoad="loadData"
    refreshText="下拉更新"
    loadText="加载更多"
    loadingText="拼命加载中"
    noDataText="没有数据啦"
    ref="scrollerTest"
    >
      <ul class="scroller-demo-list">
        <li v-for="item in listData">{{ item }}</li>
      </ul>
    </ivc-scroller>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        listData: []
      }
    },
    created () {
      for (let i = 1; i <= 20; i++) {
        this.listData.push(i)
      }
    },
    methods: {
      updateData () {
        // 模拟数据请求
        setTimeout(() => {
          let firstItem = this.listData[0] - 1
          // 无更多数据
          if (firstItem < -9) {
            this.$refs.scrollerTest.noMoreRefresh()
            return
          }
          // 有数据
          for (let i = firstItem; i > firstItem - 10; i--) {
            this.listData.unshift(i)
          }
          this.$refs.scrollerTest.finishPullToRefresh()
        }, 2000)
      },
      loadData () {
        setTimeout(() => {
          let lastItem = this.listData[this.listData.length - 1] + 1
          console.log(this.listData)
          if (lastItem > 40) {
            this.$refs.scrollerTest.noMoreInfiniteLoading()
            return
          }

          for (let i = lastItem; i < lastItem + 10; i++) {
            this.listData.push(i)
          }
          this.$refs.scrollerTest.finishInfiniteLoading()
        }, 2000)
      }
    }
  }
</script>
<style lang="scss">
.scroller-demo {
  // 父元素必须设置
  height: 100%;
  width: 100%;
  position: relative;
  &-wrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    // 页眉高度
    top: 88px;
  }
  &-list {
    background-color: #fff;
    li {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 24px;
      &+li {
        border-top: 1px solid #f3f3f3;
      }
    }
  }
}
</style>
