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

<style setup lang="scss">
  .FullBlocks{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    max-width: 1250px;
  }
    .blok_saka_und_slider {
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    
    gap: 220px;
  }
</style>