<script setup lang="ts">
defineProps<{
    text: string
    name: string
}>()


</script>

<template>
    <div class="block_text_person">
        <div class="text_opisanie">
            <p>{{text}}</p>
        </div>
        <div class="text_lastname">
            <h3>{{name}}</h3>
        </div>
    </div>
</template>

<style setup lang="scss">
    .block_text_person {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        background-color: var(--bg-gray-color);
        max-width: 380px;
        width: 100%;
        justify-content: space-between;
        padding: 30px 30px;
    }
</style>