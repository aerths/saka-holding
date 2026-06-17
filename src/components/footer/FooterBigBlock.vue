<script setup lang="ts">
import Input from '@/components/footer/input.vue';
import call from '@/components/header/call.vue';
defineProps<{
    
}>()
</script>

<template>
    <div class="FooterBigBlock">
        <div class="container">
            <div class="InputContainer">
                <h2>Следите за новостями</h2>
                <Input theme="WB" text="Ваш E-mail"/>
            </div>
            <div class="CallContainer">
                <call />
            </div>
        </div>
    </div>
</template>



<style lang="scss">
    .FooterBigBlock{
        width: 100%;
        max-height: 250px;
        max-width: 500px;
        @include laptop{
            max-width: 100%;
        }
        .InputContainer{
            width: 100%;
        }
        .CallContainer{
            align-self: flex-end;
            @include laptop{
                align-self: self-start;
                padding-top: 20px;
            }
            @include mobile{
                align-self: self-start;
                padding-top: 20px;
            }
        }
        .container{
            width: 100%;
            height: 100%;
            justify-content: space-between;
        }
    }
    
        
</style>