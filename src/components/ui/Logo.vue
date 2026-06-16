<template>
    <RouterLink to="/" class="logo">
        <img src="./../../assets/images/logo.svg" alt="Saka-Holding">
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
