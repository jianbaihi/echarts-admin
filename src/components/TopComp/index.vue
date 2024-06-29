<script>
import TotalSale from './TotalSale.vue'
import TotalOrder from './TotalOrder.vue'
import TodayUser from './TodayUser.vue'
import TotalUser from './TotalUser.vue'
import { getReportData } from '../../api'
export default {
  data() {
    return {
      reportData: {},
    }
  },
  components: {
    TotalSale,
    TotalOrder,
    TodayUser,
    TotalUser,
  },
  async mounted() {
    const res = await getReportData()
    // console.log(res,'report data')
    this.reportData = res.data
  },
}
</script>

<template>
  <div class="top-comp">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="6"><TotalSale :reportData = "reportData"/></el-col>
      <el-col :span="6"><TotalOrder :reportData = "reportData"/></el-col>
      <el-col :span="6"><TodayUser :reportData = "reportData"/></el-col>
      <el-col :span="6"><TotalUser :reportData = "reportData"/></el-col>
    </el-row>
  </div>
</template>

<!-- 我们希望能把样式作用于组件内部的时候，可以把scope去掉，
    然后给最外层的div加上类名，就可以在该类名下用scss语法写样式而不会污染全局的样式 -->
<style lang="scss">
.top-comp {
  span {
    font-size: 14px !important;
    color: #464545;
    &.increase {
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 4px;
      border-style: solid;
      border-color: transparent transparent green transparent;
      margin-left: 10px;
      transform: translateY(-50%);
    }
    &.decrease {
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 4px;
      border-style: solid;
      border-color: red transparent transparent transparent;
      margin-left: 10px;
    }
  }
  .css-1 {
    margin-left: 8px;
    font-weight: 550;
  }
}
</style>
