<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
  text: string
  theme: 'default' | 'WB' 
}>()
</script>

<template>
  
        <div class="Email">
            <input class="inp" :class="`inp--${theme}`" type="email" id="email" :placeholder="`${text}`" required>
            <Button v-if="theme === 'WB'" theme="default" text="Отправить"/>
        </div>


</template>



<style setup lang="scss">

        .Email{
            width: 100%;
            .inp{
                height: 59px;
                background-color: var(--second-main-color);
                border: none;
                padding: 0px 40px;
                color: var(--bg-color);
               &--default {
               border-radius: 16px;
               max-width: 237px;
               width: 100%;
                   @include laptop{
                      max-width: 500px;
                       width: 100%;
                   }                
               }
              &--WB {
               max-width: 440px;
               width: 100%;
               border-radius: 50px;
                   @include laptop{
                   min-width: 300px;
                       max-width: 100%;
                   }
                 }
                
            }
            input::placeholder{
                color: var(--bg-color);
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

        :root[data-theme='dark'] .Email {
            .inp,
            input::placeholder {
                color: var(--text-color);
            }
        }








    // .ImputBox{
    //     width: 100%;
    //     .Email{
    //     h2{
    //         font-weight: SemiBold;
    //         font-size: 16px;
    //     }
    //     .inp{
    //         height: 59px;
    //         background-color: var(--second-main-color);
    //         border: none;
    //         padding: 0px 40px;

    //                 &--default {
    //                 border-radius: 16px;
    //                 max-width: 237px;
    //                 width: 100%;
    //                     @include laptop{
    //                         max-width: 500px;
    //                         width: 100%;
    //                     }                
    //                 }
    //                 &--WB {
    //                 max-width: 440px;
    //                 width: 100%;
    //                 border-radius: 50px;
    //                     @include laptop{
    //                         min-width: 300px;
    //                         max-width: 100%;
    //                     }
    //                 }
            
    //     }
    //             input::placeholder{
    //                 color: white;
    //                 font-size: 14px;
    //                 font-weight: regular;
    //                 position: relative;
    //             }
        
                
    //             .button{
    //                 position: absolute;
    //                 top:0px;
    //                 right:0px;
    //                 }
    // }
            
        
    // }      
    
    
        
</style>
