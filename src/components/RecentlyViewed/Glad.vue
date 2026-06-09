
<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
    price: string
    image: string
    size: string
    
}>()

</script>

<template>
<div class="Glad">
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
        max-width: 260px;
        max-height: 436px;
        
        border-radius: 16px;
        
        .BT{
            width: 80%;
            margin-bottom: 11px;
        }
        .TextCon{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 22px 10% 11px;
            h2{
            margin: 6px;
            font-size: 22px;
            font-weight: SemiBold;
            }
            h3{
            
            margin: 6px;
            font-size: 18px;
            font-weight: SemiBold;
            }
            a{
                font-size: 12px;
                font-weight: Medium;
                color: #19242f7e;
                align-self: last baseline;
                margin-left: 8%;
                margin-bottom: 5%
            }
        }
        
    }
</style>