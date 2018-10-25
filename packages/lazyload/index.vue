<template>
  <div class="wmui-lazyload">
    <!-- base64 -->
    <img src="../static/images/default.png" :data-src="src" v-lazyload>
  </div>
</template>
<script>
let imgList = [], delay, time = 250

// 节流函数，防止短时间多次触发_loadImg
function _delay () {
  clearTimeout(delay)
  delay = setTimeout(() => {
    _loadImg()
  }, time)
}

// 当图片出现在可视区域内后，替换掉src属性
function _loadImg () {
  for (let i = 0, len = imgList.length; i < len; i++) {
    if (_isShow(imgList[i])) {
      imgList[i].src = imgList[i].getAttribute('data-src')
      imgList.splice(i, 0)
    }
  }
}

// 判断图片出否出现在可视区
function _isShow (el) {
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
        imgList.push(el)
        // 初始化，第一次进入页面时应该显示的图片
        _delay()
        window.addEventListener('scroll', _delay, false)
      }
    }
  }
}
</script>
