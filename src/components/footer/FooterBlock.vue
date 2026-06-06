<script setup lang="ts">
defineProps<{
    NavText: string
    text1: string
    text2: string
    text3: string
    text4: string
    text5: string
    text6: string
}>()
</script>

<template>
    <div class="FooterBlock">
        <div class="container">
            <h2>
                {{NavText}}
            </h2>
        </div>
        <div class="container">
            <RouterLink class="app-footer__link" to="/">{{text1}}</RouterLink>
            <RouterLink class="app-footer__link" to="/">{{text2}}</RouterLink>
            <RouterLink class="app-footer__link" to="/">{{text3}}</RouterLink>
            <RouterLink class="app-footer__link" to="/">{{text4}}</RouterLink>
            <RouterLink class="app-footer__link" to="/">{{text5}}</RouterLink>
            <RouterLink class="app-footer__link" to="/">{{text6}}</RouterLink>
            
            
        </div>
    </div>
</template>



<style lang="scss">
    .FooterBlock{
        
        color: #FFF; 
        .h2{
            font-weight: SemiBold;
            font-size: 16px;
        }
        font-weight: Regular;
        font-size: 14px;
        .app-footer__link {
            text-decoration: none;
            cursor: pointer;
            color: inherit;
            margin-bottom: 10px;
            
            }
        .container{
            align-items:first baseline ;
        }
        }
        
</style>