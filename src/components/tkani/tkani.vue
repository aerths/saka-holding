<script setup lang="ts">
import tkan from '@/components/tkani/tkan.vue';
import cloth1 from '@/assets/images/cloth/from-p1/cloth1.png';
import cloth2 from '@/assets/images/cloth/from-p1/cloth2.png';
import cloth3 from '@/assets/images/cloth/from-p1/cloth3.png';
import cloth4 from '@/assets/images/cloth/from-p1/cloth4.png';
import cloth5 from '@/assets/images/cloth/from-p1/cloth5.png';
import cloth6 from '@/assets/images/cloth/from-p1/cloth6.png';
</script>

<template>
<div class="tkani">
    <div class="TextCon">
      <h1>Выбирайте из множества разновидностей тканей</h1>
    </div>
    <div class="container">
        <tkan :image='cloth1' Btext="Футер 3-х Нитка"/>
        <tkan :image='cloth2' Btext="Френч Терри"/>
        <tkan :image='cloth3' Btext="Вискоза"/>
    </div>
    <div class="container">
        <tkan :image='cloth4' Btext="Пике"/>
        <tkan :image='cloth5' Btext="Кулинарная гладь"/>
        <tkan :image='cloth6' Btext="Бифлекс"/>
    </div>
    
    
</div>
</template>



<style setup lang="scss">
  .tkani{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1250px;
    gap: 30px;
    .TextCon{
      max-width: 40%;
      color: #FFF;
    }
    .container{
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
  }
</style>