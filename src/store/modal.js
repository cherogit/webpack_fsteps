export const modal = {
    state: {
        status: false,
        content: {}
    },
    mutations: {
        show(state, data) {
            state.status = true;
            state.content = data;
        },
        hide(state, data) {
            state.status = false;
            state.content = {};
        }
    },
    actions: {
        showModal( { commit, state, rootState}, data) {
            data = data || {};
            commit('show', data);
        },
        hideModal( { commit, state, rootState }, data) {
            commit('hide', data);
        },
    }
}