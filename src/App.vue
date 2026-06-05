<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import { RouterView } from 'vue-router';
import Slider from '@/components/slider/Slider.vue';

</script>

<template>
  <AppHeader />
  <RouterView />
  <Slider />
  <AppFooter />

</template>

<style>

</style>