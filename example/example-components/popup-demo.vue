<template>
  <div class="popup-demo">
    <wmui-button @click.native="showPopup1 = true">点击mask关闭</wmui-button>
    <wmui-popup v-model="showPopup1" position="bottom" cover="70%" @maskClick="showPopup1 = false"></wmui-popup>

    <wmui-button @click.native="showPopup2 = true">点击popup关闭</wmui-button>
    <wmui-popup v-model="showPopup2" position="left" cover="70%" @click.native="showPopup2 = false"></wmui-popup>

    <wmui-button @click.native="showPopup3 = true">关闭mask显示</wmui-button>
    <wmui-popup v-model="showPopup3" position="left" cover="70%" @click.native="showPopup3 = false" :mask="false">
    </wmui-popup>
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
