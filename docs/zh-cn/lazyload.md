# Lazyload

## 用法

Lazyload 组件用于图片懒加载

```html
<template>
  <div class="demo">
    <div v-for="imgSrc in imgList" class="mb20">
      <!-- 需要懒加载的图片 -->
      <wmui-lazyload :src="imgSrc"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg',
        'https://www.86886.wang/public/1520049901259.jpg'
      ]
    }
  }
}
</script>
```

## Props

| 参数 | 描述 | 类型 | 默认值 | 可选值 | 备注 |
|------|-----|------|--------|-------| ---- |
| src  | 图片的真实地址 | String |  |  | 必需 |