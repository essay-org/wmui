<template>
  <div class="popup-demo">
    <ivc-header title="Popup">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <ivc-button @click.native="showPopup1 = true">点击mask关闭</ivc-button>
    <ivc-popup v-model="showPopup1" position="bottom" cover="70%" @maskClick="showPopup1 = false"></ivc-popup>

    <ivc-button @click.native="showPopup2 = true">点击popup关闭</ivc-button>
    <ivc-popup v-model="showPopup2" position="left" cover="70%" @click.native="showPopup2 = false"></ivc-popup>

    <ivc-button @click.native="showPopup3 = true">关闭mask显示</ivc-button>
    <ivc-popup v-model="showPopup3" position="left" cover="70%" @click.native="showPopup3 = false" :mask="false">
    </ivc-popup>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showPopup1: false,
        showPopup2: false,
        showPopup3: false
      }
    }
  }
</script>
<style lang="scss">
.popup-demo {
  text-align: center;
  // height: 2000px;
  width: 100%;
  button {
    margin-top: 20px;
  }
}
</style>
