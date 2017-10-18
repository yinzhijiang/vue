<template>
  <div id="item">
    <div  v-for='(item, index) in list' :index='index'>
      <h3 >{{ item.dataTime }}</h3>
      <div> <span>{{ item.day }}</span> <span>{{ item.address }}</span></div>
      <div style='padding:9px 0;'>{{ item.content }}</div>
      <div class="imglist" v-for='pic in item.pic'>
        <dl>
          <dt style="margin-right:10px"><img :src="pic.img1"></dt>
          <dd style="text-align:center">{{pic.text}}</dd>
        </dl>
      </div>
    </div>
    <Additem></Additem>
  </div>
</template>

<script>
import Additem from './additem'
export default {
  name: 'item',
  components: {
    Additem
  },
  data () {
    return {
      list: [
        {
          dataTime: getTime(),
          day: '今天',
          address: '北京市海淀区',
          content: '逛了公园，欣赏秋天的美景……',
          pic: [
            {
              img1: require('../../images/1-2.jpg'),
              text: '落叶'
            },
            {
              img1: require('../../images/1-3.jpg'),
              text: '花开'
            },
            {
              img1: require('../../images/1-4.jpg'),
              text: '树林'
            }
          ]
        }
      ]
    }
  }
}
function getTime () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate()
  month.length < 2 ? '0' + month : month
  day.length < 2 ? '0' + day : day
  return year + '/' + month + '/' + day
}
</script>

<style>
  #item {
    width: 60%;
    height: 100%;
    overflow: hidden;
  }

  .imglist{
    width: 15%;
    height: 15%;
    display: inline-block;

  }
  .imglist img{
    width: 100%;
    height: 100%
  }
</style>
