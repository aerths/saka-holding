<script setup lang="ts">
</script>
<template>
    <div class="colors">
        <div class="TextCon">
            <h3>Цвет</h3>
            <img src="../../assets/icons/CaretRight.svg">
        </div>
        
        <div class="container">
            <div class="color" id="a"></div>
            <div class="color" id="b"></div>
            <div class="color" id="c"></div>
            <div class="color" id="d"></div>
            <div class="color" id="e"></div>
            <div class="color" id="f"></div>
            <div class="color" id="g"></div>
            <div class="color" id="h"></div>
            <div class="color" id="i"></div>
            <div class="color" id="j"></div>
            <div class="color" id="k"></div>
            <div class="color" id="l"></div>
            <div class="color" id="m"></div>
            <div class="color" id="n"></div>
            <div class="color" id="o"></div>
            <div class="color" id="p"></div>
        </div>
         
    </div>    
</template>
<style setup lang="scss">
    .colors{
        background-color: var(--bg-gray-color);
        border-radius: 16px;
        width: 100%;
        max-width: 260px;
        height: 120px;
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
            flex-wrap: wrap;
            gap: 9px;
            justify-content: center;
            padding: 10px 14px 0px;
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