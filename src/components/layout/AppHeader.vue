<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';
import user from '@/components/header/user.vue';
import call from '@/components/header/call.vue';
import Navigator from '@/components/header/Navigator.vue';
import Lang from '@/components/header/Lang.vue';
import Bonds from '@/components/header/Bonds.vue';
import basket from '@/components/header/basket.vue';
</script>

<template>
  <div class="header">
    <div class="container">
      <Logo />
      <Emblem />
      <div class="text_header">
        <span class="a-text">Производитель турецкого</span>
        <span class="a-text">трикотажного полотна</span>
      </div>
    </div>
    <div class="container">
      <basket />
      <user />
      <call />
      <Lang />
    </div>
  </div>
  <div class="navWrapper">
    <Navigator />
  </div>
  <div class="bondsWrapper">
    <Bonds />
  </div>
</template>

<style lang="scss">
.header{
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 300px;
  align-items: center;
  background-color: var(--main-color);
  color: #fff;
  justify-content: space-between;
  box-sizing: border-box;
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .a-text{
    font-weight: Light;
    color: #ffffffd2;
  }
  .navWrapper {
  display: flex;
  width: 100%;
}

.text_header {
  display: flex;
  flex-direction: column;
}
}


</style>