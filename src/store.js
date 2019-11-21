import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {

    }
});

// if (typeof (window) !== 'undefined') {
//     window.onpopstate = function (event) {
//         if (event.state) {
//             store.commit('updateUrl', event.state.api);
//         } else {
//             window.location = history.location.pathname
//         }
//     };
// }