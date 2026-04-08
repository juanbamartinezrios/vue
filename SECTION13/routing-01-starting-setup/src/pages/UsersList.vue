<template>
  <button @click="confirmInput">CONFIRM</button>
  <button @click="saveChanges">SAVE CHANGES</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      // do something
      // navigate programmatically
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(_, _2, next) {
    console.log('beforeRouteEnter UsersList');
    next();
  },
  /*
  Esto es para evitar que el usuario abandone la pagina sin guardar los cambios. 
  Si el usuario tiene cambios sin guardar, se le muestra un mensaje de confirmacion. 
  Si el usuario confirma que quiere abandonar la pagina, se le permite navegar, sino se le impide navegar.
  */
  beforeRouteLeave(_, _2, next) {
    console.log('beforeRouteLeave UsersList');
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('You have unsaved changes! Are you sure you want to leave?');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>