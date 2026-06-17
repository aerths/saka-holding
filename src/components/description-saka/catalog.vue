<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>

<template>
<div class="catalog">
    <div class="img_catalog">
        <img src="../../assets/images/large_images/SAKA-tower.png" alt="">
    </div>
    <div class="title_catalog">
        <div class="one_title_catalog">
            <h2>
                Saka Tekstil - для тех, кто хочет быстро 
                и комфортно получать текстильную продукцию <span class="title_catalog_color">высокого качества 
                по адекватной стоимости</span>
            </h2>
        </div>
        <div class="container">
            <div class="blok_yellow"></div>
            <p>Предоставляем возможность закупки широкого ассортимента: футер, кулирка, джакарт, флис, рибана и многое другое…</p>
        </div>
        <div class="container">
            <div class="blok_yellow"></div>
            <p>Предоставляем возможность закупки широкого ассортимента: футер, кулирка, джакарт, флис, рибана и многое другое…</p>
        </div>
        <div class="btn_catalog">
            <Button 
            text="Смотреть каталог"
            theme="icon"
            />
        </div>
    </div>
</div>
</template>

<style setup lang="scss">
@use '@/assets/styles/mixins' as *;
    .catalog{
        max-width: 1400px;
        max-height: 639px;
        display: flex;
        flex-direction: row;
        gap: 100px;
        @include laptop{
            background-color: black;
        }

        .blok_yellow {
        background-color: var(--accent-color);
        width: 80px;
        height: 4px;
        margin-right: 20px;
        align-self: flex-start;
        margin-top: 25px;

        
    }
    .container{
        max-width: 440px;
        p{
            font-weight: Regular;
            font-size: 18px;
        }
    }
    .title_catalog_color {
        color: var(--accent-color);
    }
    
    
    .title_catalog {
        display: flex;
        flex-direction: column;
        padding: 89px 0px;
        justify-content: space-between;
        @include laptop{
           
        }
    }
    .one_title_catalog {
        h2{
            font-weight: SemiBold;
            font-size: 26px;
        }
        max-width: 83%;
    }
}
</style>