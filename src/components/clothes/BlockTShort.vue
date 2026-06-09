<script setup lang="ts">
import tshort from '@/components/clothes/tshort.vue';
import blue from '@/assets/icons/colorclothes/blue.png';
import grey from '@/assets/icons/colorclothes/grey.png';
import black from '@/assets/icons/colorclothes/black.png';
import green from '@/assets/icons/colorclothes/green.png';
import pink from '@/assets/icons/colorclothes/pink.png';
import white from '@/assets/icons/colorclothes/white.png';
import yellow from '@/assets/icons/colorclothes/yellow.png';
import red from '@/assets/icons/colorclothes/red.png';
import orange from '@/assets/icons/colorclothes/orange.png';
import lightblue from '@/assets/icons/colorclothes/lightblue.png';
import lightlightblue from '@/assets/icons/colorclothes/lightlightblue.png';
</script>

<template>
    <div class="full_block_clothes">
        <div class="full_error_clothes">
            <div class="text_block_clothes">
                <h2>Актуальная палитра “Saka Tekstil” 
                из 45+ цветов - поможет решить любые задачи, стоящие перед вами
                </h2>
            </div>
            <div class="error_clothes">
                <img src="../../assets/icons/colorclothes/Warning.png" alt="">
                <div class="error_text_clothes">
                    ВНИМАНИЕ! Цветопередача на вашем мониторе может значительно отличаться от оригинального цвета
                </div>
            </div>
        </div>
        <div class="part_block_clothes">
            <tshort 
            :image="blue"
            text="A-104 Dark Grey"
            />
            <tshort 
            :image="grey"
            text="A-101 Grey"
            />
            <tshort
            :image="white"
            text="A-115 White"
            />
            <tshort
            :image="black"
            text="A-123 Black"
            />
            <tshort 
            :image="blue"
            text="A-104 Dark Grey"
            />
            <tshort 
            :image="lightblue"
            text="A-107 Blue"
            />
        </div>
        <div class="part_block_clothes">
            <tshort 
            :image="lightlightblue"
            text="A-118 Light Blue"
            />
            <tshort
            :image="orange"
            text="A-135 Orange"
            />
            <tshort 
            :image="green"
            text="A-136 Green"
            />
            <tshort 
            :image="yellow"
            text="A-125 Yellow"
            />
            <tshort 
            :image="pink"
            text="A-201 Purple"
            />
            <tshort 
            :image="red"
            text="A-100 Red"
            />
        </div>

        <div class="full_error_clothes">
            <div class="text_block_clothes">
                <h2>Сезонная палитра
                </h2>
            </div>
        </div>
        <div class="part_block_clothes">
            <tshort 
            :image="blue"
            text="A-104 Dark Grey"
            />
            <tshort 
            :image="grey"
            text="A-101 Grey"
            />
            <tshort
            :image="white"
            text="A-115 White"
            />
            <tshort
            :image="black"
            text="A-123 Black"
            />
            <tshort 
            :image="blue"
            text="A-104 Dark Grey"
            />
            <tshort 
            :image="lightblue"
            text="A-107 Blue"
            />
        </div>
        <div class="part_block_clothes">
            <tshort 
            :image="lightlightblue"
            text="A-118 Light Blue"
            />
            <tshort
            :image="orange"
            text="A-135 Orange"
            />
            <tshort 
            :image="green"
            text="A-136 Green"
            />
            <tshort 
            :image="yellow"
            text="A-125 Yellow"
            />
            <tshort 
            :image="pink"
            text="A-201 Purple"
            />
            <tshort 
            :image="red"
            text="A-100 Red"
            />
        </div>
    </div>
</template>

<style setup lang="scss">
    .full_block_clothes {
        display: flex;
        flex-direction: column;
        gap: 67px;
    }

    .part_block_clothes {
        display: flex;
        flex-direction: row;
        gap: 90px;
    }

    .full_error_clothes {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }

    .error_clothes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
</style>