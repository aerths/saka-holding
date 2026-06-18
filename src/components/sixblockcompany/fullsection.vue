<script setup lang="ts">
import soloblock from '@/components/sixblockcompany/soloblock.vue';
import backgroundPurple from '@/assets/icons/backgroundPurple.svg?url';
import zavod from '@/assets/icons/sixiconsaboutcompany/zavod.svg?url';
import sklad from '@/assets/icons/sixiconsaboutcompany/sklad.svg?url';
import medal from '@/assets/icons/sixiconsaboutcompany/medal.svg?url';
import kristall from '@/assets/icons/sixiconsaboutcompany/kristall.svg?url';
import kofta from '@/assets/icons/sixiconsaboutcompany/kofta.svg?url';
import heart from '@/assets/icons/sixiconsaboutcompany/heart.svg?url';
</script>

<template>
    <section class="full_section">
        <img class="purple_background" :src="backgroundPurple" alt="" aria-hidden="true">
        <div class="block_section">
            <div class="title_section">
                <h2>
                    Наша главная задача - не просто предоставить качественную ткань, но и оказать каждому заказчику высокий уровень клиентского сервиса
                </h2>
            </div>
            <div class="full_components">
                    <soloblock 
                    :image = "sklad"
                    title = "Логистика"
                    text= "Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции."
                    />
                    <soloblock 
                    :image = "zavod"
                    title = "Производство"
                    text = "Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизирует финансовые потери."
                    />
                    <soloblock 
                    :image = "kofta"
                    title = "Дополнительные материалы"
                    text = "Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара
                    со склада и бесплатные образцы."
                    />
                    <soloblock 
                    :image = "heart"
                    title = "Лояльность"
                    text = "Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды."
                    />

  
                    <soloblock 
                    :image = "kristall"
                    title = "Уникальность"
                    text = "Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды."
                    />
                    <soloblock 
                    :image = "medal"
                    title = "Качество"
                    text = "Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять свои свойства с течением времени."
                    />
  
            </div>
        </div>
    </section>
</template>

<style setup lang="scss">
    .full_section {
        position: relative;
        overflow: hidden;
        background-color: var(--bg-gray-color);
        max-width: 1400px;
        width: 100%;
        min-height: 100%;
        padding: 72px clamp(28px, 4vw, 70px) 96px;

        .purple_background{
            position: absolute;
            right: -130px;
            bottom: 58px;
            z-index: 0;
            width: min(62vw, 760px);
            min-width: 520px;
            pointer-events: none;
            user-select: none;
        }

        .block_section{
            position: relative;
            z-index: 1;
            width: 100%;
        }

        .title_section{
            max-width: 870px;
            margin-bottom: 42px;

            h2{
                margin: 0;
                font-size: clamp(24px, 2.1vw, 36px);
                line-height: 1.25;
                font-weight: 700;
            }
        }

        .full_components{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 40px;
            max-width: 1160px;
            width: 100%;
            position: relative;
            z-index: 1;
        }

        @include laptop{
            padding: 56px 32px 76px;

            .purple_background{
                right: -220px;
                bottom: 40px;
                width: 720px;
                opacity: 0.9;
            }

            .title_section{
                margin-bottom: 34px;
            }

            .full_components{
                justify-content: center;
                gap: 28px;
            }
        }

        @include mobile{
            padding: 40px 16px 56px;

            .purple_background{
                right: -260px;
                bottom: 18px;
                width: 620px;
                min-width: 0;
                opacity: 0.75;
            }

            .title_section{
                margin-bottom: 28px;
            }

            .full_components{
                gap: 20px;
            }
        }
    }
</style>
