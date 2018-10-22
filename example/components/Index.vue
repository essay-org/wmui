<template>
  <div class="index-demo">
    <router-link v-for="(item, index) in components" :key="index" :title="item" :to="`/example/${item}`">{{ item }}</router-link>
  </div>
</template>

<script>
import components from '../example-components/config.js'
export default {
  data() {
    return {
      components
    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: Arial, "Microsoft YaHei";
  }
  .index-demo {
    width: 980px;
    margin: 50px auto;
  }
  a {
    text-align: center;
    padding: 10px 20px;
    display: block;
  }
</style>
