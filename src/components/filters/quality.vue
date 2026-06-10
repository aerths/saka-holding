<script setup lang="ts">
</script>
<template>
    <div class="quality">
        <div class="TextCon">
            <h3>Цвет</h3>
            <img src="../../assets/icons/CaretRight.svg">
        </div>
        
        
            <div class="container">
                <h4>Кулирная гладь</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Рибана</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Пике</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Интерлок</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Футер 2-х нитка</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Футер 3-х нитка</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Кашкорсе к 2х нитке</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Кашкорсе к 3х нитке</h4>
                <div class="color"></div>
            </div>
            <div class="container">
                <h4>Double Face</h4>
                <div class="color"></div>
            </div>
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