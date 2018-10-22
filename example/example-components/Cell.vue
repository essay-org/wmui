<template>
  <div class="cell-demo">
    <ivc-header title="Cell">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <!-- 方式一 -->
    <div class="cell">
      <ivc-cell title="单独使用" value="辅助信息"></ivc-cell>
    </div>
    <!-- 方式二 -->
    <ivc-cell>
      <p slot="left">组合使用</p>
      <p slot="right">辅助信息</p>
    </ivc-cell>
    <ivc-cell to="https://github.com/wmui/wmui">
      <p slot="left">链接</p>
      <p slot="right">GitHub</p>
    </ivc-cell>
    <!-- 自定义 -->
    <ivc-cell>
      <i slot="left" class="iconfont icon-search">自定义小图标</i>
      <div slot="right"><ivc-switch v-model="value"></ivc-switch></div>
    </ivc-cell>
  </div>
</template>
<script>
export default {
  name: 'cell-demo',
  data () {
    return {
      value: true
    }
  }
}

</script>
<style lang="scss">
.cell-demo {
  .cell {
    margin-bottom: 20px;
  }
}

</style>
