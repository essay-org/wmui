<template>
  <div class="demo">
    <wmui-pagination 
      :total="total" 
      :limit="limit" 
      :itemCount="itemCount" 
      :currentPage="currentPage" 
      @pageClick="pageClick"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 99,
      limit: 10,
      itemCount: 5,
      currentPage: 1
    }
  },
  methods: {
    pageClick(i) {
      this.currentPage = i
      // router jump
    }
  }
}
</script>

