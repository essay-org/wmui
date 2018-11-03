<template>
  <div class="container">
    <wmui-swiper :duration="3000" :arrow="false">
      <div v-for="img in imgs">
        <wmui-swiper-item>
          <img :src="img" alt="">
        </wmui-swiper-item>
      </div>
    </wmui-swiper>

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