<script setup lang="ts">
import { onMounted, ref } from 'vue';

type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>('light');

const applyTheme = (theme: Theme) => {
    currentTheme.value = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
};

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
});
</script>

<template>
    <div class="lang" aria-label="Переключение темы">
        <button
            class="theme-option"
            :class="{ 'theme-option--active': currentTheme === 'light' }"
            type="button"
            :aria-pressed="currentTheme === 'light'"
            @click="applyTheme('light')"
        >
            LIGHT
        </button>
        <span>/</span>
        <button
            class="theme-option"
            :class="{ 'theme-option--active': currentTheme === 'dark' }"
            type="button"
            :aria-pressed="currentTheme === 'dark'"
            @click="applyTheme('dark')"
        >
            DARK
        </button>
    </div>
</template>

<style lang ="scss">
    .lang{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        font-size: 12px;

        span{
            color: var(--bg-duo-color);
        }

        .theme-option{
            padding: 0;
            border: 0;
            background: transparent;
            color: var(--bg-duo-color);
            font-size: inherit;
            font-weight: 500;
            cursor: pointer;

            &--active{
                color: #FFF;
            }
        }
    }
    
</style>
