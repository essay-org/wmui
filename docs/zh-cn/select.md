## Select

### 用法

Select 下拉选择框

```html
<template>
  <div class="demo">
    <div class="mb20">
      <wmui-select :option="option" placeholder="请选择内容" @onChange="onChange" />
      <p>{{ onChangeText }}</p>
    </div>

    <div class="mb20">
      <p>搜索</p>
      <wmui-select :option="option" :showSearch="true" v-model="selectValue" searchPlaceholder="请输入关键字" />
    </div>

    <div class="mb20">
      <p>禁用</p>
      <wmui-select :option="option" :disabled="true" />
    </div>
    
    <div class="mb20">
      <p>指定列表项个数</p>
      <wmui-select :option="option" :showNum="5" @onChange="onChange2" />
      <p>{{ onChangeText2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      option: [
        { text: '选项1', value: '1' },
        { text: '选项2', value: '2' },
        { text: '选项3', value: '3', disabled: true },
        { text: '选项4', value: '4' },
        { text: '选项5', value: '5' },
        { text: '选项6', value: '7' },
        { text: '选项8', value: '8' },
        { text: '选项9', value: '9' }
      ],
      // 选中值
      selectValue: '8',
      onChangeText: '',
      onChangeText2: ''
    }
  },
  methods: {
    onChange (item) {
      this.onChangeText = `文本值：${item.text}, value: ${item.value}`
    },
    onChange2 (item) {
      this.onChangeText2 = `文本值：${item.text}, value: ${item.value}`
    }
  }
}

</script>
```

### Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model | 指定默认选中项 | String |
| option | 下拉列表数据 | Array |
| placeholder | 默认占位符 | String | 请选择 |
| disabled  | 是否禁用 | Boolean | false | true |
| showSearch | 是否显示搜索框 | Boolean | false | true | 适用于列表项较多的情况 |
| searchPlaceholder | 搜索框默认占位符 | String | 请输入关键字 |
| showNum | 指定列表项的数量，超出自动出现滚动条 | Number |
| onChange | 选中列表项后的回调函数 | Function | | | 函数参数是一个包含选中项的对象|
