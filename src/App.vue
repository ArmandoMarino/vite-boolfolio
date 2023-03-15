<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
// Server PHP Laravel con /api !
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
  name: 'App',
  components: {
    AppHeader,
    ProjectsList,
  },
  data: () => ({
    projects: [],
    isLoading: false,
  }),
  methods: {
    fetchProjects() {
      // Loading alla chiamata a true(on)
      this.isLoading = true;
      axios.get(apiBaseUrl + '/projects').then(res => {
        // In res.data arrivano i dati della chiamata
        this.projects = res.data;
      })
        // Controllo con catch se ci sono errori
        .catch((err) => {
          console.error(err);
        })
        // Loading a chiamata finita a false (off)
        .then(() => {
          this.isLoading = false;
        })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <!-- AppLoader importato globalmente in main.js si vedrà (v-if) solo se isLoading sarà true -->
  <app-loader v-if="isLoading"></app-loader>
  <app-header></app-header>
  <main class="container">
    <projects-list :projects="projects"></projects-list>
  </main>
</template>