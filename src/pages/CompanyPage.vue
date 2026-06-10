<script setup lang="ts">
import AboutCompany from '../components/CompanyDescSaka/AboutCompany.vue';
import location from '../components/LocationNavig/location.vue';
import FullBlockTekstil from '../components/CompanyTekstil/FullBlockTekstil.vue';
import certificates from '../components/certificates/certificates.vue';
import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
</script>

<template>
    <div class="Page">
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

</style>