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
    #BT{
        max-height: 28px;
        position: absolute;
        bottom: 20%;
        left: 10%;
    }
  }
</style>