<script setup lang="ts">
import caretRightIcon from '@/assets/icons/CaretRight.svg?url';
</script>
<template>
    <div class="type">
        <div class="TextCon">
            <h3>Тип полотна</h3>
            <img :src="caretRightIcon" alt="">
        </div>
    </div>    
    
</template>
<style setup lang="scss">
    .type{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 50px;
        padding-top:16px;
        .TextCon{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 20px;
            margin-bottom: 12px;
            img{
                cursor: pointer;
                transform: rotate(270deg);
            }
        }
        h3{
            margin: 0;
            font-weight: Medium;
            font-size: 12px;
        }
        .container{
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 9px;
            justify-content: center;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding-left: 20px;
            padding-right: 20px;
            padding-top:10px ;
            max-height: 30px;
 
            h4{
                color: black;
                font-size: 12px;
                font-weight: 500;
            }
        }
        .color{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            background-color: #FFF;
            
            
        }
    
    }
</style>
