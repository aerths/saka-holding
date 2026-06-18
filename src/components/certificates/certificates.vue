<script setup lang="ts">
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
    import Certificate from '@/components/certificates/certificate.vue';
    import Swap from '@/components/certificates/swap.vue';
    import sert1 from '@/assets/images/sertificati/sert1.png';
    import sert2 from '@/assets/images/sertificati/sert2.png';
    import sert3 from '@/assets/images/sertificati/sert3.png';

    const certificates = [
        { id: 1, image: sert1 },
        { id: 2, image: sert2 },
        { id: 3, image: sert3 },
    ];

    const currentIndex = ref(0);
    const visibleCertificateCount = ref(3);

    const visibleCertificates = computed(() =>
        Array.from({ length: visibleCertificateCount.value }, (_, index) =>
            certificates[(currentIndex.value + index) % certificates.length]
        )
    );

    const showPreviousCertificate = () => {
        currentIndex.value = (currentIndex.value - 1 + certificates.length) % certificates.length;
    };

    const showNextCertificate = () => {
        currentIndex.value = (currentIndex.value + 1) % certificates.length;
    };

    const updateVisibleCertificateCount = () => {
        visibleCertificateCount.value = window.matchMedia('(max-width: 1024px)').matches ? 1 : 3;
    };

    onMounted(() => {
        updateVisibleCertificateCount();
        window.addEventListener('resize', updateVisibleCertificateCount);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateVisibleCertificateCount);
    });
</script>

<template>
    <div class="certificates">
        <h1>Saka Tekstil дорожит своей репутацией</h1>
        <div class="container">
            <Swap theme="left" aria-label="Предыдущий сертификат" @click="showPreviousCertificate"/>
            <div class="sliddder" aria-live="polite">
                <Certificate
                    v-for="certificate in visibleCertificates"
                    :key="certificate.id"
                    :image="certificate.image"
                />
            </div>
            <Swap theme="right" aria-label="Следующий сертификат" @click="showNextCertificate"/>
        </div>
    </div>


    

</template>

<style setup lang="scss">
  .certificates{
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: 100%;
    align-items: center;
    .container{
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .swap{
            flex: 0 0 50px;
        }

        @include mobile{
            justify-content: center;
            gap: 14px;

            .swap{
                flex: 0 0 42px;
                width: 42px;
                height: 42px;
            }
        }
    }
    .sliddder{
        display: flex;
        flex-direction: row;
        gap: 40px;
        width: 80%;
        align-items: center;
        min-width: 0;

        .certificate{
            flex: 0 0 calc((100% - 80px) / 3);
            min-width: 180px;
        }

        @include laptop{
            flex: 0 1 360px;
            width: min(360px, calc(100% - 120px));
            max-width: 360px;

            .certificate{
                flex-basis: 100%;
            }
        }

        @include mobile{
            flex: 0 0 clamp(168px, 52vw, 190px);
            width: clamp(168px, 52vw, 190px);
            max-width: 190px;

            .certificate{
                min-width: 0;
            }
        }
    }
  }
</style>
