<template>
  <div class="wmui-checkbox">
    <input type="checkbox" v-model="currentCheck" :disabled="disabled" :value="text" @change="changeValue" class="wmui-checkbox-input">
    <span :class="['wmui-checkbox-button', {'wmui-checkbox-disabled': disabled}]"><i class="wmui-icon-check"></i></span>
  </div>
</template>
<script>
export default {
  name: 'wmui-checkbox',
  props: {
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    currentValue: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      currentCheck: this.currentValue
    }
  },
  watch: {
    currentValue (val) {
      this.currentCheck = val
    }
  },
  methods: {
    changeValue () {
      // console.log(this.currentCheck)
      this.$emit('input', this.currentCheck)
    }
  }
}

</script>
<style lang="scss">
@import '../../src/theme-default/var.scss';
.wmui-checkbox {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;
  vertical-align: middle;
  .wmui-icon-check {
    visibility: hidden;
    position: absolute;
    top: 2px;
    left: 2px;
  }
  &-input {
    z-index: 9;
    width: 40px;
    height: 40px;
    position: absolute;
    opacity: 0;
    outline: 0;
    top: 50%;
    margin-top: -20px;
    vertical-align: middle;
  }
  &-button {
    box-sizing: border-box;
    position: absolute;
    width: 40px;
    height: 40px;
    border: 1px solid $gray;
    background: $white;
    border-radius: 50%;
    display: inline-block;
    top: 50%;
    margin-top: -20px;
    vertical-align: middle;
  }

  &-disabled {
    background: $gray-light;
    border: 1px solid $gray;
  }
  &-input:checked+&-button {
    border: 1px solid $primary;
    background-color: $primary;
    .wmui-icon-check {
      color: $white;
      visibility: visible;
    }
  }


  &-input:checked+&-disabled {
    border: 1px solid $gray;
    background-color: $gray-light;
    .wmui-icon-check {
      color: $gray;
    }
  }
}

</style>
