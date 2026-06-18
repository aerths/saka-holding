<script setup lang="ts">
</script>
<template>
    <div class="range">
        <input type="range" min="0" max="100000" value="2000">
        <div class="slider-line">
        <span>0₽</span>
        <span>100 000₽</span>
        </div>
    </div>    
    
</template>
<style setup lang="scss">
    .range{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 70px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        gap: 7px;
        .slider-line{
            display: flex;
            justify-content: space-between;
            span{
                font-size: 10px;
                font-weight: Medium;
                color: var(--muted-text-color);
            }
        }
        input{
            appearance: none;
            outline: none;
            border-radius: 50px;
            background: var(--accent-color);
            height: 3px;
            caret-color: var(--accent-color);
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            background: var(--accent-color); 
            border-radius: 50%;
            cursor: pointer;
}

        
    
    }
</style>
