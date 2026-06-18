<script setup lang="ts">
import ellipse58 from '@/assets/icons/bonds/Ellipse 58.svg?url';
import ellipse2 from '@/assets/icons/bonds/Ellipse 2.svg?url';
import ellipse3 from '@/assets/icons/bonds/Ellipse 3.svg?url';
import ellipse4 from '@/assets/icons/bonds/Ellipse4.svg?url';
import ellipse5 from '@/assets/icons/bonds/Ellipse 5.svg?url';
import ellipse6 from '@/assets/icons/bonds/Ellipse 6.svg?url';
import ellipse7 from '@/assets/icons/bonds/Ellipse 7.svg?url';
import ellipse8 from '@/assets/icons/bonds/Ellipse 8.svg?url';
import ellipse9 from '@/assets/icons/bonds/Ellipse 9.svg?url';

const bonds = [
    { icon: ellipse58, title: 'Кулинарная гладь' },
    { icon: ellipse2, title: 'Футер' },
    { icon: ellipse3, title: 'Кулинарная гладь' },
    { icon: ellipse4, title: 'Пике' },
    { icon: ellipse5, title: 'Интерлок' },
    { icon: ellipse6, title: 'Капитоний' },
    { icon: ellipse7, title: 'Велюр' },
    { icon: ellipse8, title: 'Селаник' },
    { icon: ellipse9, title: 'Вискоза' },
];
</script>

<template>
    <div class="bonds">
        <button class="BB">
            АКЦИИ
        </button>

        <div v-for="bond in bonds" :key="bond.title" class="container">
            <img :src="bond.icon" width="24" height="24" alt="">
            <h4>{{ bond.title }}</h4>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.bonds {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    width: 100%;
    max-width: 100%;
    min-height: 50px;
    padding: 0 clamp(24px, 6vw, 120px);
    background-color: var(--main-color);
    color: #fff;

    .container {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        max-width: 150px;
        cursor: pointer;
        flex: 0 1 auto;
    }

    .BB {
        flex: 0 0 140px;
        width: 100%;
        max-width: 140px;
        height: 50px;
        border: none;
        padding: 12px 18px;
        background-color: var(--accent-color);
        font-weight: 700;
        text-align: left;
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%);
        cursor: pointer;
    }

    @include laptop {
        display: none;
    }

    @include mobile {
        display: none;
    }
    h4 {
        margin: 0;
        color: #fff;
        font-size: 10px;
        line-height: 1.2;
    }
}
</style>
