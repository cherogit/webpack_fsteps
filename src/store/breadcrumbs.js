export const breadcrumbs = {
    state: {
        items: [],
    },
    mutations: {
        setItems(state,items) {
            state.items = items;
        },
    },
    actions: {
        updateBreadcrumbs( { commit, state, rootState }, items) {
            commit('setItems',items);
        },
    }
}