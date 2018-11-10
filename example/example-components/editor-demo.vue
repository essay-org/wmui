<template>
  <div>
    <wmui-edit v-model="content" :upload="uploadImg" @save="save" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '## hello',
      uploadImg: {
        url: 'http://localhost:8080/v1/upload',
        headers: {
          token: ''
        }
      }
    }
  },
  methods: {
    save(val) {
      console.log(val)
    }
  }
}
</script>