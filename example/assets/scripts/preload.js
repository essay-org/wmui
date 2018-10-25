/**
 * 图片预加载
 * @return {function}
 * imgList 需要预加载的图片集合，必须是一个数组
 * callback 图片加载完成后的回掉，可获取到加载进度值
 * timeout  图片加载等待时间，超过时间会去加载下一张
 */
export default function (imgList, callback, timeout) {
  timeout = timeout || 5000
  var total = imgList.length,
    loaded = 0,
    imgages = [],
    _on = function () {
      if (loaded < total) {
        ++loaded
        if (callback) {
          callback(loaded / total)
        }
      }
    }

  if (!total) {
    return callback && callback(1)
  }

  for (var i = 0; i < total; i++) {
    imgages[i] = new Image()
    imgages[i].onload = imgages[i].onerror = _on
    imgages[i].src = imgList[i]
  }

  // 指定时间内图片没有加载完，不在等待
  var timer = setTimeout(function () {
    if (loaded < total) {
      loaded = total
      if (callback) {
        callback(loaded / total)
      }
    }
    clearTimeout(timer)
  }, timeout * total)
}
