<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'


import Spage1 from '@/assets/images/slider/Spage1.png'
import Spage2 from '@/assets/images/slider/Spage2.png'
import Spage3 from '@/assets/images/slider/Spage3.png'
import Spage4 from '@/assets/images/slider/Spage4.png'
import Spage5 from '@/assets/images/slider/Spage5.png'
import Button from '@/components/ui/Button.vue';

import womanImage from '@/assets/images/large_images/woomen.png'

const slides = [
    { image: Spage1, accent: 'специальными', lastLine: 'предложениями' },
    { image: Spage2, accent: 'специальными', lastLine: 'предложениями' },
    { image: Spage3, accent: 'специальными', lastLine: 'предложениями' },
    { image: Spage4, accent: 'специальными', lastLine: 'предложениями' },
    { image: Spage5, accent: 'специальными', lastLine: 'предложениями' },
]

const activeSlide = ref(0)
let sliderTimer: number | undefined

const currentSlide = computed(() => slides[activeSlide.value]!)
const slideNumber = computed(() => String(activeSlide.value + 1).padStart(2, '0'))
const totalSlides = computed(() => String(slides.length).padStart(2, '0'))

function selectSlide(index: number) {
    activeSlide.value = index
}

function nextSlide() {
    activeSlide.value = (activeSlide.value + 1) % slides.length
}

function startSlider() {
    stopSlider()
    sliderTimer = window.setInterval(nextSlide, 4500)
}

function stopSlider() {
    if (sliderTimer) {
        window.clearInterval(sliderTimer)
        sliderTimer = undefined
    }
}

onMounted(startSlider)
onBeforeUnmount(stopSlider)
</script>

<template>
    <section class="slider" aria-label="Акции и специальные предложения">
        <div
            class="slider__card"
            @mouseenter="stopSlider"
            @mouseleave="startSlider"
        >
            <div class="slider__slides" aria-hidden="true">
                <div
                    v-for="(slide, index) in slides"
                    :key="slide.image"
                    class="slider__slide"
                    :class="{ 'slider__slide--active': index === activeSlide }"
                    :style="{ backgroundImage: `url(${slide.image})` }"
                ></div>
            </div>

            <div class="slider__content">
                <h1 class="slider__title">
                    Здесь будет слайдер<br>
                    с различными акциями<br>
                    или <span>{{ currentSlide.accent }}</span><br>
                    <span>{{ currentSlide.lastLine }}</span>
                </h1>
                <div class="BT">
                  <Button theme="icon", text="Подробнее" />
                </div>
            </div>

            <img class="slider__woman" :src="womanImage" alt="">

            <div class="slider__bottom">
                <div class="slider__dots" aria-label="Выбор слайда">
                    <button
                        v-for="(_, index) in slides"
                        :key="index"
                        class="slider__dot"
                        :class="{ 'slider__dot--active': index === activeSlide }"
                        type="button"
                        :aria-label="`Слайд ${index + 1}`"
                        @click="selectSlide(index)"
                    ></button>
                </div>

                <div class="slider__counter">
                    <span>{{ slideNumber }}</span>
                    <span>/</span>
                    <span>{{ totalSlides }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.slider {
  color: #FFF;
    background-color: var(--bg-color);
    width: 100%;
    &__card {
        position: relative;
        width: 100%;
        max-width:1400px;
        height: 438px;
        margin: 0 auto;
        overflow: visible;
        border-radius: 13px;
        background-color: var(--black-color);
    }

    &__slides,
    &__slide {
        position: absolute;
        inset: 0;
    }

    &__slide {
        overflow: hidden;
        border-radius: 13px;
        opacity: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        transition: opacity 0.6s ease;

        &--active {
            opacity: 1;
        }
    }

    &__content {
        position: relative;
        z-index: 2;
        max-width: 80%;
        padding: 68px 0 0 95px;
        text-align: left;
    }

    &__title {
        margin: 0;
        color: #FFF;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.35;
        letter-spacing: 1.1px;

        span {
            color: var(--accent-color);
        }
    }

    

    &__woman {
        position: absolute;
        z-index: 1;
        right: 58px;
        bottom: -9px;
        width: 520px;
        height: auto;
        pointer-events: none;
        user-select: none;
    }

    &__bottom {
        position: absolute;
        z-index: 3;
        left: 95px;
        bottom: 37px;
        display: flex;
        align-items: center;
        gap: 44px;
    }

    &__dots {
        display: flex;
        align-items: center;
        gap: 24px;
        
    }

    &__dot {
        width: 29px;
        height: 3px;
        padding: 0;
        border: 0;
        background-color: var(--second-main-color);
        cursor: pointer;

        &--active {
            background-color: var(--accent-color);
        }
    }

    &__counter {
        display: flex;
        align-items: center;
        gap: 14px;
        color: var(--bg-duo-color);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;

        span:first-child {
            color: #FFF;
        }
    }
    .BT{
      margin-top: 30px;
    }
}


</style>