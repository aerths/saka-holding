<script setup lang="ts">
import Glad from '@/components/RecentlyViewed/Glad.vue';
import glad1 from '@/assets/images/glad/glad-blue.png';
import glad2 from '@/assets/images/glad/glad-white.png';
import glad3 from '@/assets/images/glad/glad-orange.png';
import glad4 from '@/assets/images/glad/glad-green.png';
</script>
<template>
    <div class="GladiCatalog">
        <div class="containerGladi">
            <a>СОРТИРОВКА:</a>
            <h2>По новизне</h2>
        </div>
        <div class="container">
            <div class="container">
            <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
        </div>
        <div class="container">
            <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
        </div>
        </div>
    </div>
</template>
<style setup lang="scss">
    .GladiCatalog{
        display: flex;
        flex-direction: column;;
        .containerGladi{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 50px;
            gap: 20px;
            a{
                font-size: 10px;
                font-weight: Medium;
                color: rgba(0, 0, 0, 0.493);
            }
            h2{
                font-size: 14px;
                font-weight: medium;
            }
        }
        .container{
            flex-wrap: wrap;
            padding: 0;
            margin: 20px;
            max-width: 900px;
            align-items: flex-end;
        }
    }
</style>