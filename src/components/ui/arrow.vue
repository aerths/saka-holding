<script setup lang="ts">
import arrowIcon from '@/assets/icons/arrow.svg?url';
</script>

<template>
    <div class="arrow">
        <img :src="arrowIcon" alt="" width="24px">
    </div>
</template>

<style>
    .arrow {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-color);
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
</style>
