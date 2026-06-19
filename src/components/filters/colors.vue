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
    { name: 'Оранжевый', value: '#FC8B23' },
    { name: 'Серый', value: '#C8C8C8' },
    { name: 'Бежевый', value: '#DBC08D' },
    { name: 'Белый', value: '#FFFFFF' },
    { name: 'Песочный', value: '#BFA470' },
];
</script>
<template>
    <div class="colors">
        <div class="TextCon">
            <h3>Цвет</h3>
            <img :src="caretRightIcon" alt="">
        </div>
        
        <div class="container">
            <label
                v-for="color in colors"
                :key="`${color.name}-${color.value}`"
                class="color-option"
                :title="color.name"
            >
                <input
                    v-model="selectedColor"
                    class="color-radio"
                    type="radio"
                    name="catalog-color-grid"
                    :value="color.name"
                >
                <span class="color" :style="{ backgroundColor: color.value }"></span>
            </label>
        </div>
         
    </div>    
</template>
<style setup lang="scss">
    .colors{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        min-height: 120px;
        padding: 16px 20px 20px;
        .TextCon{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
            display: grid;
            grid-template-columns: repeat(auto-fill, 20px);
            gap: 14px;
            justify-content: start;
            padding: 16px 0 0;
        }
        .color{
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .color-option{
            position: relative;
            display: block;
            width: 20px;
            height: 20px;
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
