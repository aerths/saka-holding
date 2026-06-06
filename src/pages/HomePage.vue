<script setup lang="ts">
    import Slider from '@/components/slider/Slider.vue';
    import FullBloks from '@/components/cards-office/FullBloks.vue';
</script>

<template>
    <div class="Page">
        <!-- <Slider /> -->
        <FullBloks />
    </div>
</template>

<style setup lang="scss">
    .Page{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 300px;
    }
</style>