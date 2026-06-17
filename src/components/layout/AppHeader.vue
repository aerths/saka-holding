<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';
import user from '@/components/header/user.vue';
import call from '@/components/header/call.vue';
import Navigator from '@/components/header/Navigator.vue';
import Lang from '@/components/header/Lang.vue';
import Bonds from '@/components/header/Bonds.vue';
import basket from '@/components/header/basket.vue';

const isMenuOpen = ref(false);
</script>

<template>
  <div class="header">
    <div class="container header__brand">
      <Logo />
      <Emblem />
      <div class="text_header">
        <span class="a-text">Производитель турецкого</span>
        <span class="a-text">трикотажного полотна</span>
      </div>
    </div>
    <div class="container header__actions">
      <basket />
      <user />
      <call />
      <Lang />
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="header-navigation"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  <div id="header-navigation" class="navWrapper" :class="{ 'navWrapper--open': isMenuOpen }">
    <Navigator />
  </div>
  <div class="bondsWrapper">
    <Bonds />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.header {
  display: flex;
  width: 100%;
  padding: 40px clamp(24px, 6vw, 120px);
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background-color: var(--main-color);
  color: #fff;
  box-sizing: border-box;

  @include laptop {
    padding: 20px 32px;
    min-height: 88px;
  }

  @include mobile {
    padding: 18px 16px;
    min-height: 76px;
    gap: 12px;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .header__brand {
    flex: 1 1 auto;
    min-width: 0;
    gap: 18px;

    @include laptop {
      gap: 12px;
    }

    @include mobile {
      gap: 8px;
    }
  }

  .header__actions {
    flex: 0 0 auto;
    gap: 18px;

    @include laptop {
      gap: 0;
    }
  }

  .a-text {
    font-weight: light;
    color: #ffffffd2;
  }

  .text_header {
    display: flex;
    flex-direction: column;
    min-width: 0;

    @include laptop {
      display: none;
    }

    @include mobile {
      display: none;
    }
  }

  .menu-toggle {
    display: none;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: currentColor;
      border-radius: 999px;
    }

    @include laptop {
      display: inline-flex;
    }

    @include mobile {
      display: inline-flex;
      width: 40px;
      height: 40px;
    }
  }

  @include laptop {
    .header__actions > :not(.menu-toggle) {
      display: none;
    }
  }

  @include mobile {
    .header__actions > :not(.menu-toggle) {
      display: none;
    }
  }

  .logo,
  .icons_logo {
    flex-shrink: 1;
    min-width: 0;
  }
}

.navWrapper {
  display: flex;
  width: 100%;

  @include laptop {
    display: none;
  }

  @include mobile {
    display: none;
  }
}

.navWrapper--open {
  @include laptop {
    display: block;
  }

  @include mobile {
    display: block;
  }
}

.bondsWrapper {
  @include laptop {
    display: none;
  }

  @include mobile {
    display: none;
  }
}
</style>
