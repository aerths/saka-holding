<script setup lang="ts">
defineProps<{
    image: string
    title: string
    text: string
}>()
</script>

<template>
    <div class="block_task">
        <div class="task_image">
            <img :src="image" alt="">
        </div>
        <div class="title_task">
            {{title}}
        </div>
        <div class="text_task">
            {{text}}
        </div>
    </div>
</template>

<style setup lang="scss">
    .block_task {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .task_image {
            width: 64px;
            height: 64px;
        }
    }
</style>