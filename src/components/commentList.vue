<template>
  <div id="route">
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object size" :src="pic">
        </a>
      </div>
      <div class="media-body">
        <b class="media-heading">{{ name }}</b>
        <span> {{ time }} </span>
      </div>
    </div>
    <p>{{ commentCon}}</p>
    <span>回复</span><span v-for = 'list in lists'>{{list}}</span>
  </div>
</template>

<script>
export default {
  name: 'route',
  data () {
    return {
      pic: require('../assets/images/1-2.jpg'),
      time: '2017-02-12 14:56',
      name: 'Lorem',
      commentCon: `reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      lists: [
        {list0: '1'},
        {list1: '2'}
      ]
    }
  }

}
</script>

<style scoped>
  #route{
    color: #fff;
  }
  .size{
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
</style>