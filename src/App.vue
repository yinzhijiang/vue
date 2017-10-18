<template>
  <div id="app">
    <div class="mainContent">
      <Headerview></Headerview>
      <section class="contain">
        <router-view class='con'></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import Headerview from './components/header'
export default {
  name: 'app',
  components: {
    Headerview
  }
}
</script>

<style>
.mainContent{
  height: 100%;
  
}
.contain{
height: 85%
}
.con{
  width: 60%;
  height: auto;
  margin: 0 auto;
}
</style>
