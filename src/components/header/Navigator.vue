<template>
    <nav class="app-header__nav" aria-label="Основная навигация">
        <RouterLink class="app-header__link" to="/">Главная</RouterLink>
        <RouterLink class="app-header__link" to="/catalog">Каталог</RouterLink>
        <RouterLink class="app-header__link" to="/about">О компании</RouterLink>
        <RouterLink class="app-header__link" to="/news">Новости</RouterLink>
        <RouterLink class="app-header__link" to="/payment">Доставка и оплата</RouterLink>
        <RouterLink class="app-header__link" to="/news">Контакты</RouterLink>
    </nav>
</template>

<script>
</script>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.app-header__nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 12px 24px;
    background-color: var(--second-main-color);
    color: var(--bg-color);
    padding: 20px clamp(24px, 6vw, 120px);

    @include laptop {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 20px 32px 24px;
    }

    @include mobile {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        padding: 16px;
    }
}

.app-header__link {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    font-size: 16px;
    white-space: nowrap;

    @include mobile {
        font-size: 14px;
    }
}
</style>
