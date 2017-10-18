<template>
  <div>
    <h3>一份无聊的问卷调查</h3>
    <router-link to='/one'><button class="btn btn-success">start </button></router-link>
    <!-- <div v-for='(item, index) in lists' :index='index'>
      <h3>{{ item.title}}</h3>
      <ul v-for='(list,index) in item.list' >
        <li><input type="radio" name='lianxi'>{{ index }}-{{list}}</li>  
      </ul>
    </div> -->
  </div>
</template>
<script>
  export default {
    name: 'total',
    data () {
      return {
        lists: [
          {
            title: '第一题',
            list: [
              '这是对的',
              '这是b对的',
              '这是c对的',
              '这是d对的'
            ]
          },
          {
            title: '第二题',
            list: [
              '这是对的',
              '这是b对的',
              '这是c对的',
              '这是d对的'
            ]
          },
          {
            title: '第三题',
            list: [
              '这是对的',
              '这是b对的',
              '这是c对的',
              '这是d对的'
            ]
          }
        ]
      }
    }
  }

</script>
<style scoped>
  li{
    list-style: none
  }
</style>