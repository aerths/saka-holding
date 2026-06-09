
<script setup lang="ts">
import Glad from '@/components/RecentlyViewed/Glad.vue';
import glad1 from '@/assets/images/glad/glad-blue.png';
import glad2 from '@/assets/images/glad/glad-white.png';
import glad3 from '@/assets/images/glad/glad-orange.png';
import glad4 from '@/assets/images/glad/glad-green.png';
import swap from '@/components/certificates/swap.vue';
</script>

<template>
    <div class="RecentlyViewed">
        <swap theme="left-light"/>
        <Glad :image="glad1" price="11,4$" size="180 см"/>
        <Glad :image="glad2" price="13$" size="180 см"/>
        <Glad :image="glad3" price="122,4$" size="180 см"/>
        <Glad :image="glad4" price="13,84$" size="180 см"/>
        <swap theme="right-light"/>
    </div>

</template>


<style setup lang="scss">
    .RecentlyViewed{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        
    }
</style>