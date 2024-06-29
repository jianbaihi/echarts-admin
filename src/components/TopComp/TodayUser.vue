<script>
import CommonCard from './CommonCard.vue'
export default {
  data() {
    return {
      option: null,
    }
  },
  props:['reportData'],
  components: {
    CommonCard,
  },
  watch:{
    reportData(newval){
        this.renderChart(newval.orderUserTrend)
    }
  },
  methods: {
    renderChart(data) {
      this.option = {
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['00:00', '03:00', '05:00', '07:00','09:00','11:00', '13:00','15:00','17:00','19:00','21:00','23:00'],
          show: false,
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
            name: '实时交易量',
            data,
            type: 'bar',
            barWidth: '60%',
          },
        ],
      }
    },
  },
}
</script>

<template>
  <!-- <div class="today-user"> -->
    <CommonCard title="今日用户交易数" :value="reportData.userToday">
      <template #default>
        <v-chart :option="option"></v-chart>
      </template>
      <template #footer>
        <span>退货率</span>
        <span class="css-1">{{reportData.returnRate}}%</span>
      </template>
    </CommonCard>
  <!-- </div> -->
</template>

<style lang="scss" scoped>

</style>
