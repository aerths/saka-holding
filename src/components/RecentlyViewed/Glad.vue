
<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
    price: string
    image: string
    size: string
    theme: 'grey'
    
}>()

</script>

<template>
<div class="Glad" :class="`Glad--${theme}`">
    <img :src="image" alt="">
    <div class="TextCon">
        <h3>Кулинарная гладь</h3>
        <h2>{{price}}</h2>
        <a>{{size}}</a>

    </div>
    <div class="BT">
        <Button theme="icon" text="Подробнее" />
    </div>
    
</div>
</template>


<style setup lang="scss">
    .Glad{
        background-color: var(--card-bg-color);
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        max-width: 260px;
        min-width: 0;
        min-height: 360px;
        border-radius: 16px;

        > img{
            display: block;
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 16px 16px 0 0;
        }
        
        .BT{
            width: 200px;
            max-width: 80%;
            margin: auto auto 11px;

            .button{
                width: 200px;
                max-width: 100%;
                min-height: 53px;
                max-height: 53px;
                padding: 0 17px;
                font-size: 16px;

                img{
                    width: 16px;
                    height: 16px;
                }
            }
        }
        .TextCon{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            padding: 18px 10% 14px;
            width: 100%;
            text-align: left;
            h2{
                margin: 0;
                font-size: clamp(18px, 1.5vw, 22px);
                font-weight: 600;
                line-height: 1.15;
            }
            h3{
                margin: 0;
                min-height: 38px;
                font-size: clamp(15px, 1.25vw, 18px);
                font-weight: 600;
                line-height: 1.2;
            }
            a{
                font-size: clamp(10px, 1vw, 12px);
                font-weight: 500;
                color: var(--muted-text-color);
                margin: 0;
            }
        }
        
        &--grey{
            background-color: var(--bg-gray-color);
            
        }
    }
    
</style>
