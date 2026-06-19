<script setup lang="ts">
import closeIcon from '@/assets/icons/X.svg?url';
import shoppingCartIcon from '@/assets/icons/ShoppingCart.svg?url';
import gladBlue from '@/assets/images/glad/glad-blue.png';
import Input from '@/components/footer/input.vue';

defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits<{
    close: []
}>();

const basketItems = [
    {
        image: gladBlue,
        title: 'Футер 2-х нитка диагональ',
        size: '3 м',
        price: '450Р',
    },
    {
        image: gladBlue,
        title: 'Футер 2-х нитка диагональ',
        size: '10 м',
        price: '4650Р',
    },
    {
        image: gladBlue,
        title: 'Футер 2-х нитка диагональ',
        size: '1 м',
        price: '305 005Р',
    },
];
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="basket-panel" @click.self="emit('close')">
            <div class="basket-panel__dialog" role="dialog" aria-modal="true" aria-label="Корзина">
                <button class="basket-panel__close" type="button" aria-label="Закрыть" @click="emit('close')">
                    <img :src="closeIcon" alt="">
                </button>

                <div class="basket-panel__header">
                    <h2>Корзина</h2>
                    <span>{{ basketItems.length }}</span>
                </div>

                <div class="basket-panel__items">
                    <article v-for="item in basketItems" :key="`${item.title}-${item.price}`" class="basket-panel__item">
                        <img :src="item.image" alt="">
                        <div class="basket-panel__info">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.size }}</p>
                        </div>
                        <strong>{{ item.price }}</strong>
                        <button class="basket-panel__remove" type="button" aria-label="Удалить товар">
                            <img :src="closeIcon" alt="">
                        </button>
                    </article>
                </div>

                <form class="basket-panel__form" @submit.prevent>
                    <Input theme="default" text="E-Mail" input-type="email" />
                    <Input theme="default" text="+7 (___) ___-__-__" input-type="tel" />

                    <button class="basket-panel__submit" type="submit">
                        <span>Оформить заказ</span>
                        <img :src="shoppingCartIcon" alt="">
                    </button>
                </form>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
.basket-panel{
    position: fixed;
    inset: 0;
    z-index: 1300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: rgba(75, 86, 96, 0.7);

    @include mobile{
        padding: 16px;
    }
}

.basket-panel__dialog{
    position: relative;
    display: flex;
    flex-direction: column;
    width: min(100%, 424px);
    padding: 30px 22px 40px;
    border-radius: 10px;
    background-color: #fff;
    color: #19242F;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

    @include mobile{
        width: min(100%, 320px);
        padding: 34px 16px 28px;
    }
}

.basket-panel__close{
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        opacity: 0.34;
    }

    @include mobile{
        top: 12px;
        right: 12px;
        width: 20px;
        height: 20px;
    }
}

.basket-panel__header{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;

    h2{
        margin: 0;
        font-size: 18px;
        line-height: 1.2;
        font-weight: 700;
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--accent-color);
        font-size: 10px;
        font-weight: 700;
    }

    @include mobile{
        margin-bottom: 16px;

        h2{
            font-size: 18px;
        }
    }
}

.basket-panel__items{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.basket-panel__item{
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    padding: 8px 10px;
    border-radius: 8px;
    background-color: #F8F8F8;

    > img{
        flex: 0 0 56px;
        width: 56px;
        height: 56px;
        border-radius: 6px;
        object-fit: cover;
    }

    strong{
        margin-left: auto;
        font-size: 12px;
        white-space: nowrap;
    }

    @include mobile{
        gap: 10px;
        padding: 10px;

        > img{
            flex-basis: 54px;
            width: 54px;
            height: 54px;
        }

        strong{
            font-size: 14px;
        }
    }
}

.basket-panel__info{
    min-width: 0;

    h3{
        margin: 0 0 5px;
        font-size: 10px;
        line-height: 1.2;
        font-weight: 700;
    }

    p{
        margin: 0;
        color: #858A8F;
        font-size: 10px;
    }

    @include mobile{
        h3{
            font-size: 12px;
        }

        p{
            font-size: 10px;
        }
    }
}

.basket-panel__remove{
    display: flex;
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        opacity: 0.16;
    }
}

.basket-panel__form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;

    .Email,
    .inp{
        max-width: none;
        width: 100%;
    }

    .Email .inp{
        height: 44px;
        padding: 0 18px;
        border-radius: 8px;
        background-color: #F8F8F8;
        color: #19242F;
    }

    .Email input::placeholder{
        color: #B7BDC3;
        font-size: 11px;
    }
}

.basket-panel__submit{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    padding: 0 22px;
    border: 0;
    border-radius: 999px;
    background-color: var(--accent-color);
    color: #19242F;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    img{
        width: 16px;
        height: 16px;
        filter: brightness(0);
    }

    @include mobile{
        height: 44px;
        font-size: 12px;
    }
}
</style>
