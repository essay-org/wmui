<template>
  <label :class="['wmui-checkbox', {'wmui-checkbox-disabled': disabled}]">
    <input type="checkbox" v-model="currentCheck" :disabled="disabled" :value="checkboxValue" @change="changeValue" class="wmui-checkbox-input">
    <span class="wmui-checkbox-button"><i class="wmui icon-check"></i></span>
    <span class="wmui-checkbox-text">{{ checkboxText || checkboxValue}}</span>
  </label>
</template>
<script>
export default {
  name: 'wmui-checkbox',
  props: {
    checkboxValue: String,
    checkboxText: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      currentCheck: this.value
    }
  },
  watch: {
    value(val) {
      this.currentCheck = val
    }
  },
  methods: {
    changeValue() {
      if (!this.disabled) {
        this.$emit('input', this.currentCheck)
      }
    }
  }
}
</script>

