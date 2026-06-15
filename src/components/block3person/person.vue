<!-- person.vue -->
<script setup lang="ts">
defineProps<{
    text: string
    name: string
}>()
</script>

<template>
    <div class="block_text_person">
        <div class="text_opisanie">
            <p>{{ text }}</p>
        </div>
        <div class="text_lastname">
            <h3>{{ name }}</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
.block_text_person {
    background-color: var(--bg-gray-color, #f5f5f5);
    max-width: 360px;
    width: 100%;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
}

.text_opisanie {
    padding: 30px 30px;
    flex-grow: 1;

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
    }
}

.text_lastname {
    padding: 0 30px 30px 30px;

    h3 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
        color: #000;
    }
}
</style>