<script setup lang="ts">
import crownIcon from '@/assets/icons/crown.svg?url';
</script>

<template>
<div class="catalog">
    <div class="img_catalog">
        <img src="../../assets/images/large_images/flags.png" alt="">
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
                <img class="img_corow" :src="crownIcon" alt="">
                <h1>
                    30
                </h1>
                <p>
                    Лет на рынке текстиля
                </p>
            </div>
            <div class="ellipce">
                <img class="img_corow" :src="crownIcon" alt="">
                <h1>
                    40+
                </h1>
                <p>
                    Ассортимент товаров в наличии
                </p>
            </div>
            <div class="ellipce">
                <img class="img_corow" :src="crownIcon" alt="">
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
        position: relative;
        max-width: 1400px;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 100px;
        background-color: var(--bg-color);

        @include laptop{
            min-height: 620px;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        @include mobile{
            min-height: 560px;
        }

        .img_catalog{
            @include laptop{
                position: absolute;
                left: 50%;
                bottom: 0;
                z-index: 1;
                width: min(100%, 620px);
                transform: translateX(-50%);
                opacity: 0.34;
                pointer-events: none;
            }

            @include mobile{
                width: 480px;
                opacity: 0.26;
            }

            img{
                display: block;
                max-width: 100%;
                height: auto;
            }
        }

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
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: 40px 0px;
        justify-content: space-between;

        @include laptop{
            width: 100%;
            align-items: center;
            gap: 20px;
            padding: 48px 24px;
            text-align: center;
        }

        @include mobile{
            padding: 32px 0;
        }
    }
    .one_title_catalog {
        h2{
            font-weight: SemiBold;
            font-size: 26px;

            @include mobile{
                font-size: 20px;
                line-height: 1.3;
            }
        }
        max-width: 83%;

        @include laptop{
            max-width: 100%;
        }
    }

    .worthiness {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 38px;

    @include laptop{
        padding-top: 18px;
    }
    }

    .ellipce {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: var(--bg-gray-color);
        border-radius: 50%;
        width: 160px;
        height: 160px;
        padding: 16px;
        box-sizing: border-box;
    }

    .ellipce h1 {
        font-size: 32px;
        margin: 8px 0 4px 0;
        color: var(--accent-color);
    }

    .ellipce p {
        font-size: 13px;
        margin: 0;
        line-height: 1.3;
        font-weight: bold;
    }

    .img_corow {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }
</style>
