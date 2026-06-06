<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import { RouterView } from 'vue-router';
import Slider from '@/components/slider/Slider.vue';
import blok from '@/components/cards-office/blok.vue';
import news1 from '@/assets/images/news/news1.png';
</script>

<template>
  <AppHeader />
  <RouterView />
  <Slider />
  <div class="blok_saka_und_slider">
    <blok
    :image="news1"
    NavText="Пример текста 
    для заголовка новости"
    text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
    data="31.03.2022"
    />
    <blok 
    NavText="Пример текста 
    для заголовка новости"
    text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
    data="31.03.2022"
    />
  </div>
  <AppFooter />

</template>

<style>
  .blok_saka_und_slider {
    display: flex;
    flex-direction: column;
    margin: 50px 85px;
    gap: 220px;
  }
</style>