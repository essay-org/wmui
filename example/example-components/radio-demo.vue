<template>
  <div class="radio-demo">
    <!-- 方式一 -->
    <div v-for="(item,index) in listData1" :key="item">
      <wmui-radio 
      v-model="value1" 
      :currentValue="value1" 
      :radioValue="item"
      name="radio1"/>
    </div>
    <p class="radio-demo-value"> {{value1}}</p>
    <!-- 方式二 -->
      <div v-for="(item,index) in listData2" :key="item.value">
        <wmui-radio 
        v-model="value2" 
        :currentValue="value2" 
        :disabled="item.disabled" 
        :radioText="item.text"
        :radioValue="item.value"
        name="radio2"/>
      </div>
    <p class="radio-demo-value"> {{value2}}</p>
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
<style lang="scss">
.radio-demo {
  margin: 30px;

}

</style>
