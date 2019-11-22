export const error = {
    state: {
        status: false,
    },
    mutations: {
        setError(state) {
            state.status = true;
        },
        removeError(state) {
            state.status = false;
        }
    },
    actions: {

    }
}