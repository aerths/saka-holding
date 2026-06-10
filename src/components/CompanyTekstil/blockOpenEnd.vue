<script setup lang="ts">
defineProps<{
    image: string
    title: string
    text: string
}>()
</script>

<template>
    <div class="block_tekstil">
        <img :src="image" alt="">
        <div class="block_info_tekstil">
            <div class="title_tekstil">
                <h3>{{title}}</h3>
            </div>
            <div class="text_tekstil">
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>

<style setup lang="scss">
    .block_info_tekstil {
        width: 100%;
        max-width: 330px;
    }
</style>