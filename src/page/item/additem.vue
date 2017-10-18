<template>
  <div id="additem">
    <h2>发表</h2>
    <input @click='show' v-show='isShow' class="edit-input" type="text" name="" placeholder="说点什么吧……">
    <div @blur='show' v-show='!isShow' :tabindex='1' style="outline=0">
      <textarea @focus='' class="edit-box" v-model='cont'></textarea> 
      <div>
        <span @click='picture' class="glyphicon glyphicon-picture picShow"></span>
        <button class="btn btn-primary">发表</button>
        <div v-show='ok' v-for='(item, index) in pic' :index='index' style="display:inline-block">
          <img :src="item.src" style="width:100px;height:100px;">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'additem',
  data () {
    return {
      isShow: true,
      cont: '',
      ok: false,
      pic: [
        {src: require('../../images/1-1.jpg')},
        {src: require('../../images/1-2.jpg')},
        {src: require('../../images/1-3.jpg')}
      ]
    }
  },
  methods: {
    show: function () {
      console.log('isShow' + this.isShow)
      this.isShow = !this.isShow
    },
    picture: function () {
      console.log(1231231)
      if (!this.isShow) {
        this.ok = true
      } else {
        this.ok = false
      }
    }
  }
}
</script>
<style scoped>
  #additem{
    width: 100%;
    height: auto;
  }
  .edit-box{
    width: 100%;
    height: 130px;
    background-color: transparent;
    border: 1px solid;
  }
  .edit-input{
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: 1px solid
  }
  .picShow{
   font-size: 25px;
  }
</style>