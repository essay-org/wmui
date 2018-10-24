<template>
  <div class="wmui-radio-wraper">
    <label :class="['wmui-radio', {'disabled': disabled}]">
      <input 
      type="radio" 
      v-model="currentRadio"
      :value="radioValue"
      :name="name"
      :disabled="disabled"
      @change="changeCheck" 
      class="wmui-radio-input">
      <!-- 自定义样式 -->
      <span class="wmui-radio-button"></span>
    </label>
    <span class="wmui-radio-text" @click="textClick(radioValue)">{{ radioText || radioValue}}</span>
  </div>
</template>
<script>
  export default {
    name: 'wmui-radio',
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      name: {
        default: 'radio',
        type: String
      },
      currentValue: {
        type: [String, Number]
      },
      radioText: {
        type: [String, Number],
        default: ''
      },
      radioValue: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        currentRadio: this.currentValue
      }
    },
    watch: {
      currentValue (val) {
        this.currentRadio = val
      }
    },
    methods: {
      changeCheck () {
        if (!this.disabled) {
          this.$emit('input', this.currentRadio)
        } else {
          return
        }
      },
      // 点击文字也能切换radio，模拟for-id效果
      textClick (v) {
        if (!this.disabled) {
          this.$emit('input', v)
        } else {
          return
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-radio-wraper {
  display: flex;
}
.wmui-radio {
  position: relative;
  width: 20px;
  height: 20px;
  &-input {
    cursor: pointer;
    z-index: 9;
    width: 20px;
    height: 20px;
    position: absolute;
    opacity: 0;
    outline: 0;
  }
  &-input + &-button {
    width: 20px;
    height: 20px;
    border: 1px solid $gray;
    background: $white;
    border-radius: 50%;
    display: inline-block;
  }
  &-input:checked + &-button {
    border: 1px solid $primary;
  }
  &-input:checked + &-button::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: $primary;
    border-radius: 100%;
    margin: 3px;
  }
  /* 禁用按钮 */
  &.disabled  &-button {
    background: $gray-light;
    border: 1px solid $gray;
  }

  &.disabled input:disabled,
  &.disabled + &-text {
    cursor: not-allowed;
  }

  /* 禁用状态下的选中radio */
  &.disabled input:checked {
    border: 1px solid $gray;
    background: $gray-light;
    cursor: not-allowed;
  }
  &.disabled input:checked + &-button::after {
    cursor: not-allowed;
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: $gray;
    border-radius: 100%;
    margin: 3px;
  }
}
.wmui-radio-text {
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  padding-left: 10px;
}
</style>
