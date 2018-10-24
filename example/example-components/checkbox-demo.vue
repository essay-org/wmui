<template>
  <div class="demo">
    <!-- 方式一 -->
    <div v-for="(item,index) in listData1" :key="index" class="mb20">
      <wmui-checkbox 
      v-model="value1"
      :checkboxValue="item"/>
    </div>
    <p class="mb20"> {{value1}}</p>

    <!-- 方式二 -->
    <div v-for="(item,index) in listData2" :key="item.text" class="mb20">
      <wmui-checkbox 
      v-model="value2" 
      :disabled="item.disabled"
      :checkboxText="item.text"
      :checkboxValue="item.value"/>
    </div>
    <p class="mb20"> {{value2}} </p>
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

