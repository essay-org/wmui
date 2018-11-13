## Popup

### 用法

```html
<template>
  <div class="demo">
    <wmui-popup 
    v-model="showPopup1" 
    position="bottom" 
    cover="30%"

    @maskClick="showPopup1 = false">
    <p>hello</p>
    </wmui-popup>
    
    <wmui-popup 
    v-model="showPopup2" 
    position="left"
    cover="30%" 
    @maskClick="maskClick"
    @click.native="showPopup2 = false">
    </wmui-popup>

    <wmui-popup 
    v-model="showPopup3" 
    position="left" 
    cover="30%"
    @click.native="showPopup3 = false"
    :mask="false">
    </wmui-popup>


    <wmui-button @click.native="showPopup1 = true">点击mask关闭</wmui-button>
    <wmui-button @click.native="showPopup2 = true">点击popup关闭</wmui-button>
    <wmui-button @click.native="showPopup3 = true">关闭mask显示</wmui-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showPopup1: false,
        showPopup2: false,
        showPopup3: false
      }
    },
    methods: {
      maskClick () {
        alert('你点击了mask')
      }
    }
  }
</script>


```

### Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| v-model  | 指定popup的初始化状态 | Boolean | false |
| position  | popup的显示位置 | String | bottom | top / right / bottom / left | 
| cover | popup占整个屏幕的大小 | String | 100% | 0% ~ 100%|
| mask | 是否显示mask | Boolean | true | false | 关闭后popup不会出现遮罩层 |
| maskOpacity | mask的透明度 | Number | 0.4 | 0 ~ 1 |
| maskClick | 点击mask时触发的自定义事件 | Function |