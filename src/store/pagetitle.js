export const pagetitle = {
    state: {
        title: '',
    },
    mutations: {
        setPageTitle(state, title) {
            state.title = title;
        },
    },
    actions: {
        updatePageTitle({commit, state, rootState}, title) {
            commit('setPageTitle', title);
        },
    }
}