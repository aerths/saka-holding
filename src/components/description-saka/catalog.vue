<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>

<template>
<div class="catalogg">
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
    .catalogg{
        max-width: 1400px;
        max-height: 639px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @include laptop{
            flex-direction: column-reverse;
            max-height: 1200px;
            gap: 0;
            align-items: center;
        }
        .btn_catalog{
            @include laptop{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        }

        .blok_yellow {
        background-color: var(--accent-color);
        width: 80px;
        height: 4px;
        margin-right: 5%;
        align-self: flex-start;
        margin-top: 5%;
        }
    .container{
  
        p{
            font-weight: Regular;
            font-size: 14px;
        }
    }
    .title_catalog_color {
        color: var(--accent-color);
    }
    
    
    .title_catalog {
        display: flex;
        flex-direction: column;
        padding: 5% 5%;
        justify-content: space-between;
        @include laptop{
           align-items: center;
        }
    }
    .one_title_catalog {
        h2{
            font-weight: SemiBold;
            font-size: 22px;
        }
        max-width: 83%;
    }
}
</style>