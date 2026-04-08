<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <!--     
    $refs is an object that holds direct references to DOM elements
    or child components registered with the ref attribute.
    Its populated after the component renders and is mostly
    used for imperative access when template bindings aren't enough 
    -->
    <button @click="setGoal">Set goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter a valid goal.</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
        return;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

