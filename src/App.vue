<template>
  <div id="app">
  <div>
    <h2>故 <span style="color:#DBDDE0">•</span> 事</h2>
    <hr/>
    <h6> <span style="color:grey">发生的都是故事 </span></h6>
  </div>
    <router-view/>
    <hr/>
    <div>@copyright</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
