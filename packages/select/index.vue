<template>
  <div class="wmui-select" :class="{'wmui-select-open':show}" ref="select">
    <div class="wmui-select-control">
      <div class="wmui-select-input" :class="{'focus':show, 'placeholder':showPlaceholder, 'disabled':disabled}" v-text="text">
      </div>
      <i class="iconfont icon-select"></i>
    </div>
    <transition name="select-drop">
      <div class="wmui-select-lists" v-show="show" :style="showLiNum">
        <div class="wmui-select-search" v-if="showSearch" @click="$_searchBoxClick">
          <input type="text" class="wmui-input-control" :placeholder="searchPlaceholder" v-model="keyword">
        </div>
        <ul>
          <li v-for="item in filterOptionArray" :key="item.value" @click="$_itemClick(item, $event)" :class="{'disabled':item.disabled, 'active':liActive == item.value}" ref="li">{{item.text}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'wmui-select',
  data () {
    return {
      show: false,
      optionArray: this.option, // 下拉数据列表
      showPlaceholder: this.placeholder ? true : false,
      text: this.placeholder, // 默认显示的项
      keyword: '',
      liHeight: '', // li高度
      liActive: this.value
    }
  },
  props: {
    value: String, // 通过v-model传进来
    placeholder: {
      type: String,
      default: '请选择'
    }, // 默认显示的文本
    showNum: String, // 显示下拉个数，超出显示滚动条
    option: {
      type: Array,
      default: []
    }, // 下拉选顶
    optionUrl: String, // 请求数据地址，同时传了option，请求成功后会更新option
    onChange: Function, // 下拉选择后回调
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    showSearch: { // 显示搜索输入框
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      dafault: '请输入关键字'
    } // 仅对搜索有效，搜索输入框placeholder提示
  },
  components: {},
  mounted () {
    this.$_setFirstText()
    this._ajaxUrl()
    document.addEventListener('click', this.$_showHide)
  },
  methods: {
    $_showHide (e) {
      // console.log(this.$el.contains(e.target))
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
    $_itemClick (item, e) {
      if (!item.disabled) {
        this.liActive = item.value
        this.$emit('onChange', item)
        this.text = item.text
        this.show = false
        this.showPlaceholder = false
      }
      e.stopPropagation()
    },
    $_setFirstText () {
      // 设置第一项选项；如果有值则选中对应项，如果没值显示默认，没默认显示选第一项
      if (this.value) {
        for (let i in this.optionArray) {
          if (this.optionArray[i].value === this.value) {
            this.text = this.optionArray[i].text
            this.showPlaceholder = false
            break
          }
        }
      } else {
        if (!this.placeholder) {
          // 默认选中第一项
          this.text = this.optionArray[0].text
          this.showPlaceholder = false
        }
      }
    },
    $_searchBoxClick (e) {
      e.stopPropagation()
    },
    _ajaxUrl () {
      if (this.optionUrl) {
        axios.get(this.optionUrl).then((res) => {
          this.optionArray = res.data.result
          this.$_setFirstText()
        }, res => {
          console.log('error')
        })
      }
    }
  },
  computed: {
    filterOptionArray () {
      if (this.showSearch) {
        // 带搜索时
        let newArray = []
        for (let i in this.optionArray) {
          if (this.optionArray[i].text.indexOf(this.keyword) > -1) {
            newArray.push(this.optionArray[i])
          }
        }
        return newArray
      } else {
        return this.optionArray
      }
    },
    showLiNum () {
      if (this.showNum && this.optionArray.length > this.showNum) {
        return {
          height: this.liHeight * this.showNum + 'px'
        }
      }
    }
  },
  filters: {}
}

</script>

<style lang="scss">
$select-width: 200px !default;
$select-height: 30px !default;
.wmui-select {
  display: inline-block;
  position: relative;
  width: $select-width;
  .wmui-select-control {
    position: relative;
    .wmui-select-input {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border: 1px solid $gray-dark;
      height: $select-height;
      line-height: $select-height;
      cursor: default;
    }
    .icon-select {
      position: absolute;
      height: $select-height;
      line-height: $select-height;
      top: 0;
      right: 0.5rem;
      transition: all 0.2s;
    }
  }

  .wmui-select-lists {
    position: absolute;
    width: 100%;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 99;
    border: 1px solid $primary;
    border-top: none;
    li {
      cursor: default;
      padding-left: 0.5rem;
      height: $select-height;
      line-height: $select-height;
      &:hover {
        background-color: $gray-light;
      }
      &.disabled {
        color: $gray-dark;
        cursor: not-allowed;
      }
      &.active {
        background: $primary;
        color: #fff;
      }
    }
  }
  &.wmui-select-open {
    z-index: 9; //这里引用输入框的焦点样式
    .wmui-select-input {
      border-color: $primary;
    }
    .icon-select {
      transform: rotate(-180deg);
    }
  }
  .wmui-select-search {
    .wmui-input-control {
      border: none;
      border-bottom: 1px solid $gray;
      height: $select-height;
      line-height: $select-height;
    }
  }
}

.select-drop-enter-active {
  animation: selectDropDown 0.3s;
  transform-origin: center top;
}

.select-drop-leave-active {
  transform-origin: center top;
  animation: selectDropUp 0.3s;
  z-index: 99;
}

@keyframes selectDropDown {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes selectDropUp {
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
