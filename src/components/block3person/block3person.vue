<!-- block3person.vue -->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import person from './person.vue'
import Swap from '@/components/certificates/swap.vue';

const persons = [
    {
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
        name: 'Наталья',
    },
    {
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию',
        name: 'Василий',
    },
    {
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.',
        name: 'Геннадий',
    },
];

const currentIndex = ref(0);
const visibleCount = ref(3);

const updateVisibleCount = () => {
    if (window.innerWidth <= 639) {
        visibleCount.value = 1;
        return;
    }

    if (window.innerWidth <= 1024) {
        visibleCount.value = 2;
        return;
    }

    visibleCount.value = 3;
};

const visiblePersons = computed(() => {
    return Array.from({ length: Math.min(visibleCount.value, persons.length) }, (_, index) => {
        return persons[(currentIndex.value + index) % persons.length];
    });
});

const showPrevious = () => {
    currentIndex.value = (currentIndex.value - 1 + persons.length) % persons.length;
};

const showNext = () => {
    currentIndex.value = (currentIndex.value + 1) % persons.length;
};

onMounted(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisibleCount);
});
</script>

<template>
    <div class="redactor_persons_block">
        <div class="title">
            <div>
                <h2>
                    Делаем все для того, чтобы вы остались довольны нашей тканью
                </h2>
            </div>
            <div class="btn_title_person">
                <Swap theme="square-left" aria-label="Предыдущий отзыв" @click="showPrevious"/>
                <Swap theme="square-right" aria-label="Следующий отзыв" @click="showNext"/>
            </div>
        </div>
        <div class="full_blocks_person">
            <div
                v-for="(item, index) in visiblePersons"
                :key="`${item.name}-${currentIndex}-${index}`"
                class="Container-Person"
                :class="{ 'Container-Person--active': index === 0 }"
            >
                <person 
                    :text="item.text"
                    :name="item.name"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.redactor_persons_block {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include laptop{
        gap: 28px;
    }

    @include mobile{
        padding: 0;
        gap: 22px;
    }
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    div:first-child {
        flex: 1;
        max-width: 80%;
    }

    h2 {
        font-size: 32px;
        font-weight: bold;
        line-height: 1.2;
        margin: 0;

        @include laptop{
            font-size: 26px;
        }

        @include mobile{
            font-size: 20px;
        }
    }

    @include mobile{
        flex-direction: column;
        align-items: flex-start;
    }
}

.btn_title_person {
    display: flex;
    align-items: center;
    gap: 12px;

    @include mobile{
        align-self: flex-end;
        gap: 8px;
    }

    :deep(.swap--square-left),
    :deep(.swap--square-right){
        @include laptop{
            width: 52px;
            height: 52px;
        }

        @include mobile{
            width: 44px;
            height: 44px;
            border-radius: 12px;
        }
    }
}

.full_blocks_person {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    flex-wrap: nowrap;

    @include laptop{
        gap: 24px;
    }

    @include mobile{
        gap: 0;
    }
}

.Container-Person {
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    max-width: 360px;

    :deep(.block_text_person){
        transition: border-color 0.2s ease;
        border: 4px solid transparent;
    }

    &--active :deep(.block_text_person){
        border-color: #1E9BFF;
    }

    @include mobile{
        max-width: 100%;
    }
}
</style>
