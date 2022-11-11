<template>
    <div class="w-full">
        
        <div class="w-full h-full" v-for="(blog_item,index) in blogs" :key="index">
            <Cards v-bind:blog_item="blog_item"></Cards>
        </div>

    </div>
</template>

<script>

import Cards from '../../../components/Cards.vue'
import axios from "axios"

export default{
    name:'home',
    data(){
        return {
            blogs:[]
        }
    },
    components:{
        Cards,
    },
    created:function(){
        axios.get('api/blogs/get_all').then(results=>{
            this.blogs = results.data;
            console.log(results);
            console.log('---');
            console.log(this.blogs);
        })
    }
}

</script>

<style lang="scss" scoped>

</style>