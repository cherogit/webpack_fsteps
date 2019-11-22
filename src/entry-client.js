import './assets/scss/main.scss'

import app from './app';
import Vue from 'vue';

import axios from 'axios';
Vue.prototype.$axios = axios;

window.onload = function () {
    app.$mount('#app');
};