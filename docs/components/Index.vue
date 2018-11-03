<template>
  <div class="index">
    <nav>
        <ul>
          <li>
            <router-link to="/docs/start">文档</router-link>
          </li>
          <li>
            <router-link to="/example">示例</router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.index {
  width: 980px;
  margin: auto;
  text-align: center;
  nav {
    margin-top: 50px;
  }
  li {
    display: inline-block;
  }
}
</style>
