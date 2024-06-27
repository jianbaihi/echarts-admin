import Vue from 'vue'
import App from './App.vue'

import "resst-css" //清除浏览器自带的默认样式
import './plugins/element-ui.js'
import './plugins/echarts.js'
new Vue({
  render: (h) => h(App)
}).$mount('#app')
