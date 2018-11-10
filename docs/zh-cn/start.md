## WMUI

WMUI 是专为 SSR 而开发的Vue组件库，保证组件在服务器和浏览器环境都能完美运行。

WMUI 尚处于开发阶段，仅供学习交流，不建议用于生产线上

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
  "plugins": ["transform-vue-jsx", ["babel-plugin-component", {
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

### 参考项目

WMUI的开发参考了以下开源项目：

[iview](https://github.com/iview/iview)

[Bootstrap](https://github.com/twbs/bootstrap)

[Vant](https://github.com/youzan/vant)

[Wdui](https://github.com/wdfe/wdui)

### 开源协议

MIT