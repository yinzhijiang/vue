<template>
  <button @click='subment' class="btn btn-success">点击减1</button>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions(['subment'])
    }
  }
</script>
<style scoped></style>