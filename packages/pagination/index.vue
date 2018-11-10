<template>
  <div class="wmui-pagination">
    <ul>
      <li @click="goTo(1)" v-if="showFirstPage"><a>首页</a></li>
      <li v-show="currentPage !== 1" @click="goTo(currentPage-1)"><a>上一页</a></li>
      <li v-for="index in pages" @click="goTo(index)" :class="{'active':currentPage == index}" :key="index">
        <a>{{index}}</a>
      </li>
      <li v-show="currentPage !== pageCount && pageCount > 1" @click="goTo(currentPage+1)"><a>下一页</a></li>
      <li @click="goTo(pageCount)" v-if="showLastPage"><a>尾页</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'wmui-pagination',
  props: {
    showFirstPage: {
      type: Boolean,
      default: false,
    },
    showLastPage: {
      type: Boolean,
      default: false
    },
    itemCount: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.limit)
    },
    pages() {
      let pag = []
      if (this.currentPage < this.itemCount) {
        let i = Math.min(this.itemCount, this.pageCount)
        while (i) {
          pag.unshift(i--)
        }
      } else { // 10 - 2
        let middle = this.currentPage - Math.floor(this.itemCount / 2),
          i = this.itemCount // 5
        if (middle > (this.pageCount - this.itemCount)) {
          middle = (this.pageCount - this.itemCount) + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    goTo(index) {
      this.$emit('pageClick', index)
    }
  }
}
</script>
