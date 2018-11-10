<template>
  <div>
   <wmui-button @click.native="dia">对话框</wmui-button>
    <wmui-dialog v-model="dialog" @maskClick="maskClick">
      <input type="text">
    </wmui-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    dia() {
      this.dialog = true
    },
    maskClick() {
      this.dialog = false
    }
  }
}
</script>