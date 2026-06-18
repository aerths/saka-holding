<script setup lang="ts">
import logo from '@/assets/images/logo.svg?url';
</script>

<template>
    <RouterLink to="/" class="logo">
        <img :src="logo" alt="Saka-Holding">
    </RouterLink>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.logo {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;

    img {
        display: block;
        width: auto;
        height: 42px;
    }

    @include laptop {
        img {
            height: 32px;
        }
    }

    @include mobile {
        img {
            height: 28px;
        }
    }
}
</style>
