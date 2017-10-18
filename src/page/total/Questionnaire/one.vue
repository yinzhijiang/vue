<template>
  <div>
    <!-- 哈哈 -->
    <!-- <ul>
      <li></li>
    </ul> -->
    <!-- <router-link to='two'><button class="btn btn-success">下一题</button></router-link> -->
    <two></two>
    <three></three>
    <end></end> 
  </div>
</template>
<script>
import Two from './two'
import Three from './three'
import End from './end'
export default {
  name: 'one',
  components: {
    Two,
    Three,
    End
  }
}
</script>
<style scoped></style>