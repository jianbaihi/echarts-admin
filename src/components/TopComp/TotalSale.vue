<script>
import CommonCard from './CommonCard.vue';
    export default {
        components:{
            CommonCard,
        }
    }
</script>

<template>
    <div class="total-sale">
        <CommonCard title="累计销售额" value="230000">
            <template #default>
                <div>
                    <span>日同比</span>
                    <span class="css-1">2.33%</span>
                    <span class="increase"></span>
                </div>
                <div>
                    <span>月同比</span>
                    <span class="css-1">4.14%</span>
                    <span class="increase"></span>
                </div>
            </template>
            <template #footer>
                    <span>昨日销售额</span>
                    <span class="css-1">￥200000</span>
            </template>
        </CommonCard>
    </div>
</template>

<style lang="scss" scoped>

</style>