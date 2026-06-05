<script setup lang="ts">
import Slide from '@/components/slider/Slide.vue';
</script>

<template>
  <div class="slider">
    <div class="clide">
        <Slide />
    </div>
    
    <div class="slide">Слайд 1</div>
    <div class="slide">Слайд 2</div>
    <div class="slide">Слайд 3</div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background-color: aqua;
  max-width: 1160px;
  max-height: 460px;
  margin-top: 95px;
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  min-height: 250px;
}
</style>