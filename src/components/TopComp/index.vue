<script>
import TotalSale from './TotalSale.vue'
import TotalOrder from './TotalOrder.vue'
export default {
    components: {
        TotalSale,
        TotalOrder,
    }
}
</script>

<template>
    <div class="top-comp">
        <el-row :gutter="20">
            <el-col :span="6"><TotalSale /></el-col>
            <el-col :span="6"><TotalOrder /></el-col>
            <el-col :span="6"><TotalSale /></el-col>
            <el-col :span="6"><TotalSale /></el-col>
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