## WMUI

wmui是一个基于Vue.js开发的前端组件库

wmui没有复杂难记的API，每个组件只对外暴露必要的少量API

wmui的组件均以功能型为主，对于样式型的组件可以自行扩展

### 安装

```
npm i wmui -S
```

### 整体引入

示例入口 js：

```javascript
import Vue from 'vue'
import App from './App.vue'
import wmui from 'wmui' //整体引入
import 'wmui/lib/styles/theme-default/index.css' //引入样式文件

Vue.use(wmui)

new Vue({
  el: '#app',
  render: h => h(App)
})
```


整体引入 wmui 后，所有组件可直接使用，不再需要额外的单独引入步骤。

### 按需引入

首先在项目中安装 babel 插件：`babel-plugin-component`：

```
npm i babel-plugin-component -D
```

随后修改项目的 .babelrc 配置文件：`.babelrc`，加入 `babel-plugin-component` 插件：

```json
{
  ...
  "plugins": ["transform-vue-jsx",["babel-plugin-component", {
    "libraryName": "wmui",
  }]]
  ...
}
```

随后即可按需引入组件，示例如下：

```javascript
import Vue from 'vue'
import App from './App.vue'
import {Button, Badge} from 'wmui'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

各个组件的使用方法请参阅其说明文档。
