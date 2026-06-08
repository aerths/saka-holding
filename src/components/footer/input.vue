<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
  text: string
  theme: 'default' | 'WB' 
}>()
</script>

<template>
    <div class="InputBox">
        
        <div class="Email">
            <input class="inp" :class="`inp--${theme}`" type="email" id="email" :placeholder="`${text}`" required>
            <Button v-if="theme === 'WB'" theme="default" text="Отправить"/>
        </div>
    </div>

</template>



<style setup lang="scss">
    .ImputBox{
        
        h2{
            font-weight: SemiBold;
            font-size: 16px;
            }}
        .Email{
       
            .inp{
                height: 59px;
                background-color: var(--second-main-color);
                border: none;
                padding: 0px 40px;
                &--default {
                border-radius: 16px;
                max-width: 237px;
                }
                &--WB {
                width: 440px;
                border-radius: 50px;
                }
                
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