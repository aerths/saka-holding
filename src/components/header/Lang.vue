<template>
    <div class="lang">
        <div class="ru">
            <a>LIGHT</a>
        </div>
        <a>/</a>
        <div class="en">
            <a>DARK</a>
        </div>
    </div>
</template>

<script>
</script>

<style lang ="scss">
    .lang{
        display: flex;
        flex-direction: row;
        gap: 6px;
        font-size: 12px;
        .ru{
            color: #FFF
        }
        .en{
            color: var(--bg-duo-color);
        }
    }
    
</style>