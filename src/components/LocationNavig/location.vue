<script setup lang="ts">
defineProps<{
    title: string
    text: string
}>()
</script>

<template>
    <div class="header_about">
        <div class="text_about">
            <p>
                Главная
            </p>
            <p>
                >
            </p>
            <p>
                {{text}}
            </p>
        </div>
        <div class="text_about">
            <h1>
                {{title}}
            </h1>
        </div>
    </div>
</template>

<style setup lang="scss">
    .header_about {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1400px;
        align-items: flex-start;
    }

    .text_about {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>