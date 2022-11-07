<template>
    <div class="flex justify-center">
        <div class="flex flex-row m-2 md:m-3 lg:m-4 md:max-w-4xl rounded-lg bg-white shadow-lg">
        <img class="hidden md:flex h-auto w-24 object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'Cards',
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>