<template>
  <label :class="['wmui-radio', {'wmui-radio-disabled': disabled}]">
    <input 
    type="radio" 
    v-model="currentRadio"
    :value="radioValue"
    :name="name"
    :disabled="disabled"
    @change="changeCheck" 
    class="wmui-radio-input">
    <span class="wmui-radio-button"></span>
    <span class="wmui-radio-text">{{ radioText || radioValue}}</span>
  </label>
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
      value: {
        type: String
      },
      radioText: {
        type: String,
        default: ''
      },
      radioValue: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        currentRadio: this.value
      }
    },
    watch: {
      value (val) {
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
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-radio {
  position: relative;
  display: flex;
  &-input {
    cursor: pointer;
    z-index: 9;
    width: 16px;
    height: 16px;
    position: absolute;
    opacity: 0;
    outline: 0;
  }
  &-input + &-button {
    width: 16px;
    height: 16px;
    border: 1px solid $gray;
    background: $white;
    border-radius: 50%;
    display: inline-block;
  }
}

.wmui-radio-text {
  height: 16px;
  line-height: 1;
  padding-left: 10px;
  cursor: pointer;
}


.wmui-radio-input:checked +.wmui-radio-button {
  border: 1px solid $primary;
}

.wmui-radio-input:checked +.wmui-radio-button::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: $primary;
  border-radius: 100%;
  margin: 3px;
}

.wmui-radio-disabled {
  .wmui-radio-button {
    background: $gray-light !important;
    border: 1px solid $gray !important;
  }
  .wmui-radio-input,
  .wmui-radio-text {
    cursor: not-allowed;
  }

  input:checked + .wmui-radio-button::after {
    background: $gray;
  }
}
</style>
