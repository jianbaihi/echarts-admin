import Vue from 'vue'
import App from './App.vue'

import "reset-css" //清除浏览器自带的默认样式
import './plugins/element-ui'
import './plugins/v-chart'
new Vue({
  render: (h) => h(App)
}).$mount('#app')
