<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>

<template>
    <div class="InputBox">
        <h2>Следите за новостями</h2>
        <div class="Email">
            <input type="email" id="email" placeholder="Ваш E-mail" required>
            <Button theme="default" text="Отправить"/>
        </div>
    </div>

</template>



<style lang="scss">
    .ImputBox{
        h2{
            font-weight: SemiBold;
            font-size: 16px;
            }}
        .Email{
       
            input{
                border-radius: 50px;
                width: 400px;
                height: 59px;
                background-color: var(--second-main-color);
                border: none;
                padding: 0px 40px;
            }
            input::placeholder{
                color: white;
                font-size: 14px;
                font-weight: regular;
            }
        
            position: relative;
            .button{
                position: absolute;
                top:0px;
                right:0px;
            }
        }
    
    
        
</style>