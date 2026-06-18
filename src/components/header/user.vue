<script setup lang="ts">
import userIcon from '@/assets/icons/User.svg?url';
</script>

<template>
    <div class="user">
        <img :src="userIcon" alt="">
        <span>Войти</span>
    </div>
</template>

<style lang="scss">
.user {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
</style>
