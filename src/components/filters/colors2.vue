<script setup lang="ts">
import { ref } from 'vue';
import caretRightIcon from '@/assets/icons/CaretRight.svg?url';

const selectedColor = ref('');

const colors = [
    { name: 'Желтый', value: '#F5DC41' },
    { name: 'Темно-зеленый', value: '#007C7A' },
    { name: 'Синий', value: '#263669' },
    { name: 'Темно-голубой', value: '#4A7AB8' },
    { name: 'Красно-пурпурно-бордовый', value: '#B2092C' },
    { name: 'Нежненький', value: '#B5A0C9' },
];
</script>
<template>
    <div class="colors2">
        <div class="TextCon">
            <h3>Цвет</h3>
            <img :src="caretRightIcon" alt="">
        </div>
            <label
                v-for="color in colors"
                :key="`${color.name}-${color.value}`"
                class="container"
            >
                <input
                    v-model="selectedColor"
                    class="color-radio"
                    type="radio"
                    name="catalog-color-list"
                    :value="color.name"
                >
                <span class="color" :style="{ backgroundColor: color.value }"></span>
                <span>{{ color.name }}</span>
            </label>
    </div>    
    
</template>
<style setup lang="scss">
    .colors2{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 230px;
        padding-top:16px;
        .TextCon{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 20px;
            img{
                cursor: pointer;
            }
        }
        h3{
            margin: 0;
            font-weight: Medium;
            font-size: 12px;
        }
        .container{
            position: relative;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 9px;
            
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
            padding-top:10px ;
            max-height: 30px;
            cursor: pointer;
            
 
            span{
                color: var(--text-color);
                font-size: 12px;
                font-weight: 500;
            }
        }
        .color{
            display: block;
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .color-radio{
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
        }
        .color-radio:checked + .color{
            box-shadow: 0 0 0 3px var(--accent-color);
            transform: scale(0.9);
        }
        .color-radio:focus-visible + .color{
            box-shadow: 0 0 0 3px var(--accent-color);
        }

    }
</style>
