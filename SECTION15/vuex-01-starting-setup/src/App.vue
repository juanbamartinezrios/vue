<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="User Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.state.counter = this.$store.state.counter + 11;
      // ! MUTATION
      /*
      this.$store.commit('increment');
      this.$store.commit('increase', { value: 10 });

      alternativa
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
      */
      // ! ACTION
      this.$store.dispatch('numbers/increase', { value: 10 });
    },
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>