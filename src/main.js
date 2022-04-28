import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "echarts";
import router from '../src/router/index'
import store from '../src/store'
import axios from 'axios'
import "./axios"
import BaiduMap from 'vue-baidu-map'
import VueCookies from 'vue-cookies';
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
Vue.use(BaiduMap, {
  ak: 'Xylki2NmHx9uBiGNCfxcYpFmfB0tMA7E'
})
new Vue({
  store,
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
