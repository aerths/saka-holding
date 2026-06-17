<script setup lang="ts">
defineProps<{
  theme: 'left-light' | 'right-light' | 'left' | 'right' | "square-left" | "square-right"
  color: string
}>()
</script>


<template>
    <button class="swap" :class="`swap--${theme}`">
        <img src="../../assets/icons/swap/ArrowLeft.svg">
    </button>
</template>



<style setup lang="scss">
    .swap{
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: var(--bg-gray-color);
        border-radius: 50%;
        cursor: pointer;
        &--right {
            transform: rotate(180deg);
        }
        &--right-light {
            transform: rotate(180deg);
            background-color: #FFF;
        }
        &--left-light {
            background-color: #FFF;
        }
        &--square-left{
            border-radius: 16px;
            width: 60px;
            height: 60px;
        }
        &--square-right{
            border-radius: 16px;
            transform: rotate(180deg);
            width: 60px;
            height: 60px;
        }
    }
</style>