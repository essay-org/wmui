<template>
  <label :class="['wmui-checkbox', {'wmui-checkbox-disabled': disabled}]">
    <input type="checkbox" 
    v-model="currentCheck" 
    :disabled="disabled" 
    :value="checkboxValue" 
    @change="changeValue" 
    class="wmui-checkbox-input">
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
  data () {
    return {
      currentCheck: this.value
    }
  },
  watch: {
    value (val) {
      this.currentCheck = val
    }
  },
  methods: {
    changeValue () {
      if (!this.disabled) {
        this.$emit('input', this.currentCheck)
      }
    }
  }
}

</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-checkbox {
  position: relative;
  display: flex;
  .icon-check {
    visibility: hidden;
    position: absolute;
    top: 2px;
    left: 2px;
    font-size: 12px;
  }
  &-input {
    z-index: 9;
    width: 16px;
    height: 16px;
    position: absolute;
    opacity: 0;
    outline: 0;
    cursor: pointer;
  }
  &-button {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 1px solid $gray;
    background: $white;
    display: inline-block;
    border-radius: 3px;
  }
}

.wmui-checkbox-text {
  padding-left: 10px;
  line-height: 1;
  cursor: pointer;
}

.wmui-checkbox-input:checked + .wmui-checkbox-button {
  border: 1px solid $primary;
  background-color: $primary;
  .icon-check {
    color: $white;
    visibility: visible;
  }
}
// 禁用
.wmui-checkbox-disabled {
  .wmui-checkbox-button{
    border: 1px solid $gray !important;
    background-color: $gray-light !important;
    .icon-check {
      color: $gray !important;
    }
  }
  .wmui-checkbox-input,
  .wmui-checkbox-text {
    cursor: not-allowed;
  }
}
</style>
