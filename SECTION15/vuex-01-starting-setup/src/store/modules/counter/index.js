import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    /*
    mutations property defines a set of synchronous functions responsible for directly modifying the application's state. 
    This is a core concept in Vuex, where state changes are centralized and predictable—think of mutations as the "setters"
    for your global state object, ensuring that all updates happen in a controlled, trackable way

    mutations should be synchronous because 
    Vuex relies on them to track state changes and enable features like time-travel debugging.
    */
    mutations: counterMutations,
    /*
    actions property defines a set of functions that handle asynchronous operations and business logic before committing 
    mutations to change the state. Unlike mutations, which must be synchronous, actions can perform tasks like API calls, 
    timers, or complex computations—think of them as the "dispatchers" that orchestrate state updates indirectly. 
    Each action receives a context object (containing methods like commit, dispatch, getters, and state) as the first 
    parameter, allowing it to trigger mutations or other actions.

    A common pattern is to use actions for async work, such as fetching data from a server, 
    and then commit a mutation to update the state once the operation completes. For example, 
    an action might look like async fetchData(context) { const data = await apiCall(); context.commit('setData', data); }
    */
    actions: counterActions,
    getters: counterGetters
}