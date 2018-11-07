<template>
  <div class="index">
    <nav>
        <ul>
          <li>
            <router-link to="/docs/intro">查看文档</router-link>
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
    margin-top: 200px;
  }
  li {
    display: inline-block;
  }
}
</style>
