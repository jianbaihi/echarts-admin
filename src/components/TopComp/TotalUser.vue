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
        this.renderChart(newval.userLastMonth,newval.userToday)
    }
  },
  methods: {
    renderChart(data1,data2) {
      this.option = {
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          type: 'category',
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
            type: 'bar',
            data:[data1],
            stack: 'stack1',
            itemStyle: {
              color: 'green',
            },
            barWidth: '10',
          },
          {
            type: 'bar',
            data:[data2],
            stack: 'stack1',
            itemStyle: {
              color: 'gray',
            },
            barWidth: '10',
          },
          // 自定义绘制的图形
          {
            type: 'custom',
            data: [data1],
            renderItem: function (params, api) {
              // 获取三角形的绘制位置
              const endPoint = api.coord([api.value(0), 0])
              // 返回两个三角形
              return {
                type: 'group',
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M889.696 320.8H158.848l365.504 365.536 365.344-365.536z',
                      x: endPoint[0] - 5,
                      y: 5,
                      width: 10,
                      height: 10,
                      layout: 'cover',
                    },
                    style: {
                      fill: 'green',
                    },
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z',
                      x: endPoint[0] - 5,
                      y: 35,
                      width: 10,
                      height: 10,
                      layout: 'cover',
                    },
                    style: {
                      fill: 'green',
                    },
                  },
                ],
              }
            },
          },
        ],
      }
    },
  },
}
</script>

<template>
  <div class="total-user">
    <CommonCard title="累计用户数" :value="reportData.totalUser">
      <template #default>
        <v-chart :option="option"></v-chart>
      </template>
      <template #footer>
        <div class="wrapper">
          <div>
            <span>日同比</span>
            <span class="css-1">{{reportData.userGrowLastDay}}%</span>
            <span class="
                {increase: reportData.userGrowLastDay > 0,
                decrease: reportData.userGrowLastDay < 0}"></span>
          </div>
          <div>
            <span>月同比</span>
            <span class="css-1">{{reportData.userGrowLastMonth}}%</span>
            <span class="{
                increase: reportData.userGrowLastMonth > 0,
                decrease: reportData.userGrowLastMonth < 0}"></span>
          </div>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 10px;
}
</style>
