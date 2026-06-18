<script setup lang="ts">
import phoneCallIcon from '@/assets/icons/PhoneCall.svg?url';
</script>

<template>
    <div class="call">
        <div class="phone_number">
            <img :src="phoneCallIcon" alt="">
            <h2>+90 212 547 08 26</h2>
        </div>
        <div class="second_line_text">
            <a>Заказать звонок</a>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.call {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;

    @include laptop {
        padding: 0 12px;
    }

    .phone_number {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        margin: 0;
        max-height: 28px;

        h2 {
            margin: 0;
            font-size: 18px;
            white-space: nowrap;
        }
    }

    .second_line_text {
        align-self: flex-end;
    }
}
</style>
