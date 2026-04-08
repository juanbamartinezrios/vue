<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <button @click="goBack">Go Back</button>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    loadTeamMembers(teamId) {
      const teamSelected = this.teams.find((team) => team.id === teamId);

      const members = teamSelected ? teamSelected.members : [];
      const membersSelected = [];

      for (const member of members) {
        const selectedMember = this.users.find((user) => user.id === member);
        membersSelected.push(selectedMember);
      }

      this.members = membersSelected;
      this.teamName = teamSelected ? teamSelected.name : '';
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
    console.log('query parameters (always optional):', this.$route.query);
  },
  /*
  less flexible than watch, but more explicit and easier to understand. It is called before the route that renders this 
  component is confirmed, and before the component is created. 
  It has access to the next() function, which must be called to resolve the hook. 
  The hook can be used to perform navigation guards, fetch data, or perform any other asynchronous operations 
  before the route is confirmed.
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate TeamMembers');
    this.loadTeamMembers(to.params.teamId);
    next();
  },
  */
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>