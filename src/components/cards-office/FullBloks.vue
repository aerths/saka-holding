<script setup lang="ts">
    import blok from '@/components/cards-office/blok.vue';
    import news1 from '@/assets/images/news/news1.png';
    import news2 from '@/assets/images/news/news2.png';
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
            :image="news2"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        </div>
        <div class="blok_saka_und_slider">
        <blok
            :image="news1"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        <blok
            :image="news2"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        </div>
        <div class="blok_saka_und_slider">
        <blok
            :image="news1"
            NavText="Пример текста 
            для заголовка новости"
            text="Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости"
            data="31.03.2022"
            />
        <blok
            :image="news2"
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
    
    
  }
    .blok_saka_und_slider {
    display: flex;
    flex-direction: column;
    
    margin:50px 0px;
    gap: 220px;
    margin-bottom: 500px;
  }
</style>