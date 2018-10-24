# Switch

## 用法

Switch 开关组件

```html
<template>
  <div class="demo">
    <div>{{ status1 }}</div>
    <wmui-switch v-model="value1"/>
    
    <div>{{ status2 }}</div>
    <wmui-switch v-model="value2"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: false,
      value2: true
    }
  },
  computed: {
    status1 () {
      return this.value1 ? '开启状态' : '关闭状态'
    },
    status2 () {
      return this.value2 ? '开启状态' : '关闭状态'
    }
  }
}
</script>
```

## Props


| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model  | 定义开关的状态，并自动同步当前状态 | Boolean | false | true  |  |