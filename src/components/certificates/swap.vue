<script setup lang="ts">
defineProps<{
  theme: 'left' | 'right'
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
        background-color: #F8F8F8;
        border-radius: 50%;
    
        &--right {
            transform: rotate(180deg);
        
            
        }
    }
</style>