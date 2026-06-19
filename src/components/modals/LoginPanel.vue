<script setup lang="ts">
import closeIcon from '@/assets/icons/X.svg?url';
import eyeIcon from '@/assets/icons/Eye.svg?url';

defineProps<{
    isOpen: boolean
}>();

const emit = defineEmits<{
    close: []
}>();
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="login-panel" @click.self="emit('close')">
            <div class="login-panel__dialog" role="dialog" aria-modal="true" aria-label="Вход в личный кабинет">
                <button class="login-panel__close" type="button" aria-label="Закрыть" @click="emit('close')">
                    <img :src="closeIcon" alt="">
                </button>

                <h2>Вход</h2>

                <form class="login-panel__form" @submit.prevent>
                    <label class="login-panel__field">
                        <span class="login-panel__icon login-panel__icon--user"></span>
                        <input type="text" placeholder="Логин">
                    </label>

                    <label class="login-panel__field">
                        <img class="login-panel__field-icon" :src="eyeIcon" alt="">
                        <input type="password" placeholder="Пароль">
                    </label>

                    <button class="login-panel__submit" type="submit">Войти</button>
                </form>

                <button class="login-panel__forgot" type="button">Забыли пароль?</button>
                <button class="login-panel__register" type="button">Зарегистрироваться</button>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
.login-panel{
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

.login-panel__dialog{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 588px);
    padding: 76px 100px 60px;
    border-radius: 16px;
    background-color: #fff;
    color: #19242F;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);

    @include mobile{
        width: min(100%, 320px);
        padding: 42px 28px 34px;
    }
}

.login-panel__close{
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    width: 28px;
    height: 28px;
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

.login-panel h2{
    margin: 0 0 50px;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 700;

    @include mobile{
        margin-bottom: 25px;
        font-size: 18px;
    }
}

.login-panel__form{
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;

    @include mobile{
        gap: 11px;
    }
}

.login-panel__field{
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 68px;
    padding: 0 28px;
    border-radius: 12px;
    background-color: #F8F8F8;

    @include mobile{
        gap: 8px;
        height: 34px;
        padding: 0 14px;
        border-radius: 8px;
    }
}

.login-panel__icon{
    position: relative;
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    color: #B7BDC3;

    @include mobile{
        flex-basis: 10px;
        width: 10px;
        height: 10px;
    }
}

.login-panel__icon--user{
    &::before{
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: currentColor;

        @include mobile{
            top: 1px;
            left: 3px;
            width: 4px;
            height: 4px;
        }
    }

    &::after{
        content: '';
        position: absolute;
        left: 2px;
        bottom: 2px;
        width: 16px;
        height: 8px;
        border-radius: 8px 8px 2px 2px;
        background-color: currentColor;

        @include mobile{
            left: 1px;
            bottom: 1px;
            width: 8px;
            height: 4px;
        }
    }
}

.login-panel__field-icon{
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    opacity: 0.35;

    @include mobile{
        flex-basis: 10px;
        width: 10px;
        height: 10px;
    }
}

.login-panel input{
    width: 100%;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: #19242F;
    font-size: 16px;
    line-height: 1;

    &::placeholder{
        color: #B7BDC3;
    }

    @include mobile{
        font-size: 10px;
    }
}

.login-panel__submit{
    width: 100%;
    height: 78px;
    margin-top: 10px;
    border: 0;
    border-radius: 999px;
    background-color: var(--accent-color);
    color: #19242F;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;

    @include mobile{
        height: 39px;
        margin-top: 5px;
        font-size: 13px;
    }
}

.login-panel__forgot,
.login-panel__register{
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.login-panel__forgot{
    margin-top: 34px;
    color: #19242F;
    font-size: 14px;
    text-decoration: underline;

    @include mobile{
        margin-top: 17px;
        font-size: 10px;
    }
}

.login-panel__register{
    margin-top: 12px;
    color: var(--accent-color);
    font-size: 14px;

    @include mobile{
        margin-top: 6px;
        font-size: 10px;
    }
}
</style>
