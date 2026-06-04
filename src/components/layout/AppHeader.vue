<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';
import user from '@/components/header/user.vue'

</script>

<template>
  <div class="header">
    <Logo />
    <Emblem />
    <div>
      <span>Производитель турецкого трикотажного полотна</span>
    </div>
    <user />
  </div>
</template>

<style lang="scss">
.header{
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 80px;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
}
</style>