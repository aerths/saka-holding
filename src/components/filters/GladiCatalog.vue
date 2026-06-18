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
        <div class="catalog-list">
            <div class="catalog-item">
                <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad1" price="11,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad2" price="13$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad3" price="122,4$" size="180 см" theme="grey"/>
            </div>
            <div class="catalog-item">
                <Glad :image="glad4" price="13,84$" size="180 см" theme="grey"/>
            </div>
        </div>
    </div>
</template>
<style setup lang="scss">
    .GladiCatalog{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 0;

        .containerGladi{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 20px;
            gap: 20px;

            @include laptop{
                padding: 0;
            }

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

        .catalog-list{
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            margin: 20px 0 0;
            max-width: 900px;
            gap: 20px;
            align-items: stretch;
            padding-bottom: 48px;

            @include laptop{
                max-width: 100%;
                justify-content: center;
                padding-bottom: 40px;
            }

            @include mobile{
                padding-bottom: 32px;
            }
        }

        .catalog-item{
            flex: 0 1 260px;
            max-width: 260px;
            width: 100%;
            min-width: 0;

            @include laptop{
                flex-basis: 260px;
            }

            @include mobile{
                flex-basis: min(100%, 260px);
                max-width: 260px;
            }
        }
    }
</style>
