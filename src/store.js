import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {historyStore} from './store/history';
import {breadcrumbs} from './store/breadcrumbs';
import {pagetitle} from './store/pagetitle';
import {modal} from './store/modal';
import {error} from './store/error';

export default new Vuex.Store({
    modules: {
        historyStore: historyStore,
        breadcrumbs: breadcrumbs,
        pagetitle: pagetitle,
        modal: modal,
        error: error
    }
});

if (typeof (window) !== 'undefined') {
    window.onpopstate = function (event) {
        if (event.state) {
            store.commit('updateUrl', event.state.api);
        } else {
            window.location = history.location.pathname
        }
    };
}