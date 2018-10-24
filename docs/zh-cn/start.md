# 快速上手

## 安装

```
npm i wmui -S
```

## 整体引入

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

## 按需引入 wmui 部分组件

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

各个组件的使用方法请参阅其各自的文档。
