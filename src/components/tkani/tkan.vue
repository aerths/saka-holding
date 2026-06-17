<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
defineProps<{
    Btext: string
    image: string
}>()
</script>

<template>
<div class="tkan">
    <img :src="image" alt="">
    <Button id="BT" theme="square" :text="Btext" />
</div>
</template>



<style lang="scss">
  .tkan{
    position: relative;
    max-width: 460px;
    height: 210px;
    @include laptop{
      max-width: 380px;
    }
    @include mobile{
      width: 300px;
    }
    img{
      
      object-fit: cover;
      
      border-radius: 16px;
      width: 100%;
      height: 100%;
      
    }
    
    #BT{
        max-height: 28px;
        position: absolute;
        bottom: 20%;
        left: 10%;
    }
  }
</style>