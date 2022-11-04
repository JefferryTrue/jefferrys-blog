<template>
  <div id="app" class="w-full min-w-full">
    <NavBar></NavBar>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  export default{
    name:'app',
    components:{
      NavBar
    }
  }
</script>

<style scoped>
div{
  width:100%;
}
</style>
