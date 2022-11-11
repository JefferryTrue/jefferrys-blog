<template>
    <div class="h-screen grid-rows-6 overflow-hidden hidden md:grid md:col-span-2 md:col-start-1 border-r-2">
        <span class="flex mx-auto row-start-1 row-end-3 row-span-2 items-center justify-center">
          <div class="items-center text-center ">
            <img class="rounded-full  border-neutral-800 border-2 w-32" src="http://rju4cbt6f.hn-bkt.clouddn.com/a04f92305db011ed87f40dafd6220406" alt="">
            <p class="mt-2 font-bold text-lg">@Jefferry True</p>
            <p class="mt-2 font-thin text-base">ChongQing-China</p>
          </div>
        </span> 
        <!--Un Do-->
       <span class=" grid grid-rows-5 row-start-3 row-end-5 row-span-3 gap-2 font-semibold text-xl text-gray-700 w-full text-center">
        <div class="flex row-span-1 items-center h-full px-3 bg-red-200 mx-14 rounded-xl"><span class="m-auto"><router-link to="/cmsmanager/index">数据总览</router-link></span></div>
        <div class="flex row-span-1 items-center h-full px-3 bg-red-200 mx-14 rounded-xl"><span class="m-auto"><router-link to="/cmsmanager/blogmanager">博客总览</router-link></span></div>
        <div class="flex row-span-1 items-center h-full px-3 bg-red-200 mx-14 rounded-xl"><span class="m-auto"><router-link to="/cmsmanager/addBlog">添加博客</router-link></span></div>
        <div class="flex row-span-1 items-center h-full px-3 bg-red-200 mx-14 rounded-xl"><span class="m-auto"><router-link to="/cmsmanager/editBlog">修改博客</router-link></span></div>
       </span>
       <span class="flex row-start-5 row-end-7 row-span-2 m-auto mb-0 w-2/3">
        <img src="http://rju4cbt6f.hn-bkt.clouddn.com/673447505dd511ed87f40dafd6220406" class="flex bottom-0" alt="">
      </span>
    </div>
</template>

<script>
export default{
    name:'CmsSideBar'
    
}
</script>

<style lang="scss" scoped>

</style>