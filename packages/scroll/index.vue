<template>
  <div class="wmui-scroll" v-scroll="onLoad">
    <slot></slot>
    <p v-if="loading" >加载中...</p>
    <p v-if="noMoreData" class="wmui-no-data">没有更多数据了</p>
  </div>
</template>
<script>
export default {
  name: 'wmui-scroll',
  props: {
    loadData: Function
  },
  data () {
    return {
      noMoreData: false,
      loading: false
    }
  },
  directives: {
    scroll: {
      bind (el, binding) {
        window.addEventListener('scroll', function () {
          // 这里无法访问到this,所以通过外部的onLoad函数来判断是否在loading中
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          // 滚动条到达底部，执行loadData函数
          if (scrollTop + document.documentElement.clientHeight + 100 >= document.documentElement.scrollHeight) {
            let onLoad = binding.value
            onLoad()
          }
        }, false)
      }
    }
  },
  methods: {
    noMore () {
      this.noMoreData = true
    },
    start () {
      if (!this.loading) {
        this.loading = true
      }
    },
    finish () {
      this.loading = false
    },
    onLoad () {
      if (!this.loading) {
        this.loadData()
      }
    }
  }
}
</script>
<style lang="scss">
.wmui-loading {
  margin: 30px;
}
.wmui-no-data {
  margin: 30px;
  text-align: center;
  color: $gray-light;
}
</style>
