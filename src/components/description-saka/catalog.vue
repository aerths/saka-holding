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
        width: 100%;
        max-width: 1400px;
        max-height: 639px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        @include laptop{
            flex-direction: column-reverse;
            gap: 0;
            align-items: center;
        }

        .img_catalog{
            flex: 0 1 520px;
            min-width: 0;
            max-width: 520px;

            img{
                display: block;
                width: 100%;
                height: auto;
                max-width: 100%;
                max-height: 639px;
                object-fit: contain;
            }

            @include laptop{
                width: 100%;
                max-width: 560px;
                flex-basis: auto;
                padding-top: 32px;
            }

            @include mobile{
                padding-top: 24px;
            }
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
        flex: 0 0 80px;
        width: 80px;
        height: 4px;
        margin-right: 5%;
        align-self: flex-start;
        margin-top: 5%;

        @include mobile{
            flex-basis: 44px;
            width: 44px;
            margin-right: 12px;
        }
        }
    .container{
        width: 100%;
        min-width: 0;
        align-items: flex-start;
  
        p{
            flex: 1 1 auto;
            min-width: 0;
            font-weight: Regular;
            font-size: 18px;
            line-height: 1.45;
            margin: 0;
            overflow-wrap: anywhere;

            @include mobile{
                font-size: 13px;
                margin-top: 0;
            }
        }
    }
    .title_catalog_color {
        color: var(--accent-color);
    }
    
    
    .title_catalog {
        flex: 1 1 50%;
        min-width: 0;
        display: flex;
        flex-direction: column;
        padding: 5% 5%;
        justify-content: center;
        gap: clamp(18px, 2vw, 32px);
        @include laptop{
           align-items: center;
           width: 100%;
           padding: 32px 0 0;
        }

        @include mobile{
           padding-top: 24px;
        }
    }
    .one_title_catalog {
        width: 100%;
        max-width: 83%;

        @include laptop{
            max-width: 100%;
            text-align: center;
        }

        h2{
            font-weight: SemiBold;
            font-size: 26px;
            line-height: 1.3;
            margin: 0;
            overflow-wrap: anywhere;

            @include mobile{
                font-size: 18px;
                line-height: 1.35;
            }
        }
    }
}
</style>
