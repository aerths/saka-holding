<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/emblem.vue';
import user from '@/components/header/user.vue';
import call from '@/components/header/call.vue';
import Navigator from '@/components/header/Navigator.vue';
import Lang from '@/components/header/Lang.vue';
import Bonds from '@/components/header/Bonds.vue';
import basket from '@/components/header/basket.vue';
import BasketPanel from '@/components/modals/BasketPanel.vue';
import LoginPanel from '@/components/modals/LoginPanel.vue';

const isMenuOpen = ref(false);
const isBasketPanelOpen = ref(false);
const isLoginPanelOpen = ref(false);

const openBasketPanel = () => {
  isBasketPanelOpen.value = true;
  isMenuOpen.value = false;
};

const openLoginPanel = () => {
  isLoginPanelOpen.value = true;
  isMenuOpen.value = false;
};

watch([isMenuOpen, isBasketPanelOpen, isLoginPanelOpen], ([isMenuOpenValue, isBasketPanelOpenValue, isLoginPanelOpenValue]) => {
  document.body.style.overflow = isMenuOpenValue || isBasketPanelOpenValue || isLoginPanelOpenValue ? 'hidden' : '';
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
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
      <basket @click="openBasketPanel" />
      <user @click="openLoginPanel" />
      <call />
      <Lang />
      <button
        class="menu-toggle"
        :class="{ 'menu-toggle--open': isMenuOpen }"
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
  <div id="header-navigation" class="navWrapper" :class="{ 'navWrapper--open': isMenuOpen }" @click.self="isMenuOpen = false">
    <aside class="navWrapper__panel">
      <div class="navWrapper__top">
        <div class="navWrapper__brand">
          <Logo />
          <Emblem />
          <div class="navWrapper__caption">
            <span>Производитель турецкого</span>
            <span>трикотажного полотна</span>
          </div>
        </div>
        <button class="navWrapper__close" type="button" aria-label="Закрыть меню" @click="isMenuOpen = false">
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navWrapper__lang">
        <Lang />
      </div>

      <Navigator />

      <div class="navWrapper__contacts">
        <call />
      </div>

      <div class="navWrapper__actions">
        <basket @click="openBasketPanel" />
        <user @click="openLoginPanel" />
      </div>

      <div class="navWrapper__bonds">
        <Bonds />
      </div>
    </aside>
  </div>
  <div class="bondsWrapper">
    <Bonds />
  </div>
  <BasketPanel :is-open="isBasketPanelOpen" @close="isBasketPanelOpen = false" />
  <LoginPanel :is-open="isLoginPanelOpen" @close="isLoginPanelOpen = false" />
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
      gap: 14px;
    }

    @include mobile {
      gap: 10px;
    }
  }

  .a-text {
    font-weight: light;
    color: #D4D7D9;
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
      transition: transform 0.2s ease, opacity 0.2s ease;
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

  .menu-toggle--open {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  @include laptop {
    .header__actions > :not(.menu-toggle):not(.lang) {
      display: none;
    }
  }

  @include mobile {
    .header__actions > :not(.menu-toggle):not(.lang) {
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

.navWrapper__panel {
  width: 100%;
}

.navWrapper__top,
.navWrapper__lang,
.navWrapper__contacts,
.navWrapper__actions,
.navWrapper__bonds {
  display: none;
}

.navWrapper--open {
  @include laptop {
    display: flex;
  }

  @include mobile {
    display: flex;
  }
}

@include laptop {
  .navWrapper {
    position: fixed;
    inset: 0;
    z-index: 1000;
    align-items: stretch;
    justify-content: flex-end;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(83, 91, 99, 0.86);
  }

  .navWrapper__panel {
    width: 244px;
    min-height: 100vh;
    overflow-y: auto;
    background-color: var(--main-color);
    color: #fff;
  }

  .navWrapper__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    padding: 28px 28px 10px 22px;
  }

  .navWrapper__brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    min-width: 0;
  }

  .navWrapper__brand .logo img {
    height: 36px;
  }

  .navWrapper__brand .icons_logo {
    padding: 0;
    gap: 8px;
  }

  .navWrapper__brand .icons_logo img {
    height: 20px;
  }

  .navWrapper__caption {
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: var(--bg-duo-color);
    font-size: 8px;
    line-height: 1.35;
  }

  .navWrapper__close {
    position: relative;
    flex: 0 0 30px;
    width: 30px;
    height: 30px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
  }

  .navWrapper__close span {
    position: absolute;
    top: 14px;
    left: 2px;
    width: 28px;
    height: 2px;
    background-color: currentColor;
    border-radius: 999px;
  }

  .navWrapper__close span:first-child {
    transform: rotate(45deg);
  }

  .navWrapper__close span:last-child {
    transform: rotate(-45deg);
  }

  .navWrapper__lang {
    display: flex;
    justify-content: flex-end;
    padding: 0 28px 22px;
  }

  .navWrapper__lang .lang {
    font-size: 10px;
  }

  .navWrapper .app-header__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    padding: 0 22px 28px;
    background-color: transparent;
    color: #fff;
  }

  .navWrapper .app-header__link {
    font-size: 14px;
    line-height: 1.2;
  }

  .navWrapper__contacts {
    display: block;
    padding: 0 22px 18px;
  }

  .navWrapper__contacts .call {
    align-items: flex-start;
    padding: 0;
  }

  .navWrapper__contacts .call .phone_number h2 {
    color: #fff;
    font-size: 15px;
  }

  .navWrapper__contacts .call .second_line_text {
    align-self: flex-start;
    color: var(--bg-duo-color);
    font-size: 10px;
    text-decoration: underline;
  }

  .navWrapper__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 22px 30px;
  }

  .navWrapper__actions .basket {
    width: 36px;
    height: 36px;
    background-color: var(--second-main-color);
  }

  .navWrapper__actions .user {
    color: #fff;
    font-size: 12px;
  }

  .navWrapper__bonds {
    display: block;
  }

  .navWrapper__bonds .bonds {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    min-height: 0;
    padding: 0;
    background-color: var(--main-color);
  }

  .navWrapper__bonds .bonds .BB {
    flex: 0 0 auto;
    width: 100%;
    max-width: none;
    height: 36px;
    padding: 0 22px;
    clip-path: none;
    color: var(--main-color);
    text-align: left;
  }

  .navWrapper__bonds .bonds .container {
    max-width: none;
    padding: 12px 22px 0;
    gap: 9px;
  }
}

@include mobile {
  .navWrapper__panel {
    width: min(100%, 244px);
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
