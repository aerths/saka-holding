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
                <Input />
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
        height: 100%;
        
        .CallContainer{
            align-self: flex-end;
        }
        .container{
            width: 100%;
            height: 100%;
            justify-content: space-between;
        }
    }
    
        
</style>