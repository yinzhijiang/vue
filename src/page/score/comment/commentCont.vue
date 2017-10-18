<template>
  <div>
  <h3>发表评论</h3>
  <p v-if='type'>你回复&nbsp;{{nam}}</p>
  <textarea v-model="cont"></textarea>
  <button class="btn btn-default" @click='canel'>取消</button> <button @click='submit' class="btn btn-success">确认</button>
  </div>
</template>
<script>
  export default {
    name: 'commentCont',
    data () {
      return {
        cont: ''
      }
    },
    props: ['type', 'nam'],
    methods: {
      canel: function () {
        this.$emit('canel')
        this.cont = ''
      },
      submit: function () {
        this.$emit('submit', this.cont)
        this.cont = ''
      }
    }
  }
</script>
<style scoped>
  textarea{
    /*color:black;*/
    background-color: transparent;
  }
</style>