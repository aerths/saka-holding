<template>
    <div class="bonds">
        
        <button class="BB">
            <a>АКЦИИ</a>
        </button> 
        
        <div class="container">
            <img src="../../assets/icons/bonds/Purple-ellipse.png" width="24px" height="24px">
            <h4>Кулинарная гладь</h4>
        </div>

        

        <div class="container">
            <img src="../../assets/icons/bonds/Grey-ellipse.png" width="24px" height="24px">
            <h4>Футер</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Brown-ellipse.png" width="24px" height="24px">
            <h4>Кулинарная гладь</h4>
        </div>
        <div class="container">
            <img src="../../assets/icons/bonds/Orange-ellipse.png" width="24px" height="24px">
            <h4>Пике</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Pink-ellipse.png" width="24px" height="24px">
            <h4>Интерлок</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Light-green-ellipse.png" width="24px" height="24px">
            <h4>Капитоний</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Dark-blue-ellipse.png" width="24px" height="24px">
            <h4>Велюр</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Dark-purple-ellipse.png" width="24px" height="24px">
            <h4>Селаник</h4>
        </div>

        <div class="container">
            <img src="../../assets/icons/bonds/Biege-ellipse.png" width="24px" height="24px">
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
        padding: 0px 85px;
        justify-content: space-between;
        height: 50px;
        .container{
            max-height: 100%;
            gap: 6px;
            max-width:150px;
        }

    
        
    .BB{
            border: none;
            padding: 12px 18px;
            background-color: var(--accent-color);
            
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%);
            width: 100%;
            height: 100%;
            max-width: 140px;
    }
        
    }
    
    
    h4{
        color: #FFF;
        font-size: 10px;
        
    }
</style>