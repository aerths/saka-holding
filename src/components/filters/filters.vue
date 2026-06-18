<script setup lang="ts">
import range from '@/components/filters/range.vue';
import type from '@/components/filters/type.vue';
import colors from '@/components/filters/colors.vue';
import colors2 from '@/components/filters/colors2.vue';
import quality from '@/components/filters/quality.vue';
import closeIcon from '@/assets/icons/X.svg?url';
</script>

<template>
    <div class="filters">
        <div class="TextCon">
            <div class="Con">
                <h2>Фильтры</h2>
                <div class="push">3</div>
            </div>
            <div class="Con">
                <a>СБРОСИТЬ</a>
                <img :src="closeIcon" alt="">
            </div>
        </div>
        <range />
        <type />
        <quality />
        <colors />
        <colors2 />
    </div>
</template>

<style setup lang="scss">
    .filters{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #FFF;
        .TextCon{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .Con{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                text-align: center;
                h2{
                    font-weight: 14px;
                    font-weight: bold;
                }
                a{
                    font-size: 10px;
                    font-weight: medium;
                    color: rgba(0, 0, 0, 0.514);
                }
            }
        }
        .push{
            background-color: var(--accent-color);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            font-size: 12px;
            color: #FFF;
            font-weight: bold;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>
