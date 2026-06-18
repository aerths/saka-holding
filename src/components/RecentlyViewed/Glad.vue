
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
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 260px;
        min-width: 0;
        height: auto;
        min-height: 360px;
        
        border-radius: 16px;

        > img{
            display: block;
            width: 100%;
            max-width: 260px;
            height: auto;
        }
        
        .BT{
            width: 80%;
            margin-bottom: 11px;
        }
        .TextCon{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 22px 10% 11px;
            width: 100%;
            text-align: center;
            h2{
            margin: 6px;
            font-size: clamp(18px, 1.5vw, 22px);
            font-weight: SemiBold;
            }
            h3{
            
            margin: 6px;
            font-size: clamp(15px, 1.25vw, 18px);
            font-weight: SemiBold;
            }
            a{
                font-size: clamp(10px, 1vw, 12px);
                font-weight: Medium;
                color: #19242f7e;
                align-self: last baseline;
                margin-left: 8%;
                margin-bottom: 5%
            }
        }
        
        &--grey{
            background-color: var(--bg-gray-color);
            
        }
    }
    
</style>
