<template>
  <img src="https://www.86886.wang/public/1533885924628.jpg" :data-src="src" v-lazyload class="wmui-lazyload">
</template>
<script>
import {throttle, isServer} from '../_utils/util.js'
let imgList = []

// 当图片出现在可视区域内后，替换掉src属性
function loadImg () {
  for (let i = 0, len = imgList.length; i < len; i++) {
    if (isShow(imgList[i])) {
      imgList[i].src = imgList[i].getAttribute('data-src')
    }
  }
}

// 判断图片出否出现在可视区
function isShow (el) {
  // getBoundingClientRect获取图片相对视口的位置
  let coords = el.getBoundingClientRect()
  return coords.top <= document.documentElement.clientHeight
}
export default {
  name: 'wmui-lazyload',
  props: {
    src: {
      type: String
    }
  },
  directives: {
    lazyload: {
      bind (el, binding) {
        if (isServer) return false
        imgList.push(el) // 把所有img元素存放到数组
        throttle(loadImg, window) // 初始化，第一次进入页面时应该显示的图片
        window.addEventListener('scroll', function () {
          throttle(loadImg, window)
        }, false)
      }
    }
  }
}
</script>
