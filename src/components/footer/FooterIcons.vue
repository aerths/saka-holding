<script setup lang="ts">
import vkIcon from '@/assets/icons/footer/VK.svg?url';
import whatsappIcon from '@/assets/icons/footer/WhatsApp.svg?url';
import telegramIcon from '@/assets/icons/footer/Telegram.svg?url';
import instagramIcon from '@/assets/icons/footer/Instagram.svg?url';
</script>

<template>
    <div class="FooterIcons">
        <img :src="vkIcon" alt="">
        <img :src="whatsappIcon" alt="">
        <img :src="telegramIcon" alt="">
        <img :src="instagramIcon" alt="">
    </div>
            
</template>



<style lang="scss">
    .FooterIcons{
        img{
            margin: 0 20px;
        }
    }

        
        
</style>
