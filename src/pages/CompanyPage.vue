<script setup lang="ts">
import AboutCompany from '../components/CompanyDescSaka/AboutCompany.vue';
import location from '../components/LocationNavig/location.vue';
import FullBlockTekstil from '../components/CompanyTekstil/FullBlockTekstil.vue';
import certificates from '../components/certificates/certificates.vue';
import RecentlyViewed from '@/components/RecentlyViewed/RecentlyViewed.vue';
import block3person from '@/components/block3person/block3person.vue';
import fullsection from '@/components/sixblockcompany/fullsection.vue';
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
        <div class="Container-Block">
            <fullsection />
        </div>
        <div class="Container-Block">
            <certificates />
        </div>
        <div class="component-persons">
            <block3person />
        </div>
        <div class="Container-Block" id="gray">
            <RecentlyViewed />
        </div>
    </div>
</template>

<style setup lang="scss"> 
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
