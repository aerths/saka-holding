<script setup lang="ts">
import AboutCompany from '../components/CompanyDescSaka/AboutCompany.vue';
import location from '../components/LocationNavig/location.vue';
import FullBlockTekstil from '../components/CompanyTekstil/FullBlockTekstil.vue';
import certificates from '../components/certificates/certificates.vue';
import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
</script>

<template>
    <div class="CompanyPage">
        <div class="Container-Block">
            <location
            title="О компании"
            text="О КОМПАНИИ"
            />
        </div>
        <div class="Container-Block">
            <AboutCompany />
        </div>
        <div class="Container-Block">
            <FullBlockTekstil />
        </div>
        <!-- <div class="Container-Block">
            фиолетовый бэкграунд
        </div> -->
        <div class="Container-Block">
            <certificates />
        </div>
        <!-- <div class="Container-Block">
            много текста
        </div> -->
        <div class="Container-Block" id="gray">
            <RecentlyViewed />
        </div>
    </div>
</template>

<style setup lang="scss"> 
    .Container-Block:nth-child(4),
    .Container-Block:nth-child(5){
            padding-left: 180px;
            padding-right: 180px;
        }
    .Container-Block:nth-child(1){
            padding-bottom: 0;
        }
    .Container-Block:nth-child(2){
            padding-top: 40px;
        }
    .Container-Block:nth-child(3){
            padding-top: 0px;
        }
</style>