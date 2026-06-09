<script setup lang="ts">
import Input from '@/components/footer/input.vue';
import Button from '@/components/ui/Button.vue';
</script>


<template>
    <div class="form">
        <div class="TextForm">
            <h1>Фабрика «Saka Tekstil» осуществляет прокрас текстиля на заказ на самых выгодных условиях</h1>
            <h2>Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время</h2>
        </div>
        <div class="container">
            <Input theme="default" text="Ваше имя"/>
            <Input theme="default" text="+7 (___) ___-__-__"/>
            <Input theme="default" text="Ваш E-mail"/>
            <Button theme="icon" text="Отправить" />
        </div>
        <a>Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!</a>
    </div>
</template>



<style setup lang="scss">
.form{
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-color);
    
    padding: 50px 60px;
    border-radius: 16px;
    text-align: center;
    justify-content: space-between;
    a{
            font-size: 12px;
            font-weight: Regular;
            color: #ffffff33;
        }
    .container{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .TextForm{
        display: flex;
        flex-direction: column;
        padding: 0px 18%;
        gap: 18px;
        h1{
        font-size: 26px;
        font-weight: SemiBold;
        color: #FFF;
        margin: 0px;
        padding: 0;
        }
        h2{
            font-size: 18px;
            font-weight: Regular;
            color: #FFF;
            margin: 0;
            padding: 0;
        }
        
    }
    
}
</style>