<template>
  <div id="comment">
    <h3>评论</h3>
    <div v-if='commentlist.length==0'>暂无评论</div>
    <div v-else>
      <div v-for='(item, index) in commentlist' :index='index'>
        <b>{{item.name}}</b><span>{{ item.time }}</span>
        <div @click='changeText(item.name, index)' style="cursor:pointer">{{item.content}}</div>
        <div v-if='item.reply.length>0' style="margin-left:40px;">
          <div v-for="reply in item.reply">{{reply.responder}}回复<b>{{reply.review}}</b><i>{{reply.time}}</i><div @click='changeText(reply.responder, index)' style="cursor:pointer">{{reply.content}}</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'comment',
    props: ['commentlist'],
    methods: {
      changeText: function (name, index) {
        this.$emit('change', name, index)
      }
    }
  }
</script>
<style scoped>
  #comment{
    width: 100%;
    height: auto;
  }
</style>