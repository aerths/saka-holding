<script setup lang="ts">
import userIcon from '@/assets/icons/User.svg?url';

const emit = defineEmits<{
    click: []
}>();
</script>

<template>
    <button class="user" type="button" @click="emit('click')">
        <img :src="userIcon" alt="">
        <span>Войти</span>
    </button>
</template>

<style lang="scss">
.user {
    padding: 0;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    font: inherit;
}
</style>
