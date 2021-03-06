// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// import VueResource from 'vue-resource'
import store from './vuex/store'
import top from './components/channels/top.vue'
// Vue.use(axios)
Vue.use(Vuex)
Vue.use(Element)

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component("my-top",top);

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
