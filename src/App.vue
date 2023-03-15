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
    projects: []
  }),
  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + '/projects').then(res => {
        // In res.data arrivano i dati della chiamata
        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <app-header></app-header>
  <main class="container">
    <projects-list :projects="projects"></projects-list>
  </main>
</template>