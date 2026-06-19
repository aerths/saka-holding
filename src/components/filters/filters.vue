<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import range from '@/components/filters/range.vue';
import type from '@/components/filters/type.vue';
import colors from '@/components/filters/colors.vue';
import colors2 from '@/components/filters/colors2.vue';
import quality from '@/components/filters/quality.vue';
import closeIcon from '@/assets/icons/X.svg?url';
import funnelIcon from '@/assets/icons/filters/Funnel.svg?url';

const isModalOpen = ref(false);

const closeModal = () => {
    isModalOpen.value = false;
};

watch(isModalOpen, (isOpen) => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
});

onBeforeUnmount(() => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
    }
});
</script>

<template>
    <div class="filters-root">
        <button class="filters-trigger" type="button" @click="isModalOpen = true">
            <img :src="funnelIcon" alt="">
            <span>Фильтры</span>
            <span class="push">3</span>
        </button>

        <div class="filters">
            <div class="TextCon">
                <div class="Con">
                    <h2>Фильтры</h2>
                    <div class="push">3</div>
                </div>
                <div class="Con">
                    <a>СБРОСИТЬ</a>
                    <img :src="closeIcon" alt="">
                </div>
            </div>
            <range />
            <type />
            <quality />
            <colors />
            <colors2 />
        </div>

        <Teleport to="body">
            <div v-if="isModalOpen" class="filters-modal" @click.self="closeModal">
                <div class="filters filters--modal" role="dialog" aria-modal="true" aria-label="Фильтры">
                    <div class="TextCon">
                        <div class="Con">
                            <h2>Фильтры</h2>
                            <div class="push">3</div>
                        </div>
                        <button class="filters-close" type="button" aria-label="Закрыть фильтры" @click="closeModal">
                            <span>СБРОСИТЬ</span>
                            <img :src="closeIcon" alt="">
                        </button>
                    </div>
                    <range />
                    <type />
                    <quality />
                    <colors />
                    <colors2 />
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style setup lang="scss">
    .filters-root{
        width: 260px;
        flex: 0 0 260px;

        @include laptop{
            width: 100%;
            flex: 0 0 auto;
            display: flex;
            justify-content: flex-end;
        }

        @include mobile{
            justify-content: flex-start;
        }
    }

    .filters-trigger{
        display: none;
        align-items: center;
        gap: 6px;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;

        img{
            width: 16px;
            height: 16px;
        }

        .push{
            display: none;
        }

        @include laptop{
            display: inline-flex;
        }
    }

    .filters{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: var(--card-bg-color);
        width: 260px;
        padding: 14px;
        border-radius: 16px;

        @include laptop{
            display: none;
        }

        .TextCon{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .Con{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                text-align: center;
                h2{
                    font-size: 14px;
                    font-weight: 700;
                }
                a{
                    font-size: 10px;
                    font-weight: 500;
                    color: var(--muted-text-color);
                }
            }
        }

        .filters-close{
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 0;
            border: 0;
            background: transparent;
            cursor: pointer;

            span{
                font-size: 10px;
                font-weight: 500;
                color: var(--muted-text-color);
            }
        }

        .push{
            background-color: var(--accent-color);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            font-size: 12px;
            color: #FFF;
            font-weight: bold;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @include laptop{
                display: none;
            }
            @include mobile{
                display: none;
            }
        }
    }

    .filters-modal{
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background-color: rgba(25, 36, 47, 0.84);

        @include laptop{
            display: flex;
        }

        @include mobile{
            padding: 16px;
        }

        .filters--modal{
            display: flex;
            width: min(100%, 460px);
            max-height: calc(100vh - 48px);
            overflow-y: auto;
            padding: 28px 40px;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);

            @include mobile{
                width: min(100%, 300px);
                max-height: calc(100vh - 32px);
                padding: 22px 18px;
            }

            .range,
            .type,
            .quality,
            .colors,
            .colors2{
                max-width: none;
            }

        }
    }
</style>
