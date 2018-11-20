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
        type: [String,Number]
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

