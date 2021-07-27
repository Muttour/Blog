import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "./mock";
import "./api/banner";
import "./api/blog";
import loading from './directives/loading';
import lazy from './directives/lazy.js';
import showMessage from "./utils/showMessage";
import "./eventBus";
import store from "./store";

Vue.prototype.$showMessage = showMessage;
Vue.directive('loading', loading);
Vue.directive('lazy', lazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


