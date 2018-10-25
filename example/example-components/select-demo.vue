<template>
  <div class="container">
    <p>基本使用</p>
    <w-select :option="option" placeholder="请选择内容" @onChange="onChange">
    </w-select>
    <p>{{ onChangeText }}</p>
    <p>搜索</p>
    <w-select
    :option="option"
    :showSearch="true"
    v-model="selectValue"
    search-placeholder="请输入关键字"
    >
    </w-select>
    <p>禁用</p>
    <w-select :option="option" :disabled="true">
    </w-select>
    <p>指定列表项个数</p>
    <w-select :option="option" showNum="5" @onChange="onChange2">
    </w-select>
    <p>{{ onChangeText2 }}</p>
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
    onChange(item) {
      this.onChangeText = `文本值：${item.text}, value: ${item.value}`
    },
    onChange2(item) {
      this.onChangeText2 = `文本值：${item.text}, value: ${item.value}`
    }
  }
}

</script>
