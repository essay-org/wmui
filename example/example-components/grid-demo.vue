<template>
  <div class="container">
    <div class="intro">
      <p>默认采用12列布局方式，参考了bootstrap的源代码。col-width-*设置容器的宽度，col-width-left-*和col-width-right-*表示容器要左右移动的距离(设置了left和right的值)，col-width-offset-*表示容器的偏移量(设置了margin-left)。容器之间的间隔默认为0px，如果想设置10px的间隔，为row添加margin: -5px,为col添加padding: 5px</p>
      <p>偏移量：margin-left</p>
       <p>栅格位置：left right</p>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3">
        <div class="test">hello</div>
      </div>
      <div class="col-3 col-left-3">
        <div class="test">hello</div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  margin-right: auto;
  margin-left: auto;
  width: 980px;
}

.test {
  border: 1px solid green;
  text-align: center;
}
/* 20px gutter */
.row {
  margin: -10px;
}
.col-3 {
  padding: 10px;
}
</style>
