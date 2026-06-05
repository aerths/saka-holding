<template>
    <div class="call">
        <div class="phone_number">
            <img src="../../assets/icons/PhoneCall.svg">
            <h2>+90 212 547 08 26</h2>
        </div>
        <div class="second_line_text">
            <a>Заказать звонок</a>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
    .call{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 42px;
        .phone_number{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6px;
            margin: 0;
            max-height: 28px;
        }
        .second_line_text{
            align-self: flex-end;
            
        }
    }
</style>