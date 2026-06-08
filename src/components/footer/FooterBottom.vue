<script setup lang="ts">
import FooterIcons from '@/components/footer/FooterIcons.vue';
</script>

<template>
    <div class="FooterBottom">
        <div class="container">
            <h2>Напишите нам,<br>мы онлайн:</h2>
            <FooterIcons />
        </div>
        <div class="container">
            <a>Copyright © 2023 Сака Текстиль. Все права защищены.</a>
        </div>
    </div>
            
</template>



<style lang="scss">
    .FooterBottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        font-weight: SemiBold;
        font-size: 16px;
        h2{
            margin-right: 25px;
        }
        a{
            font-weight: regular;
            font-size: 14;
            color: #ffffff80;
        }
    }

        
        
</style>