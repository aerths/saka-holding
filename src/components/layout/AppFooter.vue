<script setup lang="ts">
import FooterTop from '@/components/footer/FooterTop.vue';
</script>

<template>
    <div class="footer">
        <FooterTop />
        <div class="BottomFooter">

        </div>
    </div>
</template>
<style lang="css">
    .footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--main-color);
        
        min-height: 474px;
        color: #FFF;
        
        
    }
</style>