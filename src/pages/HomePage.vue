<script setup lang="ts">
    // import Slider from '@/components/slider/Slider.vue';
    import FullBloks from '@/components/cards-office/FullBloks.vue';
    import certificates from '@/components/certificates/certificates.vue';
    import Form from '@/components/ApplicationForm/Form.vue';
    import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
    
</script>

<template>
    <div class="Page">
        <!-- <Slider /> -->
         <div class="Container-Block">
            <FullBloks />
         </div>
        <div class="Container-Block">
            <certificates />
        </div>
        
        <div class="Container-Block">
            <Form />
         </div>
        <div class="Container-Block" id="gray">
           <RecentlyViewed /> 
        </div>
        
    </div>
</template>

<style setup lang="scss">
    .Page{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        #gray{
            background-color: var(--bg-gray-color);
        }
    }
</style>