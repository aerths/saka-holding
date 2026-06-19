<script setup lang="ts">
import shoppingCartIcon from '@/assets/icons/ShoppingCart.svg?url';

const emit = defineEmits<{
    click: []
}>();
</script>

<template>
    <button class="basket" type="button" @click="emit('click')">
        <img :src="shoppingCartIcon" alt="">
        <div class="push">
            3
        </div>
    </button>
</template>

<style lang="scss">
.basket {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--second-main-color);
    position: relative;
    cursor: pointer;
    border: 0;
    padding: 0;

    .push {
        background-color: var(--accent-color);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
        text-align: center;
        font-size: 12px;
        font-weight: medium;
    }
}
</style>
