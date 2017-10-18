<template>
  <div id="articletext">
    <h1>{{ articletext.title }}</h1>
    <p><span>作者：{{articletext.author}}</span><span>时间：{{articletext.time}}</span></p>
    <div v-html='articletext.text'></div>
  </div> 
</template>
<script>
  export default {
    name: 'articletext',
    props: ['articletext']
  }
</script>
<style scoped>
  #articletext{
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
</style>