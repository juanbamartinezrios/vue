<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/UI/BaseCard.vue';

export default {
  components: {
    CoachForm,
    BaseCard,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$router.push('/coaches');
      // ? .replace redirecciona pero evita que uno pueda volver a la página anterior
      this.$router.replace('/coaches');
    },
  },
};
</script>
