<script setup lang="ts">
</script>
<template>
    <div class="colors2">
        <div class="TextCon">
            <h3>Цвет</h3>
            <img src="../../assets/icons/CaretRight.svg">
        </div>
        
        
            <div class="container">
                <div class="color" id="a"></div>
                <h4>Желтый</h4>
            </div>
            <div class="container">
                <div class="color" id="b"></div>
                <h4>Темно-зеленый</h4>
            </div>
            <div class="container">
                <div class="color" id="c"></div>
                <h4>Синий</h4>
            </div>
            <div class="container">
                <div class="color" id="d"></div>
                <h4>Темно-голубой</h4>
            </div>
            <div class="container">
                <div class="color" id="e"></div>
                <h4>Красно-пурпурно-бордовый</h4>
            </div>
            <div class="container">
                <div class="color" id="f"></div>
                <h4>Нежненький</h4>
            </div>
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
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 9px;
            
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
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
            
            
        }
    
    #a{
        background-color: #F5DC41;
        }
    #b{
        background-color: #007C7A;
        }
    #c{
        background-color: #263669;
        }
    #d{
        background-color: #4A7AB8;
        }
    #e{
        background-color: #B2092C;
        }
    #f{
        background-color: #B5A0C9;
        }
    #g{
        background-color: #FC8B23;
        }
    #h{
        background-color: #C8C8C8;
        }
    #i{
        background-color: #DBC08D;
        }
    #j{
        background-color: #FFFFFF;
        }
    #k{
        background-color: #B5A0C9;
        }
    #l{
        background-color: #FC8B23;
        }
    #m{
        background-color: #BFA470;
        }
    #n{
        background-color: #F5DC41;
        }
    #o{
        background-color: #007C7A;
        }
    #p{
        background-color: #FFFFFF;
        }

    }
</style>