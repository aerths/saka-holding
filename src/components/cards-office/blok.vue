<script setup lang="ts">
import arrow from '@/components/ui/arrow.vue';
defineProps<{
    NavText: string
    text: string
    data: string
    image: string
}>()
</script>


<template>
    <div class="blok_office">
        <div class="blok_office_img">
            <img :src="image" alt="">
        </div>
        <div class="btn_arrow">
            <arrow />
        </div>
        <div class="blok_office_text">
            <h3>
                {{NavText}}
            </h3>
            <p>
                {{text}}
            </p>
            <p>
                {{data}}
            </p>
        </div>
    </div>
</template>



<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;

.blok_office {
    position: relative;
    width: 100%;
    aspect-ratio: 360 / 460;
    min-height: 360px;
    overflow: hidden;
    border-radius: 16px;
    background-color: var(--second-main-color);
    color: var(--bg-color);
    isolation: isolate;
    max-height: 400px;

    @include laptop {
        min-height: 320px;
        border-radius: 14px;
    }

    @include mobile {
        min-height: 360px;
        border-radius: 12px;
    }
}

.blok_office_img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.blok_office_img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.blok_office_text {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    padding: clamp(120px, 44%, 220px) 24px 22px;
    background: linear-gradient(180deg, rgba(25, 36, 47, 0) 24%, rgba(25, 36, 47, 0.9) 62%, rgba(25, 36, 47, 1) 100%);

    @include laptop {
        gap: 8px;
        padding: clamp(96px, 36%, 160px) 20px 20px;
    }

    @include mobile {
        gap: 6px;
        padding: clamp(112px, 38%, 150px) 16px 16px;
    }
}

.blok_office_text h3 {
    margin: 0;
    max-width: 220px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;

    @include laptop {
        max-width: 190px;
        font-size: 18px;
    }

    @include mobile {
        max-width: 175px;
        font-size: 16px;
    }
}

.blok_office_text p {
    margin: 0;
}

.blok_office_text p:first-of-type {
    max-width: 285px;
    font-size: 14px;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.88);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @include laptop {
        max-width: 100%;
        font-size: 13px;
        line-height: 1.4;
        -webkit-line-clamp: 4;
    }

    @include mobile {
        font-size: 12px;
        -webkit-line-clamp: 4;
    }
}

.blok_office_text p:last-of-type {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.92);

    @include mobile {
        font-size: 11px;
    }
}

.btn_arrow {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    padding: 20px;

    @include laptop {
        padding: 16px;
    }

    @include mobile {
        padding: 12px;
    }
}

.btn_arrow :deep(.arrow) {
    width: 50px;
    height: 50px;

    @include laptop {
        width: 44px;
        height: 44px;
    }

    @include mobile {
        width: 40px;
        height: 40px;
    }
}

.btn_arrow :deep(.arrow img) {
    @include laptop {
        width: 20px;
    }

    @include mobile {
        width: 18px;
    }
}
</style>
