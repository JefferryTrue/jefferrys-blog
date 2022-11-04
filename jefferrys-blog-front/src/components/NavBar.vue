<template>
    <div class="w-full h-16 min-w-full">
        <div class="flex m-auto max-w-7xl h-full border-b-2">
            <span class="flex m-2 items-center font-extrabold text-base ml-4">Jefferrys Blog</span>
            <span class="flex-grow m-2"></span>
            <span class="flex flex-row md:mr-6">
                <span class="hidden md:flex m-3  items-center"><a href="/home" class="font-bold">Home</a></span>
                <span class="hidden md:flex m-3  items-center"><a href="/blogs" class="font-bold">Blogs</a></span>
                <span class="hidden md:flex m-3  items-center"><a href="/introduction"class="font-bold">Introduction</a></span>
                <span class="hidden md:flex m-3  items-center"><a href="https://gitee.com/JefferryEx/jefferrys-blog" class="font-bold">Open Source</a></span>
            </span>
            <a v-on:click="IsShowFunc" class="flex md:hidden items-center mr-4"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"/></svg></a>
        </div>
        <div :class="{hidden : !isShow}" class="flex w-full h-76 bg-slate-100">
            <div id="container" class="grid grid-flow-row m-auto flex border-x-1 border-black">
                <a class="col-span-2 text-xl mx-4 text-center my-4 font-sans items-center text-gray-500">Home</a>
                <a class="col-span-2 text-xl mx-4 text-center my-4 font-sans items-center text-gray-500">Blogs</a>
                <a class="col-span-2 text-xl mx-4 text-center my-4 font-sans items-center text-gray-500">Introduction</a>
                <a class="col-span-2 text-xl mx-4 text-center my-4 font-sans items-center text-gray-500">Open Source</a>
            </div>
        </div>
        <!-- <img src="https://ts1.cn.mm.bing.net/th/id/R-C.02f9b3494460578c28aff6fe6a637682?rik=fXFWJhjiwM2K2w&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210425ac%2f138%2fw1080h658%2f20210425%2f4e60-kphwumq8147616.jpg&ehk=aBd0ufPukeZ56IsMYvoDIO1dQQBL4DSFeDS8ciKrLVQ%3d&risl=&pid=ImgRaw&r=0" alt=""> -->
    </div>
</template>

<script>
export default{
    name:'NavBar',
    data(){
        return {
            isShow:false,
        }
    },
    methods:{
        IsShowFunc(){
            console.log("123");
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style scoped>

</style>