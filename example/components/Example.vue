<template>
  <div>
    <component :is="rn"></component>
  </div>
</template>
<script>
import comps from '../example-components/config.js'
export default {
  data() {
    return {
      rn: this.$route.params.componentName // button-demo
    }
  },
  created() {
    this.$options.components[this.rn] = require('../example-components/' + this.rn + '.vue').default
  }
}

</script>
