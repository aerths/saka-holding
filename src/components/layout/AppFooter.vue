<script setup lang="ts">
import FooterTop from '@/components/footer/FooterTop.vue';
import FooterBottom from '@/components/footer/FooterBottom.vue';
</script>

<template>
    <div class="footer">
        <FooterTop />
        <FooterBottom />
    </div>
</template>
<style lang="css">
    .footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--main-color);
        padding: 35px 300px;
        min-height: 474px;
        color: #FFF;
        justify-content: space-between;
        
    }
</style>