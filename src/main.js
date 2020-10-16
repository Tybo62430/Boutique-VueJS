import Vue from "vue";
import App from "./App.vue";
import * as Filters from "./Utils/filters";
import router from "./router";
import axios from "axios";
import store from './store/store'

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
});

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://boutique-6967a.firebaseio.com/";
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
