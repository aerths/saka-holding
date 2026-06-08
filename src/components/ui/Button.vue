<script setup lang="ts">
defineProps<{
  text:string
  theme: 'default' | 'icon' | 'square'
}>()
</script>

<template>
  <button class="button" :class="`button--${theme}`">
    <span>{{text}}</span>
    <img v-if="theme === 'icon'" src="../../assets/icons/ArrowRight.svg">
  </button>
</template>

<style setup lang="scss">
  
  .button{
    background-color: var(--accent-color);
    box-sizing: border-box;
    width: 182px;
    max-height: 55px;
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

    &--square {
      border-radius: 4px;
      max-height: 28px;
      height: 28px;
    }
    &--icon{
      min-width: 285px;
      justify-content: space-between;
    }
  }
</style>