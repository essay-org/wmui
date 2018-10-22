<template>
  <div class="wmui-radio">
    <input type="radio" v-model="currentRadio" :value="text"  :name="name" :disabled="disabled || !ifClick" @change="changeCheck" class="wmui-radio-input">
    <span :class="['wmui-radio-button', {'disabled': disabled}]"></span>
  </div>
</template>
<script>
  export default {
    name: 'WmuiRadio',
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      ifClick: {
        default: true,
        type: Boolean
      },
      name: {
        default: 'radio',
        type: String
      },
      currentValue: {
        type: String
      },
      text: {
        type: String
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
        if (this.ifClick) {
          this.$emit('input', this.currentRadio)
        } else {
          return
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.wmui-radio {
  position: relative;
  display: inline-block;
  width: 40px; /* px */
  height: 40px; /* px */
  vertical-align: middle;
  &-input {
    box-sizing: border-box;
    z-index: 9;
    width: 40px; /* px */
    height: 40px; /* px */
    position: absolute;
    opacity: 0;
    outline: 0;
    top: 50%;
    margin-top: -20px; /* px */
    vertical-align: middle;
  }
  &-input + &-button {
    box-sizing: border-box;
    position:absolute;
    width: 40px; /* px */
    height: 40px; /* px */
    border: 1px solid $gray; /* no */
    background: $white;
    border-radius: 50%;
    display: inline-block;
    top: 50%;
    margin-top: -20px; /* px */
    vertical-align: middle;
  }

  &-input + &-button.disabled {
    background: $gray-light;
    border: 1px solid $gray; /* no */
  }
  &-input:checked + &-button {
    border: 1px solid $primary; /* no */
  }
  &-input:checked + &-button::after {
    content: '';
    position: absolute;
    width: 20px; /* px */
    height: 20px; /* px */
    background: $primary;
    border-radius:100%;
    margin: -10px 0 0 -10px; /* px */
    top: 50%;
    left: 50%;
  }
  /* 禁用状态下的选中radio */
  &-input:checked + &-button.disabled {
    border: 1px solid $gray; /* no */
    background: $gray-light;
  }
  &-input:checked + &-button.disabled::after {
    content: '';
    position: absolute;
    width: 20px; /* px */
    height: 20px; /* px */
    background: $gray;
    border-radius:50%;
    margin: -10px 0 0 -10px; /* px */
    top: 50%;
    left: 50%;
  }
}
</style>
