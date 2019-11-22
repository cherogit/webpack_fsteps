import Vue from 'vue'
import App from './general/App.vue'
import store from './store'

export default new Vue({
    render: h => h(App),
    data: {
        store: store
    }
})