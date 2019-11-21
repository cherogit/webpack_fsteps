import './js/common'
import './assets/scss/main.scss'


// import Vue from 'vue'  // Можно подключать так.
import Vue from 'vue'
import App from './general/App.vue'
import store from './store'

// Vue.component('example-component', require('./components/App.vue').default)

const app = new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App }
})