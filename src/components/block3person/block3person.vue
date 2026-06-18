<!-- block3person.vue -->
<script setup lang="ts">
import person from './person.vue'
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
                <button>OOO</button>
            </div>
        </div>
        <div class="full_blocks_person">
            <div class="Container-Person">
                <person 
                    text="Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
                    name="Наталья"
                />
            </div>
            <div class="Container-Person">
                <person 
                    text="Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию"
                    name="Василий"
                />
            </div>
            <div class="Container-Person">
                <person 
                    text="Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений."
                    name="Геннадий"
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
    }
}

.btn_title_person {
    button {
        background-color: #e6e6e6;
        border: none;
        border-radius: 30px;
        padding: 12px 32px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background-color: #d4d4d4;
        }
    }
}

.full_blocks_person {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.Container-Person {
    display: flex;
}
</style>