<script setup lang="ts">
import range from '@/components/filters/range.vue';
import type from '@/components/filters/type.vue';
import colors from '@/components/filters/colors.vue';
import colors2 from '@/components/filters/colors2.vue';
import quality from '@/components/filters/quality.vue';
</script>
<template>
    <div class="filters">
        <range />
        <type />
        <quality />
        <colors />
        <colors2 />
        
    </div>
</template>
<style setup lang="scss">
    .filters{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #FFF;
    }
</style>