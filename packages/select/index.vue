<template>
  <div class="wmui-select" :class="{'wmui-select-open':show, 'disabled':disabled}" ref="select">
    <!-- 选择框 -->
    <div class="select-control">
      <div class="control-input" :class="{'focus':show, 'placeholder':showPlaceholder}" v-text="text">
      </div>
      <i class="wmui icon-select"></i>
    </div>
    <!-- 下拉列表 -->
    <transition name="select-drop">
      <div class="select-lists" v-show="show" :style="showLiNum">
        <!-- 搜索框 -->
        <div class="lists-search" v-if="showSearch" @click="searchBoxClick">
          <input type="text" class="search-control" :placeholder="searchPlaceholder" v-model="keyword">
        </div>
        <ul>
          <li v-for="item in filterOptionArray" :key="item.value" @click="itemClick(item, $event)" :class="{'disabled':item.disabled, 'active':liActive == item.value}" ref="li">{{item.text}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import {isServer} from '../_utils/util.js'
export default {
  name: 'wmui-select',
  data () {
    return {
      show: false, // 显示下拉项
      showPlaceholder: true,
      text: this.placeholder,
      keyword: '',
      liHeight: '', // li高度
      liActive: this.value
    }
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: '请选择'
    },
    showNum: Number, // 显示下拉个数，超出显示滚动条
    option: { // 下拉选顶
      type: Array,
      default: []
    },
    onChange: Function, // 下拉选择后回调
    disabled: {
      type: Boolean,
      default: false
    },
    showSearch: { // 显示搜索输入框
      type: Boolean,
      default: false
    },
    searchPlaceholder: { // 仅对搜索有效，搜索输入框placeholder提示
      type: String,
      dafault: '请输入关键字'
    }
  },
  components: {},
  mounted () {
    this.setFirstText()
    if (!isServer) {
      document.addEventListener('click', this.showHide)
    }
  },
  methods: {
    showHide (e) {
      // 核心难点
      // console.log(this.$el.contains(e.target))
      // 如果点击了select
      if (this.$el.contains(e.target)) {
        if (this.disabled) {
          this.show = false
        } else {
          this.show = !this.show
        }
        this.keyword = ''
        this.$nextTick(() => {
          this.liHeight = this.$refs.li[0].offsetHeight
        })
      } else {
        this.show = false
      }
    },
    itemClick (item, e) {
      if (!item.disabled) {
        this.liActive = item.value
        this.$emit('onChange', item)
        this.text = item.text
        this.show = false
        this.showPlaceholder = false
      }
      e.stopPropagation()
    },
    setFirstText () {
      // 设置第一项选项；
      // 如果有值则选中对应项，如果没值显示默认，没默认显示选第一项
      if (this.value) {
        for (let i in this.option) {
          if (this.option[i].value === this.value) {
            this.text = this.option[i].text
            this.showPlaceholder = false
            break
          }
        }
      } else {
        if (!this.placeholder) {
          // 默认选中第一项
          this.text = this.option[0].text
          this.showPlaceholder = false
        }
      }
    },
    searchBoxClick (e) {
      e.stopPropagation()
    }
  },
  computed: {
    filterOptionArray () {
      if (this.showSearch) {
        // 带搜索时
        let newArray = []
        for (let i in this.option) {
          if (this.option[i].text.indexOf(this.keyword) > -1) {
            newArray.push(this.option[i])
          }
        }
        return newArray
      } else {
        return this.option
      }
    },
    showLiNum () {
      if (this.showNum && this.option.length > this.showNum) {
        return {
          height: this.liHeight * this.showNum + 'px'
        }
      }
    }
  },
  filters: {}
}

</script>
