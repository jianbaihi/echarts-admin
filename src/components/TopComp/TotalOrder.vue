<script>
import CommonCard from './CommonCard.vue'
export default {
  data() {
    return {
      option: null,
    }
  },
  components: {
    CommonCard,
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      this.option = {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: [
          {
            data: [123, 432, 541, 234, 576, 112, 789, 98],
            type: 'line',
            smooth: true,
            itemStyle: {
                opacity: 0,
            },
            lineStyle: {
                opacity: 0,
            },
            areaStyle: {
                color:'purple',
            },
          },
        ],
      }
    },
  },
}
</script>

<template>
  <div class="total-order">
    <CommonCard title="累计订单额" value="13145">
      <template #default>
        <v-chart :option="option"></v-chart>
      </template>
      <template #footer>
        <span>昨日销售额</span>
        <span class="css-1">￥12768</span>
      </template>
    </CommonCard>
  </div>
</template>

<style lang="scss" scoped></style>
