<template>
  <div class="container">
    <div class="intro">
      <p>使用方法：引入组件，参数src表示图片的真实路径。如需配置默认图片，修改w-lazyload组件中img的src即可</p>
    </div>
    <div v-for="imgSrc in imgList">
      <w-lazyload :src="imgSrc" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg',
        'https://img.alicdn.com/bao/uploaded/i1/3171011717/TB2oJ2PaA9WBuNjSspeXXaz5VXa_!!3171011717.jpg_250x250.jpg'
      ]
    }
  }
}
</script>
<style>
.w-lazyload {
  margin-bottom: 30px;
}
</style>
