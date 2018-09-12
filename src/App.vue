<template>
  <div id="app" >
  <div>
    <!-- <h2>故 <span style="color:#DBDDE0">•</span> 事</h2> -->
    <h2>故 <img src="/static/favicon.png" class="icon"/> 事</h2>
    <h6> <span style="color:grey">发生的都是故事</span></h6>
    <hr/>
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
  margin-top: 30px;
}
.icon {
  width: 16px;
  height: 16px;
}
</style>
