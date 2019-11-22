export const historyStore = {
    state: {
        currentUrl: "",
    },
    getters: {

    },
    mutations: {
        updateUrl(state, url) {
            state.currentUrl = url;
        }
    },

    actions: {
        goToUrl( { commit, state, rootState }, url) {
            if (window) {
                history.pushState(url.stateObj, null, url.public);
                commit('updateUrl', url.api);
            }
        },
    }
}


