<script setup lang="ts">
    import Slider from '@/components/slider/Slider.vue';
    import FullBloks from '@/components/cards-office/FullBloks.vue';
    import certificates from '@/components/certificates/certificates.vue';
    import Form from '@/components/ApplicationForm/Form.vue';
    import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
    import BlockTShort from '@/components/clothes/BlockTShort.vue';
    import tkani from '@/components/tkani/tkani.vue';
    import catalog from '@/components/description-saka/catalog.vue';
</script>

<template>
    <div class="Page">
        <div class="Container-Block">
            <Slider />
        </div>
        
        <div class="Container-Block">
            <FullBloks />
        </div>
        <div class="Container-Block" id="black">
            <tkani />
        </div>
        <div class="Container-Block" id="gray">
            <catalog />
        </div>
        <div class="Container-Block">
            <certificates />
        </div>
        <div class="Container-Block">
            <BlockTShort />
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
        #black{
            background-color: var(--main-color);
        }
        .Container-Block:nth-child(1){
            padding-bottom: 0px;
        }
        .Container-Block:nth-child(5), 
        .Container-Block:nth-child(8){
            padding-left: 180px;
            padding-right: 180px
        }

        .Container-Block:nth-child(8){
            @include mobile{
                padding-left: 8px;
                padding-right: 8px;
            }
        }
    }
</style>
