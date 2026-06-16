<script setup lang="ts">

</script>

<template>
    <div class="basket">
        <img src="../../assets/icons/ShoppingCart.svg" alt="">
        <div class="push">
            3
        </div>
    </div>
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
