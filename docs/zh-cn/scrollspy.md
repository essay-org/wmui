## Scrollspy

### 用法

Scrollspy 滚动监听组件

```html
<template>
  <div class="demo">
    <header style="height: 300px; background-color: #333;color: #fff">I am header</header>

    <wmui-scrollspy 
    :panelNavs="panelNavs" 
    :hasBackTop="true" 
    defaultNav="首页">
      <div class="wmui-scrollspy-panel">
        <p class="one">one</p>
      </div>
      <div class="wmui-scrollspy-panel">
        <p class="two">two</p>
      </div>
      <div class="wmui-scrollspy-panel">
        <p class="three">three</p>
      </div>
    </wmui-scrollspy>

    <footer style="height: 300px; background-color: #333; color: #fff;">I am footer </footer>
  </div>
</template>
<script>

export default {
  data () {
    return {
      panelNavs: ['一楼', '二楼', '三楼']
    }
  }
}
</script>
<style lang="scss">

.wmui-scrollspy-navs {
  position: fixed;
  bottom: 50px;
  right: 50px;
  ul {
    background-color: #eee;
    li {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}

.wmui-scrollspy-active {
  background-color: gray !important;
}


.one,
.two,
.three {
  font-size: 60px;
  width: 100%;
  padding-top: 100px;
  text-align: center;
}
.one {
  background: green;
  padding-bottom: 200px;
}
.two {
  padding-bottom: 500px;
  background: teal;
}
.three {
  padding-bottom: 400px;
  background: red;
}
</style>
```

滚动菜单的样式可根据对应的类名自定义，由于样式是容易变动的，所以控制权交给开发者

`.wmui-scrollspy-navs` 导航菜单的类名

`.wmui-scrollspy-active` 导航菜单高亮时的类名

### Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| panelNavs | 导航菜单对应的每一项描述 | Array | |  | 必选 |
| defaultNav  | 定义默认高亮项 | String |  |  | 为空时默认不显示 | 
| hasBackTop | 是否显示返回顶部 | Boolean | false| | |
| .wmui-scrollspy-panel | 需要滚动的盒子对应的类名 | String | | | 必选|