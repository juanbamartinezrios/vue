<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    /*
    ejemplo de getter sin mapGetters, es decir, accediendo directamente al store
    counter() {
      return this.$store.getters.finalCounter;
    },
    */

    /*
  ejemplo de getter con mapGetters, es decir, accediendo directamente al store pero usando mapGetters 
  para no tener que escribir tanto código
  */
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>