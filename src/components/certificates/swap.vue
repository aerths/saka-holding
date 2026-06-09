<script setup lang="ts">
defineProps<{
  theme: 'left-light' | 'right-light' | 'left' | 'right'
  color: string
}>()
</script>


<template>
    <div class="swap" :class="`swap--${theme}`">
        <img src="../../assets/icons/swap/ArrowLeft.svg">
    </div>
</template>



<style setup lang="scss">
    .swap{
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
    }
</style>