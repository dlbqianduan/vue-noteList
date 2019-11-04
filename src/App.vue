<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import bigbg from '@/assets/bigbg.jpg'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
    body,html{
  width:100%;
  height:100%;
  background:rgb(247,247,247);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
