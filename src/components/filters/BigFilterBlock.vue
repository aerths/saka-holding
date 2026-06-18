<script setup lang="ts">
import filters from '@/components/filters/filters.vue';
import GladiCatalog from '@/components/filters/GladiCatalog.vue';
</script>
<template>
    <div class="BigFilterBlock">
        <div class="TextCont">
            <h1>Позаботьтесь о себе и своих близких, выбирайте качественные ткани</h1>
        </div>
        <div class="container67">
            <filters />
            <GladiCatalog />
        </div>
    </div>
</template>
<style setup lang="scss">
    .BigFilterBlock{
        display: flex;
        flex-direction: column;
        max-width: 1300px;
        width: 100%;
        gap: 24px;
        
        .container67{
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: space-between;
            gap: 40px;
            width: 100%;

            @include laptop{
                flex-direction: column;
                gap: 20px;
            }
        }
        .TextCont{
            max-width: 60%;

            @include laptop{
                max-width: 100%;
            }
        }
        
    }
</style>
