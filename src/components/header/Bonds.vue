<template>
    <div class="bonds">
        <button class="BB">
            АКЦИИ
        </button>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 58.svg" width="24" height="24" alt="">
            <h4>Кулинарная гладь</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 2.svg" width="24" height="24" alt="">
            <h4>Футер</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 3.svg" width="24" height="24" alt="">
            <h4>Кулинарная гладь</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse4.svg" width="24" height="24" alt="">
            <h4>Пике</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 5.svg" width="24" height="24" alt="">
            <h4>Интерлок</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 6.svg" width="24" height="24" alt="">
            <h4>Капитоний</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 7.svg" width="24" height="24" alt="">
            <h4>Велюр</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 8.svg" width="24" height="24" alt="">
            <h4>Селаник</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 9.svg" width="24" height="24" alt="">
            <h4>Вискоза</h4>
        </div>
    </div>
</template>

<script>
</script>

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
}

h4 {
    margin: 0;
    color: #fff;
    font-size: 10px;
    line-height: 1.2;
}
</style>
