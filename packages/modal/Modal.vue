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

<style lang="scss">
@import "../../src/theme-default/var.scss";
.wmui-modal {
  width: 400px;
  position: fixed;
  background-color: #fff;
  top: 30%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  overflow: hidden;
  border-radius: 3px;

  .wmui-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 150px;
    box-sizing: border-box;
    position: relative;
    header {
      margin: 0 20px 10px;
      text-align: center;
      align-self: stretch;
      font-size: 18px;
      color: $black;
      font-weight: bold;
    }
    .icon-close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: $gray-dark;
      cursor: pointer;
    }
    .wmui-modal-content-text {
      font-size: 16px;
      color: $black-light;
      margin-bottom: 30px;
    }
    input {
      height: 40px;
      width: 100%;
      font-size: 14px;
      line-height: 40px;
      border: 1px solid $gray;
      border-radius: 3px;
      text-indent: 1rem;
    }
  }

  footer {
    border-top: 1px solid $gray-light;
    text-align: right;
    padding: 10px 20px;
    .wmui-modal-btns {
      display: inline-block;
      font-size: 0;
    }
    .wmui-btn-default {
      margin-right: 15px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>