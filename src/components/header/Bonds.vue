<template>
    <div class="bonds">
        
        <button class="BB">
            АКЦИИ
        </button> 
        
        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 58.svg" width="24px" height="24px">
            <h4>Кулинарная гладь</h4>
        </div>

        

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 2.svg" width="24px" height="24px">
            <h4>Футер</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 3.svg" width="24px" height="24px">
            <h4>Кулинарная гладь</h4>
        </div>
        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse4.svg" width="24px" height="24px">
            <h4>Пике</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 5.svg" width="24px" height="24px">
            <h4>Интерлок</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 6.svg" width="24px" height="24px">
            <h4>Капитоний</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 7.svg" width="24px" height="24px">
            <h4>Велюр</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 8.svg" width="24px" height="24px">
            <h4>Селаник</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Ellipse 9.svg" width="24px" height="24px">
            <h4>Вискоза</h4>
        </div>

    </div>
</template>

<script>
</script>

<style lang="scss">
    .bonds{
        display: flex;
        flex-direction: row;
        max-width: 100%;
        background-color: var(--main-color);
        padding: 0px 300px;
        justify-content: space-between;
        height: 50px;
        .container{
            max-height: 100%;
            gap: 6px;
            max-width:150px;
            cursor: pointer;
        }
    .BB{
            border: none;
            padding: 12px 18px;
            background-color: var(--accent-color);
            font-weight: bold;
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%);
            width: 100%;
            height: 100%;
            max-width: 140px;
            text-align: left;
    }
        
    }
    
    
    h4{
        color: #FFF;
        font-size: 10px;
        
    }
</style>