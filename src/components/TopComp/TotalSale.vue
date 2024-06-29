<script>
import CommonCard from './CommonCard.vue';
    export default {
        components:{
            CommonCard,
        },
        props:['reportData']
    }
</script>

<template>
    <!-- <div class="total-sale"> -->
        <CommonCard title="累计销售额" :value="reportData.salesToday">
            <template #default>
                <div>
                    <span>日同比</span>
                    <span class="css-1">{{reportData.salesGrowLastDay}}%</span>
                    <span :class="{
                        increase: reportData.salesGrowLastDay > 0,
                        decrease: reportData.salesGrowLastDay < 0}"></span>
                </div>
                <div>
                    <span>月同比</span>
                    <span class="css-1">{{reportData.saleSGrowLastMonth}}%</span>
                    <span :class="
                        {increase: reportData.saleSGrowLastMonth > 0,
                        decrease: reportData.saleSGrowLastMonth < 0}"></span>
                </div>
            </template>
            <template #footer>
                    <span>昨日销售额</span>
                    <span class="css-1">￥{{reportData.salesLastDay}}</span>
            </template>
        </CommonCard>
    <!-- </div> -->
</template>

<style lang="scss" scoped>

</style>