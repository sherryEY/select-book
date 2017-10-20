<template>
  <div id="app">
    <div>
      <router-link to="/hello">hello</router-link>
      <router-link :to="{name: '/Hello/Hello1', params: {username: 'eryun',id: 23}}">hello1</router-link>
      <router-link :to="{name: '/Hello/Hello2',params: {name1 :'haha', name2: this.msg.name}}" >hello2</router-link>
      <router-link :to="{name: '/Book',params: {name1 :'haha', name2: this.msg.name}}">book</router-link>
      <router-view></router-view>
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
      <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    </div>
    <p>{{$route.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: {
        name: 'heihei',
        age: 13
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
