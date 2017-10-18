<template>
    <div class="home">
      <h1>“灵山”</h1>
      <div class="contain blur">
        <p>
          在日本的滋贺县，蜿蜒的伊吹山车道上有一些弯弯曲曲的路，但只要你开过这蜿蜒危险的山路就可以来到山顶，这是该地区最高的山峰。从山顶的停车场只需要步行十分钟便可看到美丽的景色。每年的这个时候，在日本最大的淡水湖——琵琶湖的景色中，游客们都能享受到秋天的色彩。
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="inputform">
        <CommentList></CommentList>
      </div>
      <!-- <div class="inputform">
        <div class=" formin">
          <div class="textinput">
            <label>用户名：</label><input v-model="message">
          </div>
          <div class="areacon">
            <label>评论内容：</label><textarea v-model="mess"></textarea>
          </div>
          <button class="btn btn-success submit" @click='pinglun'>发布</button>
        </div>
        <div class="formcon" id="formcon">
          <div class="como" v-html="conta"> {{ conta }} </div>
        </div>
      </div> -->
    </div>

</template>

<script>
  import CommentList from '../../components/commentList'
  export default {
    name: 'home',
    components: {CommentList},
    data () {
      return {
        // mess: '',
        // message: '',
        // conta: ''
      }
    },
    methods: {
      // pinglun: function () {
      //   var date = new Date()
      //   var year = date.getFullYear()
      //   var month = date.getMonth() + 1
      //   var day = date.getDate()
      //   var time = year + '年' + month + '月' + day + '日'
      //   console.log(year + ' ' + day + ' ' + month)
      //   if (this.mess === '') {
      //     alert('请输入内容')
      //   } else {
      //     this.conta += '<div><span style="color:green;font-weight:3000">' + this.message + '</span> <label>' + time + '</label><p>' + this.mess + '</p></div>'
      //     this.mess = ''
      //   }
      // }
    }
  }
</script>

<style scoped>

p{
  line-height: 56px;
}
.blur {
  position: relative;
  top: 30%;
  background: hsla(0,0%,0%,.3);
}

.blur::before {
  content: '';
  position: absolute;
  top: 0;left: 0;
  right: 0;
  bottom: 0;
  filter: blur(20px);
  margin: -30px;
}
.inputform{
  width: 100%;
  margin-top: 20px;
  height: auto;
  border: 1px solid;
  background-color: rgba(0,0,0,0.2)
}
.formin{
  width: 100%;
  height: 100%;
  /*float: left;*/
}
.inputform label{
  width: 18%;
}
.textinput{
  width: 100%;
  height: 30%;
  padding: 20px;

}
.textinput input{
  background-color: transparent;
  border: 1px solid gray
}
.areacon{
  width: 100%;
  height: 40%;
  padding: 20px;

}
.areacon textarea{
  background-color: transparent;
  border: 1px solid gray;
  vertical-align: top;
}
.submit{
  margin-left: 250px;
}
.formcon{
  width: 100%;
  height: 250px;
  /*float: left;*/
  border: 1px solid ;
}
.como{
  width: 100%;
  height: 16%;
  /*border: 1px solid;*/
}

</style>