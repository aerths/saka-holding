<script setup lang="ts">
</script>
<template>
    <div class="range">
        <div class="value">2000₽</div>
        <div class="slider-line">
        <span>0₽</span>
        <span>100 000₽</span>
        </div>
        <input type="range" min="0" max="100000" value="2000">
    </div>    
    
</template>
<style setup lang="scss">
    .range{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 70px;
        padding-top:16px;
        .value{
            text-align: center;

        }
        .slider-line{
            display: flex;
            justify-content: space-between;
        }
        input{
            appearance: none;
            outline: none;
            border-radius: 50px;
            background: var(--accent-color);
        }
        
    
    }
</style>