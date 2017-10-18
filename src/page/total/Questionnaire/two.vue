<template>
  <div>
    <!-- <router-link to='three'><button class="btn btn-success">下一题</button></router-link> -->
    <h3>count {{ getCount }}</h3>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'two',
    // crated () {
    //   this.$store.getCount
    // }
    computed: {
      ...mapGetters([
        'getCount'
      ])
    }
  }
</script>
<style scoped></style>