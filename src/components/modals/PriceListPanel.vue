<script setup lang="ts">
import closeIcon from '@/assets/icons/X.svg?url';
import womanImage from '@/assets/images/large_images/woomen-from-price-list.png';
import Input from '@/components/footer/input.vue';

defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits<{
    close: []
}>();
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="price-list-panel" @click.self="emit('close')">
            <div class="price-list-panel__dialog" role="dialog" aria-modal="true" aria-label="Заказать прайс-лист">
                <button class="price-list-panel__close" type="button" aria-label="Закрыть" @click="emit('close')">
                    <img :src="closeIcon" alt="">
                </button>

                <div class="price-list-panel__content">
                    <div class="price-list-panel__form-side">
                        <h2>Заказать прайс-лист и каталог</h2>
                        <p>Оставьте заявку и получите образцы</p>

                        <form class="price-list-panel__form" @submit.prevent>
                            <Input theme="default" text="Имя" input-type="text" />
                            <Input theme="default" text="E-Mail" input-type="email" />
                            <Input theme="default" text="+7 (___) ___-__-__" input-type="tel" />
                            <Input theme="default" text="Адрес доставки" input-type="text" />

                            <button class="price-list-panel__submit" type="submit">Оставить заявку</button>
                        </form>

                        <span class="price-list-panel__caption">
                            Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
                        </span>
                    </div>

                    <div class="price-list-panel__image">
                        <img :src="womanImage" alt="">
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
.price-list-panel{
    position: fixed;
    inset: 0;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background-color: rgba(75, 86, 96, 0.7);

    @include mobile{
        padding: 16px;
    }
}

.price-list-panel__dialog{
    position: relative;
    width: min(100%, 970px);
    border: 5px solid #1E9BFF;
    border-radius: 14px;
    background-color: #fff;
    color: #19242F;
    overflow: hidden;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

    @include laptop{
        width: min(100%, 430px);
    }

    @include mobile{
        width: min(100%, 320px);
    }
}

.price-list-panel__close{
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    display: flex;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        opacity: 0.45;
    }
}

.price-list-panel__content{
    display: flex;
    min-height: 475px;

    @include laptop{
        min-height: 0;
    }

    @include mobile{
        min-height: 0;
    }
}

.price-list-panel__form-side{
    flex: 0 0 46%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 36px;

    h2{
        margin: 0 0 12px;
        font-size: 25px;
        line-height: 1.2;
        font-weight: 700;
    }

    p{
        margin: 0 0 28px;
        color: #858A8F;
        font-size: 13px;
    }

    @include laptop{
        flex-basis: 100%;
        padding: 42px 28px 34px;
    }

    @include mobile{
        padding: 38px 20px 26px;

        h2{
            font-size: 20px;
        }

        p{
            margin-bottom: 20px;
            font-size: 12px;
        }
    }
}

.price-list-panel__form{
    display: flex;
    flex-direction: column;
    gap: 11px;

    .Email,
    .inp{
        max-width: none;
        width: 100%;
    }

    .Email .inp{
        height: 53px;
        padding: 0 22px;
        border-radius: 12px;
        background-color: #F8F8F8;
        color: #19242F;
    }

    .Email input::placeholder{
        color: #B7BDC3;
        font-size: 13px;
    }
}

.price-list-panel__submit{
    width: 100%;
    height: 55px;
    margin-top: 4px;
    border: 0;
    border-radius: 999px;
    background-color: var(--accent-color);
    color: #19242F;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
}

.price-list-panel__caption{
    margin-top: 18px;
    color: #AEB5BC;
    font-size: 9px;
    line-height: 1.35;
}

.price-list-panel__image{
    flex: 1 1 auto;
    min-width: 0;

    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @include mobile{
        display: none;
    }

    @include laptop{
        display: none;
    }
}
</style>
