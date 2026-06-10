<script setup lang="ts">

</script>

<template>
    <div class="basket">
        <img src="../../assets/icons/ShoppingCart.svg">
        <div class="push">
            3
        </div>
    </div>

</template>



<style lang="scss">
    .basket{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: var(--second-main-color);
        margin-right: 33px;
        position: relative;
        .push{
            background-color: var(--accent-color);
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            top: -5px;
            right: -5px;
            text-align: center;
            font-size: 12px;
            font-weight: Medium;
        }
    }
</style>