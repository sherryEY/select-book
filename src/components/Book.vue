<template>
  <div class="book">
      <h2>选择你喜欢的书籍</h2>
      <ul>
          <li v-for="book in books">{{book}}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'Book',
    data () {
      return {
        books: ['红与黑', '飞鸟集', '钢铁是怎样炼成的', '骆驼祥子', 'js权威指南', '歌尽桃花']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
