import './js/common'
import './assets/scss/main.scss'

import Vue from 'vue'
import App from './general/App.vue'
import store from './store'

export default new Vue({
    //store,
    render: h => h(App)
})