<script setup lang="ts">

</script>

<template>
<div class="catalog">
    <div class="img_catalog">
        <img src="../../assets/images/large_images/SAKA-tower.png" alt="">
    </div>
    <div class="title_catalog">
        <div class="one_title_catalog">
            <h2>
                Saka Tekstil - производство и продажа турецкого трикотажного полотна
            </h2>
        </div>
        <div class="container">
            <p>Мы осуществляем продажу ткани от рулона и нарезку кашкорсе от 5%-20%</p>
        </div>
        <div class="container">
            <p>Наша команда следит за трендами в мире трикотажа, мы постоянно обновляем наш ассортимент и регулярно контролируем наличие ткани на складе</p>
        </div>
        <div class="container">
            <p>Мы предлагаем клиентам различные виды трикотажных полотен высокого качества более, чем в 45 цветовых вариациях</p>
        </div>
        <div class="worthiness">
            <div class="ellipce">
                <img class="img_corow" src="../../assets/icons/crown.svg" alt="">
                <h1>
                    30
                </h1>
                <p>
                    Лет на рынке текстиля
                </p>
            </div>
            <div class="ellipce">
                <img class="img_corow" src="../../assets/icons/crown.svg" alt="">
                <h1>
                    40+
                </h1>
                <p>
                    Ассортимент товаров в наличии
                </p>
            </div>
            <div class="ellipce">
                <img class="img_corow" src="../../assets/icons/crown.svg" alt="">
                <h1>
                    10 000+
                </h1>
                <p>
                    Клиентов выбирают нашу компанию
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<style setup lang="scss">
    .catalog{
        max-width: 1400px;
        display: flex;
        flex-direction: row;
        gap: 100px;
        background-color: var(--bg-gray-color);

        .blok_yellow {
        background-color: var(--accent-color);
        width: 80px;
        height: 4px;
        margin-right: 20px;
        align-self: flex-start;
        margin-top: 25px;

        
    }
    .container{
        max-width: 440px;
        p{
            font-weight: Regular;
            font-size: 18px;
        }
    }
    .title_catalog_color {
        color: var(--accent-color);
    }
    }
    
    .title_catalog {
        display: flex;
        flex-direction: column;
        padding: 89px 0px;
        justify-content: space-between;
    }
    .one_title_catalog {
        h2{
            font-weight: SemiBold;
            font-size: 26px;
        }
        max-width: 83%;
    }

    .worthiness {
        display: flex;
        flex-direction: row;
    }

    .ellipce {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-gray-color);
        border-radius: 50%;
    }

    .img_corow {
        width: 24px;
        height: 24px;
    }
</style>