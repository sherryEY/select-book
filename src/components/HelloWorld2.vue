<template>
  <div class="hello">
    {{msg}}
    <hr>
    You are {{$route.params.name1 + "*" + $route.params.name2}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'helloWorld2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
