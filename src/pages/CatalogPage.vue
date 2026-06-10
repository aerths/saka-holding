<script setup lang="ts">
import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
import filters from '@/components/filters/filters.vue';
</script>

<template>
<div class="Catalog">
    
    <div class="Container-Block" id="gray">
        <RecentlyViewed />
    </div>
    <div class="Container-Block">
        <filters />
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
        .Container-Block:nth-child(1){
            padding-left: 180px;
            padding-right: 180px;
        }
       
    }
</style>