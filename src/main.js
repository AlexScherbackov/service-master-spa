import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js';
import {SimpleSVG} from 'vue-simple-svg';

Vue.component('simple-svg', SimpleSVG);


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

