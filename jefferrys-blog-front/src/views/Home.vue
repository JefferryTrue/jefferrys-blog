<template>
    <div class="w-full">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>

    </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
export default{
    name:'home',
    data(){
        return {

        }
    },
    components:{
        Cards,

    }
}

</script>

<style lang="scss" scoped>

</style>