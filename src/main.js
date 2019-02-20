import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js';
import {router} from './router/router.js';
import {SimpleSVG} from 'vue-simple-svg';

Vue.component('simple-svg', SimpleSVG);


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

