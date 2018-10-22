<template>
  <div class="swipe-demo">
    <ivc-header title="Swipe">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>

    <p class="swipe-demo-text">默认样式</p>
    <ivc-swipe>
      <ivc-swipe-item v-for="(item, index) in listData1" :key="index">
        <img :src="item.imgUrl">
      </ivc-swipe-item>
    </ivc-swipe>

    <p class="swipe-demo-text">标题</p>
    <ivc-swipe :show-title="true" :indicatorsPosition="'right'" class="swipe-demo-custom">
      <ivc-swipe-item v-for="(item, index) in listData2" :key="index" :title="item.title">
       <img :src="item.imgUrl">
      </ivc-swipe-item>
    </ivc-swipe>

    <p class="swipe-demo-text">页码标题</p>
    <ivc-swipe :show-title="true" :indicatorsPosition="'right'" :indicatorsType="'number'" class="swipe-demo-custom">
      <ivc-swipe-item v-for="(item, index) in listData2" :key="index" :title="item.title">
       <img :src="item.imgUrl">
      </ivc-swipe-item>
    </ivc-swipe>
    <p class="swipe-demo-text"></p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        listData1: [
          {imgUrl: require('../assets/images/pageone.png')},
          {imgUrl: require('../assets/images/pagetwo.png')},
          {imgUrl: require('../assets/images/pagethree.png')}
        ],
        listData2: [
          {
            title: '第一页标题',
            imgUrl: require('../assets/images/pageone.png')
          },
          {
            title: '第二页标题',
            imgUrl: require('../assets/images/pagetwo.png')
          },
          {
            title: '第三页标题',
            imgUrl: require('../assets/images/pagethree.png')
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
// 可以设置ivc-swipe高度
.swipe-demo {
  .swipe-demo-text {
    text-align: center;
    padding: 20px 0;
  }
  .swipe-demo-custom {
    // height: 400px !important;
    color: #fff !important;
  }
}
</style>
