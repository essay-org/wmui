<template>
  <div class="index">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/docs/start">文档</router-link>
          </li>
          <li>
            <router-link to="/example">演示</router-link>
          </li>
          <li>
            <router-link to="/update">版本</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <div class="intro">
        <p>WMUI</p>
        <p>渐进式移动UI框架</p>
        <div class="btn-group">
          <button class="github"><a href="https://github.com/wmui/wmui">开始使用</a></button>
        </div>
      </div>
    </section>
    <section>
      <div class="item">
        <i class="icon"></i>
        <div class="wrap">
          <h4>描述标题</h4>
          <p>描述说明</p>
        </div>
      </div>
      <div class="item">
        <i class="icon"></i>
        <div class="wrap">
          <h4>描述标题</h4>
          <p>描述说明</p>
        </div>
      </div>
      <div class="item">
        <i class="icon"></i>
        <div class="wrap">
          <h4>描述标题</h4>
          <p>描述说明</p>
        </div>
      </div>
      <div class="item">
        <i class="icon"></i>
        <div class="wrap">
          <h4>描述标题</h4>
          <p>描述说明</p>
        </div>
      </div>
    </section>
    <footer>
      <div class="copy">
        <p>&copy; 2017 <a href="https://github.com/wmui/wmui">wmui</a></p>
        <p>Licensed under <a href="https://choosealicense.com/licenses/mit/">MIT</a> license.</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Index'
}

</script>
<style lang="scss">
.index {
  header nav {
    display: flex;
    background-color: #24292E;
  }

  nav ul {
    margin: 30px auto;
  }

  ul li {
    display: inline-block;
  }

  li a {
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
  }

  li+li {
    border-left: 1px solid gray;
    height: 100%;
  }

  section:nth-of-type(1) {
    height: 400px;
    background-color: #24292E;
    display: flex;
  }

  .intro {
    margin: 50px auto 100px;
    letter-spacing: 8px;
  }

  .intro p:nth-of-type(1) {
    color: #fff;
    font-size: 60px;
    text-align: center;
  }

  .intro p:nth-of-type(2) {
    font-size: 35px;
    color: #fff;
    margin-bottom: 50px;
  }

  .intro .btn-group {
    display: flex;
    align-items: center;
  }

  .btn-group .github {
    padding: 10px 15px;
    border: none;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
  }

  .github a {
    font-size: 20px;
    color: #24292E;
    text-decoration: none;
  }

  section:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-content: space-between;
  }

  .item {
    margin: 50px auto;
    width: 40%;
    display: flex;
  }

  .item .icon {
    height: 50px;
    width: 50px;
    margin-right: 20px;
    background: url(../assets/images/yes.png) center center no-repeat;
    background-size: 100% 100%;
  }

  .item .wrap {
    flex: 1;
  }

  .wrap h4 {
    font-size: 18px;
  }

  .wrap p {
    font-size: 14px;
    color: gray;
  }

  footer {
    width: 100%;
    height: 120px;
    background-color: #f3f3f3;
  }

  footer .copy {
    margin-left: 5%;
    font-size: 12px;
    color: gray;
    padding-top: 50px;
  }
}

</style>
