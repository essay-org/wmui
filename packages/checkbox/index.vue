<template>
  <div class="ivc-checkbox">
    <input type="checkbox" v-model="currentCheck" :disabled="disabled" :value="text" @change="changeValue" class="ivc-checkbox-input">
    <span :class="['ivc-checkbox-button', {'ivc-checkbox-disabled': disabled}]"><i class="ivc-icon-check"></i></span>
  </div>
</template>
<script>
export default {
  name: 'ivc-checkbox',
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
@import '../../src/theme-default/common/var.scss';
.ivc-checkbox {
  position: relative;
  display: inline-block;
  height: 40px; /* px */
  width: 40px; /* px */
  vertical-align: middle;
  .ivc-icon-check {
    visibility: hidden;
    position: absolute;
    top: 2px; /* px */
    left: 2px; /* px */
  }
  &-input {
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
  &-button {
    box-sizing: border-box;
    position: absolute;
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

  &-disabled {
    background: $gray-light;
    border: 1px solid $gray; /* no */
  }
  &-input:checked+&-button {
    border: 1px solid $primary; /* no */
    background-color: $primary;
    .ivc-icon-check {
      color: $white;
      visibility: visible;
    }
  }


  &-input:checked+&-disabled {
    border: 1px solid $gray; /* no */
    background-color: $gray-light;
    .ivc-icon-check {
      color: $gray;
    }
  }
}

</style>
