<script setup lang="ts">
import tshort from '@/components/clothes/tshort.vue';
import blueclothes from '@/assets/icons/colorclothes/blueclothes.svg';
import greyclothes from '@/assets/icons/colorclothes/greyclothes.svg';
</script>

<template>
    <div class="full_block_clothes">
        <tshort 
        :image="blueclothes"
        text="A-104 Dark Grey"
        />
        <tshort 
        :image="greyclothes"
        text="A-101 Grey"
        />
    </div>
</template>

<style setup lang="scss">

</style>