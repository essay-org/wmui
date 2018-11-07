## Swiper

Swiper 轮播图组件

### 用法

```html
<template>
  <div class="demo">
    <wmui-swiper :duration="3000" :arrow="false">
      <div v-for="img in imgs">
        <wmui-swiper-item>
          <img :src="img" alt="">
        </wmui-swiper-item>
      </div>
    </wmui-swiper>
    <div class="mb20"></div>
    <wmui-swiper>
      <div v-for="img in imgs">
        <wmui-swiper-item>
          <img :src="img" alt="">
        </wmui-swiper-item>
      </div>
    </wmui-swiper>
    <div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: ['http://www.86886.wang/public/1520848506666.jpg',
        'http://www.86886.wang/public/1520848519551.jpg',
        'http://www.86886.wang/public/1520848527583.jpg'],
    }
  }
}
</script>
```

### Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| duration | 轮播间隔时间（毫秒） | Number | 3000 | 
| arrow | 是否显示箭头| Boolean | false |
