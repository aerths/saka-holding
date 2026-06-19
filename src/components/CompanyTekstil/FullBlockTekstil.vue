<script setup lang="ts">
import blockOpenEnd from '@/components/CompanyTekstil/blockOpenEnd.vue';
import tekstilldarkpenie from '../../assets/images/tekstilldarkpenie.png'
import tekstillpenie from '../../assets/images/tekstillpenie.png'
import tekstillOpenend from '../../assets/images/tekstillOpenend.png'
</script>

<template>
    <div class="itog_block_tekstil">
        <div class="title_saka_tekstil">
            <h2>Saka Tekstil работает с трикотажными полотнами разного качества:</h2>
        </div>
        <div class="full_block_texstill">
            <blockOpenEnd 
            :image="tekstillOpenend"
            title="Open end"
            text="Бюджетный трикотаж, имеет ворсистую и шероховатую поверхность из-за коротких волокон."
            />
            <blockOpenEnd 
            :image="tekstillpenie"
            title="Пенье компакт"
            text="Высшее качество трикотажной ткани, имееют гладкую поверхность без ворсинок"
            />
            <blockOpenEnd 
            :image="tekstilldarkpenie"
            title="Пенье компакт Плюс-EXCLUSIVE"
            text="полотно вяжется американскими нитками  и окрашено немецкими красками высшего качества"
            />
        </div>
    </div>
</template>

<style setup lang="scss">
    .itog_block_tekstil {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1300px;
    }

    .title_saka_tekstil {
        max-width: 500px;
        color: var(--muted-text-color);
    }

    .full_block_texstill {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 42px;
        justify-content: space-between;

        @include laptop{
            justify-content: center;
        }
    }
</style>
