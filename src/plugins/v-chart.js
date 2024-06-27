// 注册一下vue-echarts提供的组件
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import * as echarts from 'echarts'
import VueEcharts from 'vue-echarts'
Vue.component('v-chart', VueEcharts)//注册全局组件(这个组件是专门用在vue中高效绘制图表的)
