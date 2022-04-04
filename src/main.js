import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "echarts";
import router from '../src/router/index'
import store from '../src/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
