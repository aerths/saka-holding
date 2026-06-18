<script setup lang="ts">
import sakaLogo from '@/assets/icons/SAKA-LOGO.svg?url';
import erosLogo from '@/assets/icons/EROS.svg?url';
import tortexLogo from '@/assets/icons/TORTEX.svg?url';
</script>

<template>
    <div class="icons_logo">
        <img :src="sakaLogo" alt="">
        <img :src="erosLogo" alt="">
        <img :src="tortexLogo" alt="">
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.icons_logo {
    display: flex;
    gap: 12px;
    padding-right: 24px;
    padding-left: 12px;
    cursor: pointer;
    min-width: 0;

    img {
        display: block;
        width: auto;
        height: 30px;
        object-fit: contain;
        flex-shrink: 0;
    }

    @include laptop {
        gap: 8px;
        padding-right: 0;
        padding-left: 0;

        img {
            height: 24px;
        }
    }

    @include mobile {
        gap: 6px;

        img {
            height: 20px;
        }
    }
}
</style>
