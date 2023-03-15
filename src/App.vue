<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
// Server PHP Laravel con /api !
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
  name: 'App',
  components: {
    AppHeader,
    ProjectsList,
    AppAlert
  },
  data: () => ({
    isLoading: false,
    isALertOpen: false,
    projects: {
      data: [],
      links: []
    },
  }),
  methods: {
    fetchProjects() {
      // Loading alla chiamata a true(on)
      this.isLoading = true;
      axios.get(apiBaseUrl + '/projects').then(res => {
        // Destructuring : tiro fuori data e links da res.data e lo riassegno in project dando solo data e links che sono vuoti inizialmente
        const { data, links } = res.data;
        this.projects = { data, links };

        // In res.data arrivano i dati della chiamata da axios 
        this.projects = res.data;
      })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          this.isALertOpen = true;
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
  <app-header></app-header>
  <app-alert :is-open="isALertOpen" @close="isALertOpen = false"></app-alert>
  <main class="container">
    <!-- AppLoader importato globalmente in main.js si vedrà (v-if) solo se isLoading sarà true -->
    <app-loader v-if="isLoading"></app-loader>
    <!-- ALtrimenti v-else vai vedere la projectsList -->
    <projects-list v-else :projects="projects.data"></projects-list>
  </main>

  <!-- <footer>
      <ul class="pagination">
        <li v-for="link in project.links" :key="link.label" class="page-item" :class="{ 'active': link.active }">
          <a class="page-item" href="">1</a>
        </li>
      </ul>
    </footer> -->
</template>