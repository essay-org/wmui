# Radio

## 用法

Radio 单选按钮组件

```html
<template>
  <div class="radio-demo">
    <!-- 方式一 -->
    <div v-for="(item,index) in listData1" :key="item">
      <wmui-radio 
      v-model="value1" 
      :radioValue="item"
      name="radio1"/>
    </div>
    <p class="v"> {{value1}}</p>
    <!-- 方式二 -->
      <div v-for="(item,index) in listData2" :key="item.value">
        <wmui-radio 
        v-model="value2" 
        :disabled="item.disabled" 
        :radioText="item.text"
        :radioValue="item.value"
        name="radio2"/>
      </div>
    <p class="v"> {{value2}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData1: ['选项1', '选项2', '选项3'],
      value1: '选项2',
      listData2: [{
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
        }
      ],
      value2: '3'
    }
  }
}
</script>
```

## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model  | 指定默认选中项，并同步选中的值 | String |  |  | 必选 |
| disabled  | 按钮禁用 | Boolean | false | true | 
| name | 按钮组名字 | String | | | 必选 |
| radioText | radio描述文字 | String |
| radioValue | radio的value值 | String | | | 必选 |


