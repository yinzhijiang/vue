<template>
  <div id="score">
  <ArticleText :articletext='con'></ArticleText>
  <CommentText :commentlist='com' v-on:change='changetext'></CommentText>
  <CommentCon  :type='type' :nam='olderview' v-on:submit='submit' v-on:canel='canel'></CommentCon>
  </div>
</template>

<script>
  import ArticleText from './comment/article'
  import CommentText from './comment/commentText'
  import CommentCon from './comment/commentCont'
  export default {
    name: 'score',
    data () {
      return {
        commenter: 'jyz',
        type: 0,
        olderview: null,
        chosedindex: 0,
        con: {
          title: 'zhe shi biao ti',
          author: 'Lorem',
          time: '2017-10-16',
          text: `<p>    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <h3>biaoti</h3>
            <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in </p>
            <h3>biaoti</h3>
            <p>reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>`
        },
        com: [
          {
            name: '李四',
            time: '2016-10-09',
            content: '说的好',
            reply: [
              {
                responder: '李四',
                review: '王二',
                time: '2016-11-21',
                content: '赞成'
              },
              {
                responder: '王二',
                review: '李四',
                time: '2016-11-22',
                content: '哈哈哈'
              }
            ]
          },
          {
            name: '张三',
            time: '2017-10-09',
            content: '说的好',
            reply: [
            ]
          }
        ]
      }
    },
    components: {
      ArticleText,
      CommentText,
      CommentCon
    },
    methods: {
      submit: function (data) {
        if (this.type === 0) {
          this.com.push({
            name: this.commenter,
            time: getTime(),
            content: data,
            reply: []
          })
        } else if (this.type === 1) {
          this.com[this.chosedindex].reply.push({
            responder: this.commenter,
            review: this.olderview,
            time: getTime(),
            content: data
          })
          this.type = 0
        }
      },
      changetext: function (name, index) {
        this.olderview = name
        this.chosedindex = index
        this.type = 1
      },
      canel: function () {
        this.type = 0
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
    return year + '-' + month + '-' + day
  }
</script>

<style>
  p{
    text-indent: 2em;
  }  
</style>