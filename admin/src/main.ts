import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios, { AxiosInstance } from 'axios'

Vue.config.productionTip = false

const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
