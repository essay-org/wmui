<template>
  <div class="demo">
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
