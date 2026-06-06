<template>
    <nav class="app-header__nav" aria-label="Основная навигация">
        <RouterLink class="app-header__link" to="/">Главная</RouterLink>
        <RouterLink class="app-header__link" to="/catalog">Каталог</RouterLink>
        <RouterLink class="app-header__link" to="/about">О компании</RouterLink>
        <RouterLink class="app-header__link" to="/news">Новости</RouterLink>
        <RouterLink class="app-header__link" to="/about">Доставка и оплата</RouterLink>
        <RouterLink class="app-header__link" to="/news">Контакты</RouterLink>
    </nav>
</template>

<script>
</script>

<style>
.app-header__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--second-main-color);
    color: var(--bg-color);
    padding: 20px 320px;
}

.app-header__link {
    text-decoration: none;
    cursor: pointer;
    color: inherit;

    
}
</style>