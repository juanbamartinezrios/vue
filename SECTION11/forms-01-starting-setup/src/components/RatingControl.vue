<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'fair' }">
      <button type="button" @click="activate('fair')">Fair</button>
    </li>
    <li :class="{ active: modelValue === 'excellent' }">
      <button type="button" @click="activate('excellent')">Excellent</button>
    </li>
  </ul>
</template>

<script>
/* The props array defines modelValue as the prop that receives the initial value from the parent via v-model. 
In Vue 3, modelValue is the standard prop name for custom components using v-model.
This prop is reactive, meaning if the parent's bound data changes, the component will update accordingly. 
The emits array declares update:modelValue, which is the required event for v-model to work—when emitted, 
it signals the parent to update its bound data. Without this emit, v-model wouldn't synchronize changes. */
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  /*   data() {
    return {
      activeOption: this.modelValue,
    };
  }, */
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>