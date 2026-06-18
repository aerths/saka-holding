<script setup lang="ts">
import soloblock from '@/components/sixblockcompany/soloblock.vue';
// import purpletkani from '@/assets/images/perpletkani.png';
import zavod from '@/assets/icons/sixiconsaboutcompany/zavod.svg?url';
import sklad from '@/assets/icons/sixiconsaboutcompany/sklad.svg?url';
import medal from '@/assets/icons/sixiconsaboutcompany/medal.svg?url';
import kristall from '@/assets/icons/sixiconsaboutcompany/kristall.svg?url';
import kofta from '@/assets/icons/sixiconsaboutcompany/kofta.svg?url';
import heart from '@/assets/icons/sixiconsaboutcompany/heart.svg?url';
</script>

<template>
    <section class="full_section">
        <div class="title_section">
            <h3>
                Наша главная задача - не просто предоставить качественную ткань, но и оказать каждому заказчику высокий уровень клиентского сервиса
            </h3>
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
    </section>
</template>

<style>
    .full_section {
        background-color: var(--bg-gray-color);
        max-width: 1400px;
        width: 100%;
        height: 1066px;
        height: 100%;
        
    }
</style>
