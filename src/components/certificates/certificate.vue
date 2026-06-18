<script setup lang="ts">
defineProps<{
    image: string
}>()
</script>


<template>
    <div class="certificate">
        <img :src="image">
    </div>
</template>



<style setup lang="scss">
    .certificate{
        width: 100%;
        img{
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    
</style>
