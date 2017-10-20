<template>
  <div class="hello">
    {{msg}}<hr/>
    I am {{$route.params.username}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  data () {
    return {
      msg: 'helloWorld1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
