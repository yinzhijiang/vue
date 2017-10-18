<template>
  <button @click='increment' class="btn btn-primary">点击加1</button>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions(['increment'])
    }
  }
</script>
<style scoped></style>