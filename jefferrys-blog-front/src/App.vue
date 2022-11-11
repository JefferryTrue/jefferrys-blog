<template>
  <div id="app" class="w-full min-w-full">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import MainView from './views/MainView.vue'
  export default{
    name:'app',
    components:{
      NavBar,
      MainView
    }
  }
</script>

<style scoped>
div{
  width:100%;
}
</style>
