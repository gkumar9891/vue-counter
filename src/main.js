import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0]
        }
    },
    mutations: {
        addToCounter(state, playload) {
            state.counter = state.counter + playload;
            state.history.push(state.counter);
        },

        subtractFromCounter(state, playload) {
            state.counter = state.counter - playload;
            state.history.push(state.counter);
        },
    },

    actions: {
        async requestRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
            context.commit('addToCounter', data.data);
        }         
    },

    getters: {
        activeIndexes: (state) => (playload) => {
            let indexes = [];
            state.history.forEach((number, index) => {   
                if(number == playload) {
                    indexes.push(index);
                }
            });
            return indexes;
       },
    }

});

createApp(App).use(store).mount('#app')
