<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- Scoped slots in Vue.js are a powerful feature that allow child components to pass data 
        to the parent component's slot content, enabling more flexible and reusable components. 
        Unlike regular slots, which only allow the parent to provide static content, 
        scoped slots let the child component expose its internal data to the parent -->
      <slot :item="goal" another-prop="Additional Info"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue", "Master Vue"],
    };
  },
};
</script>

