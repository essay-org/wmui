function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

const inBrowser = typeof window !== 'undefined'

function remove (arr, item) {
  if (!arr.length) {
    return
  }
  const index = arr.indexOf(item)
  if (index > -1) {
    return arr.splice(index, 1)
  }
}

function assign (target, source) {
  if (!target || !source) {
    return target || {}
  }
  if (target instanceof Object) {
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

function some (arr, fn) {
  let has = false
  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      has = true
      break
    }
  }
  return has
}

function getBestSelectionFromSrcset (el, scale) {
  if (el.tagName !== 'IMG' || !el.getAttribute('srcset')) {
    return
  }
  let options = el.getAttribute('srcset')
  const result = []
  const container = el.parentNode
  const containerWidth = container.offsetWidth * scale

  let spaceIndex
  let tmpSrc
  let tmpWidth

  options = options.trim().split(',')

  options.map(item => {
    item = item.trim()
    spaceIndex = item.lastIndexOf(' ')
    if (spaceIndex === -1) {
      tmpSrc = item
      tmpWidth = 999998
    } else {
      tmpSrc = item.substr(0, spaceIndex)
      tmpWidth = parseInt(item.substr(spaceIndex + 1, item.length - spaceIndex - 2), 10)
    }
    result.push([tmpWidth, tmpSrc])
  })

  result.sort(function (a, b) {
    if (a[0] < b[0]) {
      return -1
    }
    if (a[0] > b[0]) {
      return 1
    }
    if (a[0] === b[0]) {
      if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
        return 1
      }
      if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
        return -1
      }
    }
    return 0
  })
  let bestSelectedSrc = ''
  let tmpOption
  const resultCount = result.length

  for (let i = 0; i < resultCount; i++) {
    tmpOption = result[i]
    if (tmpOption[0] >= containerWidth) {
      bestSelectedSrc = tmpOption[1]
      break
    }
  }

  return bestSelectedSrc
}

function find (arr, fn) {
  let item
  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      item = arr[i]
      break
    }
  }
  return item
}

const getDPR = (scale = 1) => inBrowser && window.devicePixelRatio || scale

function supportWebp () {
  let support = true
  const d = document

  try {
    let el = d.createElement('object')
    el.type = 'image/webp'
    el.innerHTML = '!'
    d.body.appendChild(el)
    support = !el.offsetWidth
    d.body.removeChild(el)
  } catch (err) {
    support = false
  }

  return support
}

function throttle (action, delay) {
  let timeout = null
  let lastRun = 0
  return function () {
    if (timeout) {
      return
    }
    let elapsed = Date.now() - lastRun
    let context = this
    let args = arguments
    let runCallback = function () {
      lastRun = Date.now()
      timeout = false
      action.apply(context, args)
    }
    if (elapsed >= delay) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, delay)
    }
  }
}

const _ = {
  on (el, type, func) {
    el.addEventListener(type, func)
  },
  off (el, type, func) {
    el.removeEventListener(type, func)
  }
}

const loadImageAsync = (item, resolve, reject) => {
  let image = new Image()
  image.src = item.src

  image.onload = function () {
    resolve({
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      src: item.src
    })
  }

  image.onerror = function (e) {
    reject(e)
  }
}

export {
  isObject,
  inBrowser,
  remove,
  some,
  find,
  assign,
  _,
  throttle,
  supportWebp,
  getDPR,
  loadImageAsync,
  getBestSelectionFromSrcset
}
