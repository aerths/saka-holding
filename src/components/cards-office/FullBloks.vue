<script setup lang="ts">
    import blok from '@/components/cards-office/blok.vue';
    import news1 from '@/assets/images/news/news1.png';
    import news2 from '@/assets/images/news/news2.png';
    import news3 from '@/assets/images/news/news3.png';
    import news4 from '@/assets/images/news/news4.png';
    import news5 from '@/assets/images/news/news5.png';
</script>

<template>
    <div class="FullBlocks">
        <div class="blok_saka_und_slider">
        <blok
            :image="news1"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        <blok
            :image="news4"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        </div>
        <div class="blok_saka_und_slider">
        <blok
            :image="news2"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        <blok
            :image="news5"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        </div>
        <div class="blok_saka_und_slider">
        <blok
            :image="news3"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        <blok
            :image="news1"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/mixins' as *;

  .FullBlocks{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    width: 100%;
    max-width: 1128px;
    align-items: start;

    @include laptop {
      display: block;
      max-width: 100%;
    }

    @include mobile {
      display: block;
    }
  }

  .blok_saka_und_slider {
    display: contents;

    @include laptop {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;

      &:nth-child(n + 2) {
        display: none;
      }
    }

    @include mobile {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 16px;

      &:nth-child(n + 2) {
        display: none;
      }
    }
  }
</style>
