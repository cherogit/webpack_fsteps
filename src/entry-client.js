import './js/common'
import './assets/scss/main.scss'

import app from './app';
// import Vue from 'vue';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
//
// Vue.use(VueAxios, axios);

window.onload = function () {
    app.$mount('#app');
};