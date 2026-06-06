<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import FooterBigBlock from '@/components/footer/FooterBigBlock.vue';
import FooterBlock from '@/components/footer/FooterBlock.vue';
</script>

<template>
    <div class="TopFooter">
            <div class="container">
                <Logo />
            </div>
            <div class="container">
                <FooterBlock NavText="Навигация" 
                text1="Каталог"
                text2="О компании"
                text3="Новости"
                text4="Доставка и оплата"
                text5="Контакты"
                text6="Корзина"
                />
            </div>
            <div class="container">
                <FooterBlock NavText="Информация" 
                text1="Помощь"
                text2="Блог"
                text3="Вопрос-ответ"
                text4="Политика конфиденциальности"
                text5="Карта сайта"
                
                />
            </div>
            <div class="container">
                <FooterBigBlock />
            </div>
        </div>
</template>



<style lang="scss">
    .TopFooter{
            max-width: 100%;
            padding: 35px 85px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .container{
            flex-direction: column;
        }
            
        }

        
        
</style>