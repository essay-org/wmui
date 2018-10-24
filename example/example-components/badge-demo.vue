<template>
  <div class="demo">
    <!-- 传入文字 -->
    <wmui-badge value="NEW"></wmui-badge>

    <!-- 传入数值-->
    <wmui-badge :value="value" :limit="count"></wmui-badge>

    <!-- off可关闭数量显示 -->
    <wmui-badge :value="value" :limit="count" off></wmui-badge>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 100,
      count: 99
    }
  }
}
</script>

