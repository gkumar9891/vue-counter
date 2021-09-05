import { createStore } from  "vuex";

const store = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        addToCounter(state, playload) {
            state.counter = state.counter + playload;
        },

        subtractFromCounter(state, playload) {
            state.counter = state.counter - playload;
        }
    }

});