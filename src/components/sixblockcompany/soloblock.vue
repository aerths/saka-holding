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
            <h3>{{title}}</h3>
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
        background-color: var(--bg-color);
        border-radius: 16px;
        max-width: 260px;
        align-items: center;
        padding: 40px;
    }

    .task_image {
        width: 64px;
        height: 64px;
    }
</style>