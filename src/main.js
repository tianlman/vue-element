// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-default/index.css";
import Vuex from "vuex";
// import axios from "axios";
import VueResource from "vue-resource";
import store from "./vuex/store";
import haha from "./components/haha.vue";
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Element);

Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.component("my-component",haha);

new Vue({
  el: "#app",
  router,
  // axios,
  store: store,
  template: "<App/>",
  components: { App }
});
