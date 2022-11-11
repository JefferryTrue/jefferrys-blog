<template>
    <div class="w-full h-screen overflow-y-hidden">
      <div class="md:grid md:grid-cols-8 h-full relative">
  
        <CMS_SideBar></CMS_SideBar>
  
        <div class="w-full h-auto md:col-span-6 md:col-start-3 overflow-auto">
  
          <BigHeader></BigHeader>
          
  
  
          <div class=" h-auto  lg:grid lg:grid-cols-5">
            <div class="h-auto lg:col-start-1 lg:col-end-5 lg:col-span-4 bg-slate-50" id="cardCol">
  
              <router-view></router-view>
              
            </div>
  
            <div class="flex h-28 mt-0 lg:h-full lg:mt-0 lg:col-start-5 lg:col-end-6 lg:col-span-1 bg-slate-400">
              <span class="flex m-auto text-center font-medium text-xl text-slate-50">我是广告位</span>
            </div>
  
          </div>
  
          <Footer></Footer>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
  import CMS_SideBar from './CMS_SideBar.vue'
  import Footer from '../../../components/Footer.vue'
  import BigHeader from '../../../components/BigHeader.vue'
  
  export default {
    name: 'index',
    components: {
      CMS_SideBar,
      Footer,
      BigHeader
    }
  }
  </script>