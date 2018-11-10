<template>
  <transition name="fade" @after-enter="onShow" @after-leave="onHide">
    <div class="wmui-modal" v-if="open" :style="{'z-index': zIndex}">
      <div class="wmui-modal-content">
        <header v-if="title">{{ title }}</header>
        <i class="wmui icon-close" @click="onCancel" v-if="isShowCancelButton"></i>
        <p class="wmui-modal-content-text">{{ text }}</p>
        <input class="wmui-modal-content-input" v-if="isShowInput" v-model="inputValue" :type="inputType" />
      </div>
      <footer class="wmui-modal-footer-row">
        <div class="wmui-modal-btns">
          <wmui-button className="wmui-btn-default" @click.native="onCancel" v-if="isShowCancelButton">{{ cancelText }}</wmui-button>
          <wmui-button className="wmui-btn-primary" @click.native="confirmHandler" :class="{disabled: isConfirmDisabled}">{{ confirmText }}</wmui-button>
        </div>
      </footer>
    </div>
  </transition>
</template>

<script>
import Mask from '../_mask/index.js'
import WmuiButton from '../button/index.vue'
export default {
  name: 'wmui-modal',
  mixins: [Mask],
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    text: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'alert'
    },
    isShowInput: {
      type: Boolean,
      default: false
    },
    isShowCancelButton: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: [String],
      default: 'text'
    },
    confirmText: {
      type: [String, Number],
      default: '确定'
    },
    cancelText: {
      type: [String, Number],
      default: '取消'
    },
    onShow: {
      type: Function,
      default: () => { }
    },
    onHide: {
      type: Function,
      default: () => { }
    },
    onConfirm: {
      type: Function,
      default: () => { }
    },
    onCancel: {
      type: Function,
      default: () => { }
    },
    onMaskClick: {
      type: Function,
      default: () => { }
    },
    validate: {
      type: Function,
      default: () => { return true }
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    isConfirmDisabled () {
      if (this.type === 'prompt') {
        return !this.validate(this.inputValue)
      } else {
        return false
      }
    }
  },
  methods: {
    maskClick () {
      this.onMaskClick()
    },
    confirmHandler () {
      if (!this.isConfirmDisabled) {
        this.onConfirm()
      }
    }
  },
  components: {
    WmuiButton
  }
}

</script>
