<template>
  <div class="badge-demo">
    <ivc-header title="Badge">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <!-- 传入数值-->
    <ivc-cell title="数值">
      <div slot="right"><ivc-badge :value="value"></ivc-badge></div>
    </ivc-cell>
    <ivc-cell title="数值超过限制">
      <div slot="right">
        <ivc-badge :value="value" :limit="count"></ivc-badge>
      </div>
    </ivc-cell>
    <!-- 传入文字 -->
    <ivc-cell title="文字">
      <div slot="right">
        <ivc-badge value="HOT"></ivc-badge>
      </div>
    </ivc-cell>

    <!-- off可关闭数量显示 -->
    <ivc-cell title="关闭数量显示">
      <div slot="right">
        <ivc-badge :value="value" :limit="count" off></ivc-badge>
      </div>
    </ivc-cell>
  </div>
</template>
<script>
export default {
  slot: 'badge-demo',
  data() {
    return {
      value: 120,
      count: 99
    }
  }
}
</script>

<style lang="scss">

</style>
