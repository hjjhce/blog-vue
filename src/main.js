// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import axios from 'axios'


Vue.config.productionTip = false
// axios.defaults.baseURL = "http://localhost:9090/v1/";
Vue.prototype.$http = axios;
Vue.prototype.HOST = '/api'
Vue.prototype.router = router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
