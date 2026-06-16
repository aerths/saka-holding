<script setup lang="ts">
import arrow from '@/components/ui/arrow.vue';
defineProps<{
    NavText: string
    text: string
    data: string
    image: string
}>()
</script>


<template>
    <div class="blok_office">
        <div class="blok_office_img">
            <img :src="image" alt="">
        </div>
        <div class="btn_arrow">
            <arrow />
        </div>
        <div class="blok_office_text">
            <h3>
                {{NavText}}
            </h3>
            <p>
                {{text}}
            </p>
            <p>
                {{data}}
            </p>
        </div>
    </div>
</template>



<style setup lang="scss">
    .blok_office {
        background-color: var(--second-main-color);
        max-width: 360px;
        max-height: 460px;
        color: var(--bg-color);
        border-radius: 16px;
        position: relative;
    }

    .blok_office_text {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    background-image: linear-gradient(180deg, rgba(25, 36, 47, 0) 0%, rgba(25, 36, 47, 1) 20%);
    position: absolute;
    left: 0;
    top: 185px;
    z-index: 10;
    border-radius: 16px;
    padding-bottom: 16px;
}
    
    .btn_arrow {
        position: absolute;
        display: flex;
        top: 0px;
        padding: 28px 28px;
        justify-self: end;
    }
</style>
