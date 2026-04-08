<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences founded.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      axios.get('https://vue-complete-guide-ff3ef-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response) {
            return response;
          }
        })
        .then((data) => {
          let res = [];
          const dataObtained = data.data;
          for (const id in dataObtained) {
            res.push({
              id: id,
              name: dataObtained[id].name,
              rating: dataObtained[id].rating,
            });
          }
          this.results = res;
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching experiences:', error);
          this.error = 'Failed to load experiences. Please try again later.';
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>