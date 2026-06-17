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
        img{
            object-fit: cover;
        }
    }
    
</style>