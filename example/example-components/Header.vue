<template>
  <div class="header-demo">
    <ivc-header fixed>
      <!-- 左边 -->
      <router-link to="/" slot="left">
        <i class="iconfont icon-left"></i>
      </router-link>
      <!-- 标题 -->
      <p slot="title">我是一个标题</p>
      <!-- 右边 -->
      <i slot="right" class="iconfont icon-people"></i>
    </ivc-header>
  </div>
</template>
<script>
export default {
  name: 'header-demo'
}
</script>

<style lang="scss">
.header-demo {
  height:2000px;
}
</style>
