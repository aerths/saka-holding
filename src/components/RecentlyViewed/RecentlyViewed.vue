<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Glad from '@/components/RecentlyViewed/Glad.vue';
import glad1 from '@/assets/images/glad/glad-blue.png';
import glad2 from '@/assets/images/glad/glad-white.png';
import glad3 from '@/assets/images/glad/glad-orange.png';
import glad4 from '@/assets/images/glad/glad-green.png';
import Swap from '@/components/certificates/swap.vue';

const recentlyViewed = [
    { id: 1, image: glad1, price: '11,4$', size: '180 см' },
    { id: 2, image: glad2, price: '13$', size: '180 см' },
    { id: 3, image: glad3, price: '122,4$', size: '180 см' },
    { id: 4, image: glad4, price: '13,84$', size: '180 см' },
];

const currentIndex = ref(0);
const visibleItemCount = ref(4);

const visibleRecentlyViewed = computed(() =>
    Array.from({ length: visibleItemCount.value }, (_, index) =>
        recentlyViewed[(currentIndex.value + index) % recentlyViewed.length]
    )
);

const showPreviousItem = () => {
    currentIndex.value = (currentIndex.value - 1 + recentlyViewed.length) % recentlyViewed.length;
};

const showNextItem = () => {
    currentIndex.value = (currentIndex.value + 1) % recentlyViewed.length;
};

const updateVisibleItemCount = () => {
    if (window.matchMedia('(max-width: 639px)').matches) {
        visibleItemCount.value = 1;
        return;
    }

    visibleItemCount.value = window.matchMedia('(max-width: 1024px)').matches ? 2 : 4;
};

onMounted(() => {
    updateVisibleItemCount();
    window.addEventListener('resize', updateVisibleItemCount);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleItemCount);
});
</script>

<template>
    <div class="RecentlyViewed">
        <div class="TextCont">
            <h1>Недавно просмотренные</h1>
        </div>
        <div class="container">
            <Swap theme="left-light" aria-label="Предыдущий товар" @click="showPreviousItem"/>
            <div class="sliddder" aria-live="polite">
                <Glad
                    v-for="item in visibleRecentlyViewed"
                    :key="item.id"
                    :image="item.image"
                    :price="item.price"
                    :size="item.size"
                />
            </div>
            <Swap theme="right-light" aria-label="Следующий товар" @click="showNextItem"/>
        </div>
    </div>
</template>

<style setup lang="scss">
    .RecentlyViewed{
        max-width: 1600px;
        display: flex;
        flex-direction: column;
        width: 100%;

        .TextCont{
            padding: 12px 130px;

            @include laptop{
                padding: 12px 32px;
            }

            @include mobile{
                padding: 12px 16px;
            }
        }

        .container{
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            .swap{
                flex: 0 0 50px;
            }

            @include mobile{
                justify-content: center;
                flex-wrap: nowrap;
                gap: 8px;

                .swap{
                    flex: 0 0 40px;
                    width: 40px;
                    height: 40px;
                }
            }

            .sliddder{
                display: flex;
                flex-direction: row;
                width: 80%;
                max-width: 1160px;
                gap: clamp(16px, 2.5vw, 40px);
                align-items: center;
                min-width: 0;

                .Glad{
                    flex: 1 1 calc((100% - 120px) / 4);
                    min-width: 0;
                }

                @include laptop{
                    flex: 0 1 540px;
                    width: min(540px, calc(100% - 120px));
                    max-width: 560px;
                    gap: 20px;

                    .Glad{
                        flex-basis: calc((100% - 20px) / 2);
                        max-width: none;
                        min-width: 0;
                    }
                }

                @include mobile{
                    justify-content: center;
                    flex: 0 0 clamp(190px, 58vw, 220px);
                    width: clamp(190px, 58vw, 220px);
                    max-width: 220px;
                    gap: 0;

                    .Glad{
                        flex: 0 0 100%;
                        max-width: 220px;
                        height: auto;
                    }
                }
            }
        }
    }
</style>
