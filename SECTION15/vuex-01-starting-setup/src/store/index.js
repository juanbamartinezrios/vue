import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './modules/counter/index';

/*
Each module is an object with its own state, mutations, actions, and getters, so the global store is composed from 
those smaller pieces instead of having one flat state. In other words, counterModule becomes the numbers sub-store and 
loginModule becomes the login sub-store, which keeps state and logic grouped by feature.
*/
// ! state de cada modulo, dentro del store global, se trata como state local de cada módulo
// ! no así con los mutations, actions y getters
const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;