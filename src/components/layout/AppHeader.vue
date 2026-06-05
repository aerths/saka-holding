<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';
import user from '@/components/header/user.vue';
import call from '@/components/header/call.vue';
import Navigator from '@/components/header/Navigator.vue';
import Lang from '@/components/header/Lang.vue';
</script>

<template>
  <div class="header">
    <div class="container">
      <Logo />
      <Emblem />
      <div class="text_header">
        <span>Производитель турецкого</span>
        <span>трикотажного полотна</span>
      </div>
    </div>
    <div class="container">
      <user />
      <call />
      <Lang />
    </div>
  </div>
  <div class="navWrapper">
    <Navigator />
  </div>
</template>

<style lang="scss">
.header{
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 0px;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
  justify-content: space-between;
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 80px;
    gap: 8px
  }
}

.navWrapper {
  display: flex;
  width: 100%;
}

.text_header {
  display: flex;
  flex-direction: column;
}
</style>