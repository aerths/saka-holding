<script setup lang="ts">
import { ref } from 'vue';
import caretRightIcon from '@/assets/icons/CaretRight.svg?url';

const selectedQuality = ref('');

const qualities = [
    'Кулирная гладь',
    'Рибана',
    'Пике',
    'Интерлок',
    'Футер 2-х нитка',
    'Футер 3-х нитка',
    'Кашкорсе к 2х нитке',
    'Кашкорсе к 3х нитке',
    'Double Face',
];
</script>
<template>
    <div class="quality">
        <div class="TextCon">
            <h3>Качество</h3>
            <img :src="caretRightIcon" alt="">
        </div>
            <label
                v-for="qualityItem in qualities"
                :key="qualityItem"
                class="container"
            >
                <span>{{ qualityItem }}</span>
                <input
                    v-model="selectedQuality"
                    class="quality-radio"
                    type="radio"
                    name="quality"
                    :value="qualityItem"
                >
                <span class="radio-view"></span>
            </label>
    </div>    
    
</template>
<style setup lang="scss">
    .quality{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 352px;
        padding-top:16px;
        .TextCon{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 20px;
            margin-bottom: 12px;
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
            justify-content: center;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding-left: 20px;
            padding-right: 20px;
            padding-top:10px ;
            max-height: 30px;
            cursor: pointer;
 
            span{
                color: var(--text-color);
                font-size: 12px;
                font-weight: 500;
            }
        }
        .quality-radio{
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
        }
        .radio-view{
            position: relative;
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            background-color: var(--card-bg-color);
            border: 1px solid var(--muted-text-color);
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .quality-radio:checked + .radio-view{
            border-color: var(--accent-color);
            box-shadow: inset 0 0 0 5px var(--card-bg-color);
            background-color: var(--accent-color);
        }
        .quality-radio:focus-visible + .radio-view{
            box-shadow: 0 0 0 3px var(--accent-color);
        }
    
    }
</style>
