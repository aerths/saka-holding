<script setup lang="ts">
defineProps<{
  text:string
  theme: 'default' | 'icon'
}>()
</script>

<template>
  <button class="button" :class="`button-${{theme}}`">
    <span v-if="theme === 'default'">{{text}}</span>
  </button>
</template>

<style setup lang="scss">
  
  .button{
    background-color: var(--accent-color);
    
    width: 182px;
    height: 55px;
    padding: 30px 17px;
    border-radius: 50px;
    border:none;
    cursor: pointer;
    color: black;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-default {

    }
  }
</style>