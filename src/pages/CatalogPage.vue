<script setup lang="ts">
import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
import BigFilterBlock from '@/components/filters/BigFilterBlock.vue';
</script>

<template>
<div class="Catalog">
    <div class="Container-Block">
        <BigFilterBlock />
    </div>
    <div class="Container-Block" id="gray">
        <RecentlyViewed />
    </div>
    
</div>
</template>



<style setup lang="scss">
    .Catalog{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        #gray{
            background-color: var(--bg-gray-color);
        }
        #black{
            background-color: var(--main-color);
        }
        .Container-Block:nth-child(2){
            padding-left: 180px;
            padding-right: 180px;
        }
       
    }
</style>