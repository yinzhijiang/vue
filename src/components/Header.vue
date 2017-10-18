<template>
  <div class="header">
    <div class="nav">
      <ul class="navleft">
        <router-link tag="a" to="/home"><li>首页</li></router-link>
        <router-link tag="a" to="/item"><li>状态</li></router-link>
        <router-link tag="a" to="/home"><li>音乐</li></router-link>
        <router-link tag="a" to="/score"><li>关于</li></router-link>
        <router-link tag="a" to="/total"><li>联系</li></router-link>
      </ul>
      <ul class="navright">
        <router-link tag="a" to="/home"><li>北京市</li></router-link>
        <router-link tag="a" to="/home"><li><span class="glyphicon glyphicon-user"></span></li></router-link>
        <router-link tag="a" to="/home"><li><span class="glyphicon glyphicon-cog"></span></li></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // activeTab: 'tab1',
      // active: 'bj'
    }
  }
}
</script>

<style scoped>
.header{
  position: relative;
  top: 0;
  left: 0;
  height: 10%;
}
.nav{
  display: inline-block;
  width: 100%;
  margin: 0;
  height: 8%;
}

.navleft{
  float: left;
  width: 85%
}
.navright{
  float: right;
  width: 15%
}
ul li{
  list-style: none;
  float: left;
  padding: 22px;
  text-align: center;
}

a:hover, a:focus{
  color: #ff4081;
}

li:hover, li:focus{
  border-bottom: 2px solid #ff4081;
}
.logo{
  /*font-size: 24px;*/
  /*color: white;*/
  display: inline-block;
  padding: 10px 20px;
}

.mu-tab-link {
  margin-left: 5px;
}

.contain{
  width: 100%;
  height: 90%;
  /*border:1px solid red;*/
}
</style>