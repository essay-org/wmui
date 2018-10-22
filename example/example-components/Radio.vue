<template>
  <div class="radio-demo">
    <ivc-header title="Radio">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <!-- 方式一 -->
    <ivc-cell v-for="(item,index) in listData1" :key="index">
      <div slot="left">
        <ivc-radio v-model="value1" :currentValue="value1" :text="item" :name="radio1"></ivc-radio>
        <span>{{item}}</span>
      </div>
    </ivc-cell>
    <p class="radio-demo-value"> {{value1}}</p>
    <!-- 方式二 -->
    <div>
      <ivc-cell v-for="(item,index) in listData2" :key="index">
        <div slot="left">
          <ivc-radio v-model="value2" :currentValue="value2" :disabled="item.disabled" :text="item.value" :name="radio2"></ivc-radio>
          <span>{{item.text}}</span>
        </div>
      </ivc-cell>
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
      radio1: 'radio1',
      listData2: [{
          text: '选项1',
          value: '选项1'
        },
        {
          text: '选项2',
          value: '选项2'
        },
        {
          text: '选项3',
          value: '选项3',
          disabled: true
        }
      ],
      value2: '选项2',
      radio2: 'radio2'
    }
  }
}

</script>
<style lang="scss">
.radio-demo {
  .radio-demo-value {
    margin: 20px 0;
    background-color: #fff;
    padding: 24px 48px;
  }
}

</style>
