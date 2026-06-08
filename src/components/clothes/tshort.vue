<script setup lang="ts">
defineProps<{
    text: string
    image: string
}>()
</script>

<template>
    <div class="block_clothes">
        <div class="img_clothes">
            <img :src="image" alt="">
        </div>
        <div class="text_clothes">
            <p>
                {{text}}
            </p>
        </div>
    </div>
</template>

<style setup lang="scss">
    .block_clothes {
        display: flex;
        flex-direction: column;
    }
</style>