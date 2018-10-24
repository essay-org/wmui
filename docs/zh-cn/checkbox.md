# Radio

## 用法

checkbox 复选框组件

```html
<template>
  <div class="checkbox-demo">
    <!-- 方式一 -->
    <div v-for="(item,index) in listData1" :key="index" class="c">
      <wmui-checkbox 
      v-model="value1"
      :checkboxValue="item"/>
    </div>
    <p class="v"> {{value1}}</p>

    <!-- 方式二 -->
    <div v-for="(item,index) in listData2" :key="item.text" class="c">
      <wmui-checkbox 
      v-model="value2" 
      :disabled="item.disabled"
      :checkboxText="item.text"
      :checkboxValue="item.value"/>
    </div>
    <p class="v"> {{value2}} </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        listData1: ['选项1', '选项2', '选项3', '选项4'],
        value1:['选项1', '选项4'],
        listData2: [
          {
            text: '选项1',
            value: '1'
          },
          {
            text: '选项2',
            value: '2'
          },
          {
            text: '选项3',
            value: '3',
            disabled: true
          },
          {
            text: '选项4',
            value: '4',
            disabled: true
          }
        ],
        value2:['1', '4'],
      }
    }
  }
</script>
```

## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model  | 指定默认选中项，并同步选中的值 | Array |  |  | 必选 |
| disabled  | 按钮禁用 | Boolean | false | true | 
| checkboxText | checkbox描述文字 | String |
| checkboxValue | checkbox的value值 | String | | | 必选 |


