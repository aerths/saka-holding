<script setup lang="ts">
    import certificate from '@/components/certificates/certificate.vue';
    import swap from '@/components/certificates/swap.vue';
    import sert1 from '@/assets/images/sertificati/sert1.png';
    import sert2 from '@/assets/images/sertificati/sert2.png';
    import sert3 from '@/assets/images/sertificati/sert3.png';
</script>

<template>
    <div class="certificates">
        <h1>Saka Tekstil дорожит своей репутацией</h1>
        <div class="container">
            <swap theme="left"/>
            <div class="sliddder">
                <certificate :image="sert1"/>
                <certificate :image="sert2"/>
                <certificate :image="sert3"/>
            </div>
            <swap theme="right"/>
        </div>
    </div>


    

</template>

<style setup lang="scss">
  .certificates{
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: 100%;
    align-items: center;
    .container{
        width: 100%;
        justify-content: space-between;
    }
    .sliddder{
        display: flex;
        flex-direction: row;
        gap: 40px;
        overflow: hidden;
        width: 80%;
        @include laptop{
            max-width: 360px;
        }
    }
  }
</style>